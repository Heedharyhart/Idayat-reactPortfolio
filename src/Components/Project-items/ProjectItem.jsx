//import Card from "../Card/Card";
import "./ProjectItem.css";

const ProjectItem = ({ project }) => {
  return (
    <>
     
        <div className="projects">
          <div className="projectItem">
            <div className="projectItem__content">
              <h3 className="projectItem__heading">{project.title}</h3>
              <h4 className="projectItem__subheading">{project.technologies}</h4>
              <p className="projectItem__text">{project.description}</p>
              <div className="projectItem__btnWrap">
              <a href={project.link}>
                <button>View Site</button>
              </a>
              <button>View Code</button>
            </div>
            </div>
            <div className="projectItem__img">
              <img alt="review-app" src={project.image} />
            </div>
          </div>
        </div>
    </>
  );
};

export default ProjectItem;
