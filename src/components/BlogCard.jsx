import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import ReactMarkdown from "react-markdown";

const BlogCard = ({ blog }) => {
    const timeStyle = "text-sm text-gray-500";
    const tags = blog.blog.tags;
    // console.log(blog.blog.tags);
    // console.log(data);
    // let description = `${blog.blog.description.slice(
    //     0,
    //     200
    // )`... **see more**`}`;
    const description = `${blog.blog.description[0].slice(
        0,
        100
    )}...**see more**`;
    // const des = description.slice(0, 5);
    const des = ` ${description}...see more`;
    console.log(des);

    return (
        <div>
            <div className={`border rounded-md overflow-hidden`}>
                <Link to={`/blog/${blog.blog.title}`}>
                    <img
                        className="h-52 w-full  border-0"
                        src={blog.blog.image}
                        alt=""
                    />
                </Link>
                <div className="px-3 pt-3 pb-2 flex">
                    <div>
                        <img
                            className="w-14 h-14 rounded-full bg-gray-200"
                            src={blog.author.image}
                            alt=""
                        />
                    </div>
                    <div className="pl-3 tracking-wide">
                        <Link to="">
                            <h4 className="text-md font-semibold text-gray-900">
                                {blog.author.name}
                            </h4>
                        </Link>
                        <div>
                            <span className={`${timeStyle}`}>
                                {blog.blog.publishedDate}
                            </span>
                            <BsDot className="inline" />
                            <span className={`${timeStyle}`}>
                                {blog.blog.readTime} min read
                            </span>
                        </div>
                    </div>
                </div>
                <div className="pl-3">
                    {tags &&
                        tags.map((tag) => {
                            return (
                                <button
                                    className={`text-xs mr-2 mt-1 px-2 py-1  rounded-full text-black font-semibold bg-gray-300 `}
                                    key={tag}
                                    onClick={() => console.log(tag)}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                </div>
                <div className="px-3 py-2">
                    <div className="flex items-center gap-5 font-sans">
                        {/* <img
                        className="h-10 w-10 rounded-full"
                        src={blog.author.image}
                        alt=""
                    /> */}
                        <div className="flex flex-col">
                            <Link to={`/blog/${blog.blog.title}`}>
                                <h2 className="text-xl font-semibold">
                                    {blog.blog.title}
                                </h2>
                            </Link>

                            {/* <span className="text-sm text-gray-500">
                            {blog.blog.publishedDate}
                        </span> */}
                            {/* <p className="text-sm">{blog.author.name}</p> */}
                        </div>
                    </div>
                    {/* <div>
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
                    </div> */}

                    <div className="font-serif">
                        {blog.blog.subtitle && (
                            <p className="text-xl text-gray-600 py-1">
                                {blog.blog.subtitle}
                            </p>
                        )}
                        {!blog.blog.subtitle && (
                            <ReactMarkdown
                                children={description}
                                className="text-lg   text-gray-700 py-2   "
                            ></ReactMarkdown>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
