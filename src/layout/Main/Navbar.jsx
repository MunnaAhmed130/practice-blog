import React from "react";
import { Link } from "react-router-dom";
import style from "../../style";

const linkStyle = "hover:text-black text-gray-500 transition";
const Navbar = () => {
    return (
        <nav className=" border-b">
            <div
                className={`flex justify-between items-center  ${style.containerPadding} py-3`}
            >
                {/* logo */}
                <h1 className="sm:text-4xl text-[32px] font-bold">DBlogers</h1>
                {/* primary nav */}
                <div className=" flex">
                    {/* <div href="/">Reading History</div> */}
                    <Link to="/home" className={`mr-4 ${linkStyle}`}>
                        Home
                    </Link>
                    <Link to="/addBlog" className={`mr-4 ${linkStyle}`}>
                        Add Blog
                    </Link>
                    <Link to="/history" className={`${linkStyle}`}>
                        Reading History
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
