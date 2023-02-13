import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeHighlight from "rehype-highlight";
import { BsDot } from "react-icons/bs";
import style from "../style";
import Markdown from "./Markdown";

const BlogInfo = ({ blog }) => {
    const description = blog.description;
    // const text = description[0].key.replace(/"/g, "`");
    // console.log(text);
    // const description = `~~~js
    // #Translate the following function from Python to R:
    // def get_stats(event_name):
    // df_stats = df[df['event_name']==event_name]
    // stats = df_stats['player_id']
    // stats = stats.value_counts()
    // return statsdf_stats = df[df[‘event_name’]==event_name]  `;
    // const description =
    //     "`#Translate the following function from Python to R:  def get_stats(event_name): df_stats = df[df['event_name']==event_name] stats = df_stats['player_id']  stats = stats.value_counts()  return statsdf_stats = df[df[‘event_name’]==event_name]  `";
    // const description =
    //     "ChatGPT is a large language model trained by OpenAI. It has been trained on a massive amount of data and can generate human-like text in response to input from a user. ChatGPT is capable of understanding and responding to a wide range of topics, including conversation, questions, and even jokes. Because of its ability to generate human-like text, ChatGPT can be used to create chatbots, virtual assistants, and other applications that require natural language processing. ChatGPT is based on the GPT-3 model, which is one of the most advanced language models in the world. The model uses a transformer architecture and deep learning techniques to generate high-quality text. ChatGPT is highly customizable, so developers can use it to create a wide range of applications. Overall, ChatGPT is a powerful tool for natural language processing and can be used to create a wide range of applications.  <br/>  The usage of ChatGPT for programming and data science is presented here. Firstly, you need to sign up for an account if you don’t have one.";
    // const value = description.replace(/\n/gi, " <br />");
    // const description = [
    //     {
    //         key: "ChatGPT is a large language model trained by OpenAI. It has been trained on a massive amount of data and can generate human-like text in response to input from a user. ChatGPT is capable of understanding and responding to a wide range of topics, including conversation, questions, and even jokes. Because of its ability to generate human-like text, ChatGPT can be used to create chatbots, virtual assistants, and other applications that require natural language processing. ChatGPT is based on the GPT-3 model, which is one of the most advanced language models in the world. The model uses a transformer architecture and deep learning techniques to generate high-quality text. ChatGPT is highly customizable, so developers can use it to create a wide range of applications. Overall, ChatGPT is a powerful tool for natural language processing and can be used to create a wide range of applications. \n\n The usage of ChatGPT for programming and data science is presented here. Fi.rstly, you need to sign up for an account if you don’t have one.",
    //     },

    //     {
    //         key: "If you’re new to ChatGPT, you must use [this link](https://chat.openai.com/auth/login?) to register an account.",
    //     },
    //     {
    //         image: "![](https://miro.medium.com/max/640/0*VM6HJ-DHbqDP85eE.webp) ",
    //     },
    //     {
    //         code: `~~~ py
    //         #Translate the following function from Python to R:
    //         def get_stats(event_name):
    //             df_stats = df[df['event_name']==event_name]
    //             stats = df_stats['player_id']
    //             stats = stats.value_counts()
    //             return statsdf_stats = df[df[‘event_name’]==event_name]
    //             `,
    //     },
    // ];

    // description.map((block) => console.log(block));

    // const description = `~~~python
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
            <div
                className={` font-serif sm:leading-[2.2rem] sm:text-xl text-lg description
                ${blog.firstLetter && `${firstLetterStyle}`}
               `}
            >
                {description.map((block) => (
                    <Markdown block={block} blog={blog} />
                ))}
            </div>

            {/* {blog.description.map((description) => ( */}
            {/* <ReactMarkdown
                // children={Object.values(block)[0]}
                // children={description.key}
                // children={text}
                children={description}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, " ")}
                                // style={dark}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                    p({ className, children, ...props }) {
                        return (
                            <p className={className} {...props}>
                                {children}
                            </p>
                        );
                    },
                }}
                rehypePlugins={[rehypeHighlight]}
                className={`whitespace-pre-wrap font-serif sm:leading-[2.2rem] sm:text-xl text-lg description
                 ${blog.firstLetter && `${firstLetterStyle}`}
                `}
            ></ReactMarkdown> */}
            {/* ))} */}

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
