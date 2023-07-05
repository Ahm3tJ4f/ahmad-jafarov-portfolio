import Project from "./Project";
import trainTyper from "../assets/image 1.png";

const ProjectsContainer = () => {
    return (
        <section id="projects" className="pt-32 grid grid-cols-2 gap-y-8">
            <Project
                projectName={"Train Typer"}
                techs={["JS", "Sass"]}
                github={""}
                demo={""}
                description={
                    " A web app to calculate user’s keyboard typing speed per minutes. Input field is written from scratch"
                }
                imgURL={trainTyper}
            />
        </section>
    );
};
export default ProjectsContainer;
