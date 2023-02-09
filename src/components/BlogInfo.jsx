import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { BsDot } from "react-icons/bs";
import style from "../style";

const BlogInfo = ({ blog }) => {
    const description = blog.description;
    // const description = `~~~js 
    // #Translate the following function from Python to R:  
    //     def get_stats(event_name):
    //     df_stats = df[df['event_name']==event_name]
    //     stats = df_stats['player_id']
    //     stats = stats.value_counts()
    //     return statsdf_stats = df[df[‘event_name’]==event_name] `;
    const title =
        "font-bold tracking-tight sm:text-[32px] text-3xl sm:leading-10 leading-10 pb-2 ";

    const subtitle = "tracking-tight sm:text-2xl text-xl  text-gray-500";

    const firstLetterStyle =
        "sm:first-letter:text-7xl first-letter:text-[3.5rem]  sm:first-letter:leading-[.9] first-letter:leading-[.9] first-letter:float-left first-letter:mr-2 first-letter:mt-1 ";

    return (
        <div className={` blog__container  py-7 font-sans `}>
            <h2 className={title}>{blog.title}</h2>
            <h3 className={subtitle}>{blog.subtitle}</h3>
            <figure className="my-8">
                <img className="" src={blog.image} alt="title image" />
                <figcaption className="">
                    <ReactMarkdown className="text-center text-[14px]  text-gray-500 mt-3">
                        {blog.imageCaption}
                    </ReactMarkdown>
                </figcaption>
            </figure>
            {/* <div markdown="1">{description}</div> */}
            <ReactMarkdown
                children={description}
                rehypePlugins={[rehypeHighlight]}
                className={`whitespace-pre-line font-serif sm:leading-[2.2rem] sm:text-xl text-lg description ${
                    blog.firstLetter && `${firstLetterStyle}`
                }`}
            />
            {blog.endComment && (
                <div>
                    <div className="flex justify-center my-8">
                        <BsDot className="mr-3" />
                        <BsDot className="mr-3" />
                        <BsDot />
                    </div>

                    <ReactMarkdown
                        children={blog.endComment}
                        className="font-serif sm:text-xl text-lg   sm:leading-[2.2rem] end--comment"
                    />
                </div>
            )}
        </div>
    );
};

export default BlogInfo;
