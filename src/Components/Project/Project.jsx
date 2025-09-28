import React from "react";
import Navbar from "../Shared/Navigation/Navbar";
import ProjectTitle from "./ProjectTitle";
import ProjectShowcase from "./ProjectShowcase";

const Project = () => {
  return (
    <div className="h-fit">
      <Navbar></Navbar>
      <ProjectTitle></ProjectTitle>
      <ProjectShowcase></ProjectShowcase>
    </div>
  );
};

export default Project;
