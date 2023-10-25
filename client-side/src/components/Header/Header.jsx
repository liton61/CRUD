import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="nav-container flex justify-between mx-2 mt-7">
            <h1 className="text-2xl font-bold">CRUD</h1>
            <nav className="flex nav-list">
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Home
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="ml-10 text-lg font-semibold">
                        <NavLink to="/add" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>
                            Add
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;