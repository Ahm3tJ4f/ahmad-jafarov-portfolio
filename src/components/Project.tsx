/* eslint-disable react/prop-types */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab);

const Project = ({ projectName, techs, github, demo, description, imgURL }) => {
    const backgroundImage = {
        background: `linear-gradient(0deg, rgb(29, 30, 31) 10%,
         rgba(33, 34, 37, 0.89) 42%, rgba(34, 35, 38, 0) 156%), 
         url("${imgURL}") center top / cover`,
    };

    return (
        <div className="cursor-pointer flex border-2 border-[#2a2a2a] object-contain overflow-hidden select-none rounded-[20px]  flex-col items-center relative w-[20rem] h-[32rem]">
            {/* PROJECT THUMBNAIL */}
            <div
                className="rounded-[15px]  transform w-full h-full"
                style={backgroundImage}
            ></div>
            {/* PROJECT DETAILS */}
            <div className="bottom-3 space-y-6 absolute px-6 py-4">
                <div className="flex space-x-6 justify-between items-center">
                    {/* PROJECT NAME */}
                    <h4 className="font-bold text-2xl">{projectName}</h4>
                    {/* LINKS */}
                    <div className="space-x-4 text-xl">
                        <a href="">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                        <a href="">
                            <FontAwesomeIcon
                                icon={["fas", "arrow-up-right-from-square"]}
                            />
                        </a>
                    </div>
                    {/* TECHNOLOGIES */}
                </div>
                <div className="flex space-x-3">
                    <span>
                        <i>JS</i> Javascript
                    </span>
                    <span>
                        <i>SASS</i> Sass
                    </span>
                </div>
                {/* DESCRIPTION */}
                <div className="">
                    <hr className="border-t-1 border-[#767676]" />
                    <p className="pt-3 text-sm text-light-gray">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Project;
