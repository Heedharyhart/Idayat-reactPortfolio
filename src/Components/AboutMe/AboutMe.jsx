import { FaDownload } from "react-icons/fa";
import Badge from "../../images/badgeIcon.svg";
import Projects from "../../images/projectIcon.svg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe">
      <div className="aboutMe__container">
        <div className="aboutMe__imgWrap">
          <img
            src="https://res.cloudinary.com/heedharyhart/image/upload/v1673261733/samples/Subject_c62b5x.jpg"
            alt="idayat img standing"
          />
        </div>
        <div className="aboutMe__contentWrap">
          <h6>A BIT</h6>
          <h3>About Me</h3>
          <p>
            I am a Frontend Engineer with 4 years of experience in front-end
            engineering and end-to-end product development. I am passionate
            about building products that improve lives with a seamless user
            experience. Idayat is capable and able to work autonomously.
             My goal is to find a position that matches my experience and allows me to
            grow as a developer,  I'm currently a Frontend Developer/Engineer at
            Konga Online Shopping Limited with over 3years+ of experience. I'm
            seeking a similar role in a new organization where I can utilize and
            expand upon my skills. I have extensive experience with Reactjs,
            HTML, SCSS, Javascript, Typescript, and modern web application
            development practices including state management tools (REDUX) and
            version control (git)
          </p>
          <div className="aboutMe__iconsWrap">
            <div className="aboutMe__iconsWrap-items">
              <img src={Badge} alt="badge icon" />
              <span>
                <h6 className="years">3 years+</h6>
                <h6 className="experience">Experience</h6>
              </span>
            </div>
            <div className="aboutMe__iconsWrap-items">
              <img src={Projects} alt="badge icon" />
              <span>
                <h6>20+</h6>
                <h6 className="projects">Projects</h6>
              </span>
            </div>
          </div>
          <div className="main__contentWrap-btnwrap">
            <button>Hire me</button>
            <span>
              Download CV
              <FaDownload className="download" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
