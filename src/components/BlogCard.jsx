import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ blog }) => {
    const tags = blog.blog.tags;
    console.log(blog.blog.tags);
    // console.log(data);
    const desciption = ` ${blog.blog.description.slice(
        0,
        200
    )} ... **see more**`;
    return (
        <div>
            <div className={`border rounded-lg overflow-hidden`}>
                <Link to={`/blog/${blog.blog.title}`}>
                    <img
                        className="h-48 w-full bg-cover border-0"
                        src={blog.blog.image}
                        alt=""
                    />
                </Link>
                <div className="px-3">
                    <div className="flex items-center gap-5 pt-3 font-sans">
                        {/* <img
                        className="h-10 w-10 rounded-full"
                        src={blog.author.image}
                        alt=""
                    /> */}
                        <div className="flex flex-col">
                            <Link to="">
                                <h2 className="text-md font-semibold">
                                    {blog.blog.title}
                                </h2>
                            </Link>
                            <Link to="">
                                <h4 className="text-sm  text-gray-900">
                                    by {blog.author.name}
                                </h4>
                            </Link>

                            {/* <span className="text-sm text-gray-500">
                            {blog.blog.publishedDate}
                        </span> */}
                            {/* <p className="text-sm">{blog.author.name}</p> */}
                        </div>
                    </div>
                    <div>
                        {tags.map((tag) => {
                            return (
                                <button
                                    className={`
                                ${tag === "Science" && "bg-blue-800"}
                                ${tag === "Technology" && "bg-blue-900"}
                                ${tag === "Health" && "bg-green-800"}
                                ${tag === "Space" && "bg-gray-700"}
                                ${tag === "Space Exploration" && "bg-gray-600"}
                                 text-xxs font-semibold mr-1 mt-1 px-1 py-0.5  rounded-sm text-white`}
                                    key={tag}
                                    onClick={() => console.log(tag)}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>
                    <div className="font-serif">
                        <ReactMarkdown className="text-sm   text-gray-700 py-2   m-1">
                            {desciption}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
