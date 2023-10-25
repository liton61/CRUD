import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Home = () => {
    const users = useLoaderData();
    const [updateUser, setUpdateUser] = useState(users);

    const handleDelete = (_id) => {
        // console.log(_id);

        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("Data deleted successfully !")
                    const clearData = updateUser.filter((item) => item._id !== _id);
                    setUpdateUser(clearData);
                }
            })
    }
    return (
        <div className="bg-gray-100 h-screen">
            <h1 className="text-center text-2xl font-bold my-10">Get Data From Database</h1>
            <div>
                <div className="overflow-x-auto w-[70%] mx-auto bg-white p-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                updateUser.map(user => <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="btn">Delete</button>
                                    </td>
                                    <td>
                                        <Link to={`edit/${user._id}`}>
                                            <button className="btn">Edit</button>
                                        </Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;