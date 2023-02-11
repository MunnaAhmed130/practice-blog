import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeHighlight from "rehype-highlight";
import { BsDot } from "react-icons/bs";
import style from "../style";
import Markdown from "./Markdown";

const BlogInfo = ({ blog }) => {
    // const description = blog.description;
    console.log(blog.description);
    // const description = `
    //         #Translate the following function from Python to R:
    //         def get_stats(event_name):
    //             df_stats = df[df['event_name']==event_name]
    //             stats = df_stats['player_id']
    //             stats = stats.value_counts()
    //             return statsdf_stats = df[df[‘event_name’]==event_name]
    //              `;

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
    // \n\n You need to enter your email address and contact number to create an account. Once your account is created, you will see a screen that looks like the one below: \n\n ![](https://miro.medium.com/max/720/1*zpdy0nhORo2NnZj3ogYgLQ.webp) \n\n Let’s look at the things we can do with ChatGPT. \n\n  **1. Ask Coding Questions**\n Until now, for all sorts of coding errors and problems, we used to go to Stack Overflow and hope that one of the most popular responses contains the answer. But now, you can ask the same questions to ChatGPT. Suppose we want to know how to check palindrome in Python. Now we make an inquiry. \n\n ![](https://miro.medium.com/max/720/1*RmR1t1r4faGfEMSuEpdktg.webp) \n\n This is just a tiny example of what ChatGPT is able to do. You can make inquiries on implementing other libraries of python as well. ChatGPT answers them in an easy and concise manner. \n\n  **2. Translating Python Code to R and Vice-versa** \n Let’s say, you are a data scientist proficient in Python. And you are new to R. Now, if you want to translate your Python code to R, you can simply tell the ChatGPT to do it for you.\n\n ![](https://miro.medium.com/max/720/1*SBQnVHpEowlMqDpCF8WoEQ.webp) \n\n ChatGPT not only accomplishes the job, but it also explains the function and how to use it in R. This is very handy for individuals who can hardly print a “Hello World in R” \n\n But wait, there’s more! What if you’re working with dataframes in Python and need to repeat your work in R for any reason? ChatGPT can assist you. \n\n  #Translate the following function from Python to R: def get_stats(event_name):df_stats = df[df['event_name']==event_name]stats = df_stats['player_id'] stats = stats.value_counts() return statsdf_stats = df[df[‘event_name’]==event_name] ![](https://miro.medium.com/max/720/1*TjRnSLSWisR3MS3pbF2ahA.webp) \n\n ![](https://miro.medium.com/max/720/1*pdhAQMMsIVZnUFIpR6zy_w.webp) \n\n After seeing the results, you now know that you may select columns in R using the $ sign and that the table function in R is equal to pandas’.value counts. \n\n I even tested the code in R, and it worked well! \n\n **3. Natural Language to SQL Queries** \n OpenAI allows you to write SQL Queries with natural language. Let us examine this with a simple query. \n\n ![](https://miro.medium.com/max/720/1*7Br_3DotARSIsm2_5Ge9GA.webp) \n\n ![](https://miro.medium.com/max/720/1*n7wwI7a9N16_llrLkFjIYA.webp) \n\n **4. Classifying Text** \n ChatGPT can also be useful in classifying the texts. Let’s see how it works \n\n ![](https://miro.medium.com/max/720/1*NJmtSzxTjUONxgsw5dOyjQ.webp) \n\n **5. Visualizing Data** \n\n  ![](https://miro.medium.com/max/1400/1*ajfC5DpqsakUnTZNSWw21A.webp) \n\n ![](https://miro.medium.com/max/720/1*g3mxdYX_RKalcWshcNciBg.webp) \n\n ![](https://miro.medium.com/max/720/1*VsFXbUjvd7DWYQwHU7l1fw.webp)`;

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
            {/* {description.map((block) => (
                <Markdown
                    block={block}
                    blog={blog}
                    className={` font-serif sm:leading-[2.2rem] sm:text-xl text-lg description
                ${blog.firstLetter && `${firstLetterStyle}`}
               `}
                />
            ))} */}
            {blog.description.map((description) => (
                <ReactMarkdown
                    // source="test"
                    // renderers={{
                    //     paragraph: (props) => <p className="testC">{...props}</p>,
                    // }}
                    // children={Object.values(block)[0]}
                    children={description.key}
                    // components={{
                    //     code({ node, inline, className, children, ...props }) {
                    //         const match = /language-(\w+)/.exec(className || "");
                    //         return !inline && match ? (
                    //             <SyntaxHighlighter
                    //                 children={String(children).replace(/\n$/, "")}
                    //                 // style={dark}
                    //                 language={match[1]}
                    //                 PreTag="div"
                    //                 {...props}
                    //             />
                    //         ) : (
                    //             <code className={"whitespace-normal"} {...props}>
                    //                 {children}
                    //             </code>
                    //         );
                    //     },
                    // }}
                    // rehypePlugins={[rehypeHighlight]}
                    className={`whitespace-pre-wrap font-serif sm:leading-[2.2rem] sm:text-xl text-lg description
                 ${blog.firstLetter && `${firstLetterStyle}`}
                `}
                ></ReactMarkdown>
            ))}

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
