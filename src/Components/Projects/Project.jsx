//import { projects } from "../Data/profileData";
import "./Project.css";
import ProjectItem from "../ProjectItems/ProjectItem";

const Project = () => {
  return (
    <div>
      <ProjectItem />
      {/* <section id="projects" className="projects">
        <div className="projects__container">
          <div>
            <div className="projects__textWrap">
              <h1 className="projects__heading">My Projects</h1>
              <p className="projects__content">
                Lorem ipsum dolor sit amet consectetur adipiscing elit auctor,
                platea nam dapibus primis sociosqu phasellus gravida nec
              </p>
            </div>
            <div className="projects__projectWrap">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.id}
                  className="link"
                >
                  <div className="projects__img">
                    <img
                      className="img"
                      src={project.image}
                      alt="react application"
                    />
                    <div className="project__subtitle">
                      <h3 className="subtitle__text">{project.subtitle}</h3>
                      <h2 className="project__title">{project.title}</h2>
                      <p className="project__description">
                        {project.Description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Project;
