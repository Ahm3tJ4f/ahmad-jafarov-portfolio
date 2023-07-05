import { useState, useEffect } from "react";
import "./assets/fonts.css";
import "./App.css";
import NavElement from "./components/NavElement";
import Contents from "./components/Contents";

const App = () => {
    const sectionIds = ["intro", "about", "projects", "contact"];
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const activeSection = sectionIds.find((sectionId) => {
                const section = document.getElementById(sectionId);
                return (
                    window.scrollY >= section.offsetTop &&
                    window.scrollY <
                        (section.nextElementSibling?.offsetTop || Infinity)
                );
            });
            setActiveSection(activeSection ? activeSection : "intro");
        };

        const firstSection = document.getElementById(sectionIds[0]);

        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > firstSection.offsetTop - 100);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navElements = sectionIds.map((id) => {
        return (
            <NavElement
                isScrolled={isScrolled}
                activeSection={activeSection}
                sectionId={id}
                key={id}
            />
        );
    });

    return (
        <div className="w-[70rem] mx-auto mt-52 flex space-x-20 ">
            <nav className="w-60 flex justify-end sticky top-12 h-[50vh]">
                <ul
                    className={` ${isScrolled ? "w-full" : "w-32"} 
                    flex flex-col transition-all duration-200 space-y-6`}
                >
                    {navElements}
                </ul>
            </nav>
            <Contents sectionIds={sectionIds} />
        </div>
    );
};

export default App;
