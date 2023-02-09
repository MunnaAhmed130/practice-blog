import React from "react";
import { BsTwitter, BsLinkedin, BsFacebook, BsThreeDots } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { RxEnvelopeClosed } from "react-icons/rx";
import ReactMarkdown from "react-markdown";

const AuthorInfo = ({ author }) => {
    const iconStyle = "mr-2 py-1.5 px-1";
    const footerLink = "text-gray-500 hover:text-gray-700 mr-1";
    return (
        <div className=" mx-8 py-10 font-sans  top-0 relative">
            <div className="flex">
                <img
                    src={author.image}
                    className="border rounded-full w-24"
                    alt=""
                />
                <div className="pl-5  w-full flex flex-col justify-center">
                    <h2 className="font-medium text-lg">{author.name}</h2>
                    <span>
                        <a
                            href="/"
                            className="text-gray-400 hover:text-gray-500"
                        >
                            {author.followersCount} followers
                        </a>
                    </span>

                    <div className="flex flex-row  text-slate-500">
                        <button className={iconStyle}>
                            <BsTwitter />
                        </button>
                        <button className={iconStyle}>
                            <BsFacebook />
                        </button>
                        <button className={iconStyle}>
                            <BsLinkedin />
                        </button>
                        <button className={iconStyle}>
                            <ImLink />
                        </button>
                        <button className={iconStyle}>
                            <BsThreeDots />
                        </button>
                    </div>
                </div>
            </div>

            <ReactMarkdown
                children={author.about}
                className="about mt-5 text-gray-500 text-sm leading-6"
            />
            <div className="flex mt-5">
                <button className="px-5 py-2 rounded-full bg-gray-800 text-white mr-2">
                    Follow
                </button>
                <button className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-800 text-white">
                    <RxEnvelopeClosed />
                </button>
            </div>
            <div className="text-xs flex  absolute bottom-0 ">
                <a href="/" className={`${footerLink}`}>
                    Help
                </a>
                <a href="/" className={`${footerLink}`}>
                    Status
                </a>
                <a href="/" className={`${footerLink}`}>
                    Writers
                </a>
                <a href="/" className={`${footerLink}`}>
                    Blog
                </a>
                <a href="/" className={`${footerLink}`}>
                    Careers
                </a>
                <a href="/" className={`${footerLink}`}>
                    Privacy
                </a>
                <a href="/" className={`${footerLink}`}>
                    Terms
                </a>
                <a href="/" className={`${footerLink}`}>
                    About
                </a>
            </div>
        </div>
    );
};

export default AuthorInfo;
