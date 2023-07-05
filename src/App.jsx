import { useState, useEffect, useRef } from "react";
import "./assets/fonts.css";
import "./App.css";
import NavElement from "./components/NavElement";
import Sections from "./components/Sections";

const App = () => {
    const sectionRefs = useRef([]);
    const sectionIds = ["intro", "about", "projects", "contact"];
    const [activeSection, setActiveSection] = useState(sectionIds[0]);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        sectionRefs.current = sectionIds.map((sectionId) =>
            document.getElementById(sectionId)
        );
        const handleScroll = () => {
            setIsScrolled(
                window.scrollY > (sectionRefs.current[0]?.offsetTop || 0) - 100
            );

            const activeSection = sectionRefs.current.find(
                (sectionRef, index) => {
                    const nextSectionRef = sectionRefs.current[index + 1];
                    return (
                        window.scrollY >= (sectionRef?.offsetTop || 0) &&
                        window.scrollY < (nextSectionRef?.offsetTop || Infinity)
                    );
                }
            );

            setActiveSection(activeSection ? activeSection.id : "intro");
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-[70rem] mx-auto mt-52 flex space-x-20 ">
            <nav className="w-60 flex justify-end sticky top-12 h-[50vh]">
                <ul
                    className={` ${
                        isScrolled ? "w-full" : "w-32"
                    } flex flex-col transition-all duration-200 space-y-7`}
                >
                    {sectionIds.map((id) => (
                        <NavElement
                            isScrolled={isScrolled}
                            activeSection={activeSection}
                            sectionId={id}
                            key={id}
                        />
                    ))}
                </ul>
            </nav>
            <Sections sectionIds={sectionIds} />
        </div>
    );
};

export default App;
