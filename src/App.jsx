import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./layout/Main/Navbar";
import { FcSearch } from "react-icons/fc";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="">
            <RouterProvider router={routes} />
            {/* <div className="flex items-center h-7 pl-2 rounded bg-white">
                <input className=" rounded outline-0" type="text" />
                <button className=" px-2 ">
                    <FcSearch />
                </button>
            </div> */}
        </div>
    );
}

export default App;
