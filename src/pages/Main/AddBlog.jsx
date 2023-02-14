import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BLOG_CONTEXT } from "../../App";

const AddBlog = () => {
    const inputStyle = "border w-full mb-2 pl-4 focus:outline-none";
    const { data, setData } = useContext(BLOG_CONTEXT);

    const { register, handleSubmit } = useForm();
    const onSubmit = (blog) => {
        const blogInfo = { author: {}, blog: { ...blog } };
        const blogs = [...data, blogInfo];
        setData(blogs);
        console.log(blogInfo);
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-lg flex flex-col mx-auto mt-10"
            >
                <input
                    type="text"
                    className={`${inputStyle} h-20 text-4xl placeholder:text-4xl leading-[5rem] `}
                    placeholder="Title"
                    {...register("title")}
                />
                <textarea
                    type="text"
                    className={`${inputStyle} text-xl`}
                    {...register("description")}
                />
                <button
                    type="submit"
                    className="bg-green-500 mx-auto mt-5 px-5 py-1 rounded-full text-white"
                >
                    Publish
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
