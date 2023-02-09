import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import AddBlog from "../pages/Main/AddBlog";
import Blog from "../pages/Main/Blog/Blog";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/Main/ReadingHistory";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/addBlog",
                element: <AddBlog />,
            },
            {
                path: "/history",
                element: <ReadingHistory />,
            },
            {
                path: "/blog/:title",
                element: <Blog />,
            },
        ],
    },
]);

export default routes;
