import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeHighlight from "rehype-highlight";

const Markdown = ({ block, blog }) => {
    // console.log(Object.values(block));
    const firstLetterStyle =
        "sm:first-letter:text-7xl first-letter:text-[3.5rem]  sm:first-letter:leading-[.9] first-letter:leading-[.9] first-letter:float-left first-letter:mr-2 first-letter:mt-1 ";
    return (
        <ReactMarkdown
            // source="test"
            // renderers={{
            //     paragraph: (props) => <p className="testC">{...props}</p>,
            // }}
            // children={Object.values(block)[0]}
            children=""
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, "")}
                            // style={dark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                    ) : (
                        <code className={"whitespace-normal"} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
            // rehypePlugins={[rehypeHighlight]}
            className={`whitespace-pre-line font-serif sm:leading-[2.2rem] sm:text-xl text-lg description
             ${blog.firstLetter && `${firstLetterStyle}`}
            `}
        />
    );
};

export default Markdown;
