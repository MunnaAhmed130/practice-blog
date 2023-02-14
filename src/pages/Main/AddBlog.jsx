import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BLOG_CONTEXT } from "../../App";

const AddBlog = () => {
    const [image, setImage] = useState([]);
    console.log(image);
    const onImageChange = (e) => {
        setImage(
            URL.createObjectURL(
                new Blob(e.target.files, { type: "application/zip" })
            )
        );
        console.log(image);
    };
    const inputStyle = "border w-full mb-2 pl-4 focus:outline-none";
    const { data, setData } = useContext(BLOG_CONTEXT);

    const { register, handleSubmit } = useForm();
    const onSubmit = (inputData) => {
        const author = {
            name: "Prof C Explains",
            image: "https://miro.medium.com/fit/c/176/176/1*jP0Qf1jXVEHn4GmHMvrM5w.png",
            followersCount: 310,
            about: "J Scott Christianson: UM Teaching Prof, Technologist & Entrepreneur. Connect with me here: https://www.christiansonjs.com/",
        };
        const blog = {
            tags: ["Science", "Technology"],
            title: inputData.title,
            image: "https://miro.medium.com/max/720/1*HpjP8_3UEIB3ePU3f3ssaA.webp",
            imageCaption: "",
            subtitle: "",
            publishedDate: "Jan 27, 2022 ",
            readTime: 8,
            description: [inputData.description],
        };
        const blogInfo = { author: { ...author }, blog: { ...blog } };
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
                    required
                />
                <input
                    type="file"
                    id="fileElem"
                    multiple
                    accept="image/*"
                    // style={{ display: "none" }}
                    onChange={onImageChange}
                />
                <img src={image} alt="" />
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
