import { createContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./layout/Main/Navbar";
import { FcSearch } from "react-icons/fc";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import useData from "./Hooks/useData";

export const BLOG_CONTEXT = createContext();

function App() {
    const value = useData();

    return (
        <div className="">
            <BLOG_CONTEXT.Provider value={value}>
                <RouterProvider router={routes} />
            </BLOG_CONTEXT.Provider>
        </div>
    );
}

export default App;
