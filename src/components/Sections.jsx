import Intro from "./Intro";
import About from "./About";
// eslint-disable-next-line react/prop-types
const Sections = () => {
    return (
        <main className="w-[41.5rem] flex flex-col">
            {/* INTRO */}
            <Intro />
            <About />
            {/* <Projects />
            <Contact /> */}
        </main>
    );
};

export default Sections;
