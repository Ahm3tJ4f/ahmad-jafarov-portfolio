const About = () => {
    return (
        <section className="pt-32" id="about">
            <h3 className="text-2xl font-bold tracking-wide pb-2">
                <span className="text-primary-green">&#8213;</span> About me
            </h3>
            <div className="space-y-5 tracking-wide text-light-gray">
                <p className="inline-block">
                    Growing up, testing the limits of all the technological
                    devices that came into my hands, checking what they were
                    capable of, made me intertwined with the world of computer
                    technology. In the last years of my high school life, I
                    stepped into the world of programming and started putting
                    together simple web pages using basic{" "}
                    <span className="font-medium  text-primary-green">
                        HTML/CSS
                    </span>
                    .
                </p>

                <p className="inline-block">
                    During the college years, I took my pragmatic thinking
                    ability and algorithmic problem solving skills to the next
                    level, having become acquainted with complex algorithms.
                    During this time I became fascinated with Web Development
                    and its community.
                </p>

                <p className="inline-block">
                    I work with{" "}
                    <span className="font-medium text-primary-green">
                        Next.JS, React, JavaScript (ES6+), SASS and Tailwind
                    </span>
                    to deliver quality front-end products. I also acquired some
                    useful knowledge of{" "}
                    <span className="font-medium  text-primary-green">
                        NodeJS and Express
                    </span>{" "}
                    to better understand the back-end.
                </p>
            </div>
        </section>
    );
};

export default About;
