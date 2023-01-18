import Card from "../Card/Card";
import "./ProjectItem.css";

const ProjectItem = () => {
  return (
    <>
      <Card>
        <div className="projectItem">
          <div className="projectItem__img">
            <img
              alt="review-app"
              src="https://res.cloudinary.com/heedharyhart/image/upload/v1674044363/samples/review-app-img_msh49i.png"
            />
          </div>
          <div className="projectItem__content">
            <h3 className="projectItem__heading">Quizzard</h3>
            <p className="projectItem__text">
              A web quiz application built using Reactjs, tailwindcss, and quiz
              api View Site
            </p>
          </div>
          <div className="projectItem__btnWrap">
            <button>View Site</button>
            <button>View Code</button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProjectItem;
