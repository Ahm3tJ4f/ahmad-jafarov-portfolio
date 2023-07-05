import Project from "./Project";

const ProjectsContainer = () => {
    return (
        <section id="projects" className="pt-32 space-y-4">
            <h3 className="text-2xl font-bold tracking-wide pb-2">
                <span className="text-primary-green">&#8213;</span> Projects
            </h3>
            <div className="space-y-14 grid grid-cols-2 gap-y-8">
                <div className="space-y-10">
                    <Project
                        projectName={"Train Typer"}
                        techs={["JS", "Sass"]}
                        github={""}
                        demo={""}
                        description={
                            " A web app to calculate user’s keyboard typing speed per minutes. Input field is written from scratch"
                        }
                        imgURL={"trainTyper"}
                    />
                    <Project
                        projectName={"Train Typer"}
                        techs={["JS", "Sass"]}
                        github={""}
                        demo={""}
                        description={
                            " A web app to calculate user’s keyboard typing speed per minutes. Input field is written from scratch"
                        }
                        imgURL={"trainTyper"}
                    />
                </div>

                <div className="space-y-10">
                    <Project
                        projectName={"Train Typer"}
                        techs={["JS", "Sass"]}
                        github={""}
                        demo={""}
                        description={
                            " A web app to calculate user’s keyboard typing speed per minutes. Input field is written from scratch"
                        }
                        imgURL={"trainTyper"}
                    />
                    <Project
                        projectName={"Train Typer"}
                        techs={["JS", "Sass"]}
                        github={""}
                        demo={""}
                        description={
                            " A web app to calculate user’s keyboard typing speed per minutes. Input field is written from scratch"
                        }
                        imgURL={"trainTyper"}
                    />
                </div>
            </div>
        </section>
    );
};
export default ProjectsContainer;
