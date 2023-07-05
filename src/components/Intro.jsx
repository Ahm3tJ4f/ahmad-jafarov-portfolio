import Social from "../components/Social";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

const Intro = () => {
    return (
        <header className=" space-y-7" id="intro">
            <h3 className="ml-1 font-normal text-primary-green">
                &#8213; Ahmad Jafarov
            </h3>
            <h1 className="text-8xl tracking-wide font-bold">
                Hi, I&apos;m Ahmad
            </h1>
            <h2 className="text-6xl tracking-tight text-primary-green font-medium">
                Software Engineer
            </h2>

            <div className="flex space-x-6">
                <Social
                    href="https://www.linkedin.com/in/ahmad-jafarov-221734190/"
                    icon={["fab", "linkedin"]}
                    label="LinkedIn"
                />
                <Social
                    href="https://github.com/Ahm3tJ4f"
                    icon={["fab", "github"]}
                    label="GitHub"
                />
                <Social href="" icon={["fas", "file"]} label="Resume" />
            </div>
        </header>
    );
};

export default Intro;
