import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../../../Hooks/useData";
import BlogInfo from "../../../components/BlogInfo";
import AuthorInfo from "../../../components/AuthorInfo";
import "./Blog.css";
// import useData from "../../Hooks/useData";

const Blog = () => {
    const text = useParams();
    const { data } = useData();
    // console.log(data);
    // console.log(text);

    return (
        <div className="max-w-7xl mx-auto">
            {data
                .filter((blog) => blog.blog.title === text.title)
                .map((blog) => (
                    <div className="flex justify-evenly   ">
                        <div className="max-w-2xl  mx-6 ">
                            <BlogInfo blog={blog.blog} />
                        </div>
                        <div className="max-w-sm hidden lg:block border-l">
                            <AuthorInfo author={blog.author} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Blog;
