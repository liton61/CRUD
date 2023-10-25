


const Add = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email, password);
        form.reset();
        const info = {
            name,
            email,
            password
        }
        console.log(info);

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Successfully added")
            })
    }
    return (
        <div className="bg-gray-200 p-6 flex justify-center items-center py-24">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4 text-center">Form</h1>

                <form onSubmit={handleSubmit} id="login-form">
                    <div className="mb-4">
                        <label className="block text-gray-600">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border rounded focus:outline-none"
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border rounded focus:outline-none"
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border rounded focus:outline-none"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add;