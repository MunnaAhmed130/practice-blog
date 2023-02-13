import React, { useContext, useEffect, useState } from "react";
import { BLOG_CONTEXT } from "../../App";
import BlogCard from "../../components/BlogCard";
import useData from "../../Hooks/useData";

const Home = () => {
    const { data } = useContext(BLOG_CONTEXT);
    return (
        <div className="mx-auto max-w-7xl mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-4">
            {data.map((blog) => (
                <BlogCard blog={blog} key={blog.blog.title} />
            ))}
        </div>
    );
};

export default Home;
