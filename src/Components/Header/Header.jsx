import "./Header.css";
import { FaDownload } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { ExternalLink } from "react-external-link";

const Header = () => {
  return (
    <>
      <header className="header" id="Home">
        <nav className="navigation">
          <div className="navigation__content">
            <h1 className="navigation__logo">DevLyday</h1>
            <ul className="navigation__list">
              <li className="navigation__list-item">
                <HashLink to="/">HOME</HashLink>
              </li>

              <li className="navigation__list-item">
                <HashLink smooth to={"/#aboutMe"}>
                  ABOUT ME
                </HashLink>
              </li>
              <li className="navigation__list-item">
                <HashLink smooth to={"/#aboutMe"}>
                  SKILLS
                </HashLink>
              </li>
              <li className="navigation__list-item">
                <HashLink smooth to={"/#aboutMe"}>
                  PROJECTS
                </HashLink>
              </li>
              <li className="navigation__list-item">
                <HashLink smooth to={"/#contactMe"}>
                  CONTACT ME
                </HashLink>
              </li>
            </ul>
            <div className="navigation__btnwrap">
              <button className="navigation__btn">Hire me</button>
            </div>
          </div>
        </nav>
        <main className="header__main">
          <div className="main__contentWrap">
            <h6>Hello, I am</h6>
            <h2>IDAYAT OLAIDE ABDULKAREEM</h2>
            <h4>Frontend Engineer/Developer</h4>
            <p>
              Experienced front-end web developer who is adept in all stages of
              Frontend Web development. She is knowledgeable in the user
              interface, writing codes, testing, and debugging processes. I am
              bringing forth my expertise in web development, design, analysis,
              testing, and maintenance. I am well-equipped with a diverse
              promising skill set and proficient in different technologies
              including React, Typescript, JavaScript, HTML, SCSS, and
              Tailwindcss. Able to effectively self-manage during independent
              projects and collaborate in a team setting
            </p>
            <div className="main__contentWrap-btnwrap">
              <ExternalLink href="https://docs.google.com/document/d/1i-Km611f7LfpXirZA8qd4KX9XFCf9HFZ/edit?usp=sharing&ouid=117068055065774077234&rtpof=true&sd=true">
                <button>View CV</button>
              </ExternalLink>
              <span>
                Download CV
                <FaDownload className="download" />
              </span>
            </div>
          </div>
          <div className="main__pixWrap">
            <img
              src="https://res.cloudinary.com/heedharyhart/image/upload/v1673255595/samples/idayatportfolio_eg35sk.png"
              alt="idayat's img"
            />
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
