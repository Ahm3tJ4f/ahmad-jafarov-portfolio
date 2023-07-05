import Social from "../components/Social";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
//import { motion } from "framer-motion";
library.add(fas, fab);

const Intro = () => {
    return (
        <section id="intro" className="space-y-10">
            <header className="space-y-4">
                <h3 className="text-xl font-medium tracking-wide pb-2">
                    <span className="text-primary-green">&#8213;</span> Ahmad
                    Jafarov
                </h3>
                <h1 className="text-8xl tracking-wide mb-5 font-bold">
                    Hi, I&apos;m Ahmad
                </h1>
                <h2 className="text-6xl font-bold tracking-normal  mb-10 text-primary-green ">
                    Software Engineer
                </h2>
            </header>

            <div className="flex overflow-hidden space-x-6 ">
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
                <Social
                    href="https://drive.google.com/file/d/13TpVBXasG0LYkG24xMxhieqe3tMv3tgs"
                    icon={["fas", "file"]}
                    label="Resume"
                />
            </div>
        </section>
    );
};

export default Intro;
