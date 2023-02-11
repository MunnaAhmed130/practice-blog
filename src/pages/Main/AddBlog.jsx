import React from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const inputStyle = "border w-full mb-2 pl-4 focus:outline-none";
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
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
                    {...register("Title")}
                />
                <textarea
                    type="text"
                    className={`${inputStyle} text-xl`}
                    {...register("para")}
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
