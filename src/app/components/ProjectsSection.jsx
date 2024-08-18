"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food Ordering Website",
    description:
      "Developed a Next.js-based food ordering system with comprehensive features for user authentication, secure data handling, and payment processing.",
    image: "/images/projects/7.png",
    tag: ["All", "Next.js"],
    gitUrl:
      "https://github.com/Hamza75950/Hamza75950-Food_Ordering_Website_Next.js_React",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Text Utils Website",
    description:
      "Developed a react.js-based text utility website which manipulate text on command",
    image: "/images/projects/8.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/Hamza75950/React_Props_and_State",
    previewUrl:
      "https://textutils-klmbbpj8l-hamzas-projects-98ccd4dd.vercel.app/",
  },
  {
    id: 3,
    title: "News Website || Class Base Components",
    description:
      "A responsive React app with class-based components, featuring infinite scroll and a top loading bar.",
    image: "/images/projects/9.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/Hamza75950/News_Website.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "News Website || Function Base Components",
    description:
      "A responsive React app with function-based components, featuring infinite scroll and a top loading bar.",
    image: "/images/projects/10.png",
    tag: ["All", "React.js"],
    gitUrl:
      "https://github.com/Hamza75950/News_App_Function_Base_Components.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
