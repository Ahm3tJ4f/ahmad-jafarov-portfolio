import Intro from "./Intro";
import About from "./About";
import ProjectsContainer from "./ProjectsContainer";
// eslint-disable-next-line react/prop-types
const Sections = () => {
    return (
        <main className="w-[44rem] flex flex-col">
            {/* INTRO */}
            <Intro />
            <About />
            <ProjectsContainer />
            {/* <Contact /> */}
        </main>
    );
};

export default Sections;
