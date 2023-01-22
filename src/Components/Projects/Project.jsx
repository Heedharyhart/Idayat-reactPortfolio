import { projects } from "../Data/profileData";
import "./Project.css";
import ProjectItem from "../Project-items/ProjectItem";

const Project = () => {
  return (
    <section className="projects">
      <div className="projects-wrap">
        <div>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
