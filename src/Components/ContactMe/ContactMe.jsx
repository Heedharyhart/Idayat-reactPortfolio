import { FaBlenderPhone, FaEnvelope, FaAddressCard } from "react-icons/fa";
import { ExternalLink } from "react-external-link";
import { HashLink } from "react-router-hash-link";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contactMe" id="contactMe">
      <div className="contactMe__container">
        <div className="contactMe__container-content">
          <h4 className="contactMe__container-heading">Contact us</h4>
          <p className="contactMe__container-text">
            I'm confident that I am well-prepared to be a valuable contributor
            to any companies growth and success, Contact me and let talk about
            your project.
          </p>
          <div className="contactMe__container-details">
            <div className="email-details">
              <FaEnvelope className="icon" />
              idayatolaide0@gmail.com
            </div>
            <div className="address">
              <FaAddressCard className="icon" />
              10 John street Lagos, Nigeria
            </div>
            <div className="phone-details">
              <FaBlenderPhone className="icon" />
              +2348109433993
            </div>
          </div>
        </div>
        <div className="contactMe__form">
          <form>
            <div className="input-group">
              <input className="name" type="text" placeholder="Name" />
            </div>
            <div className="input-group">
              <input className="email" type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <textarea
                className="message"
                type="textArea"
                placeholder="Message"
              />
            </div>
            <div>
              <button className="contactMe__btn">submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="contactMe__footer">
        <div className="contactMe__footer-logo">
          <h6>DevLyday</h6>
          <p>Here are my social handle</p>
        </div>
        <div className="contactMe__footer-explore">
          <h6>EXPLORE</h6>
          <ul className="contactMe__footer-list">
            <li className="contactMe__footer-listItems">
              <HashLink smooth to={"/#aboutMe"}>
                ABOUT ME
              </HashLink>
            </li>
            <li className="contactMe__footer-listItems">
              <HashLink smooth to={"/#"}>
                ABOUT ME
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="contactMe__footer-socials">
          <h6>SOCIALS</h6>
          <ul className="contactMe__footer-list">
            <li className="contactMe__footer-listItems">
              <ExternalLink href="https://www.linkedin.com/in/idayat-abdulkareem/">
                LinkedIn
              </ExternalLink>
            </li>

            <li className="contactMe__footer-listItems">
              <ExternalLink href="https://github.com/Heedharyhart">
                Github
              </ExternalLink>
            </li>
            <li className="contactMe__footer-listItems">
              <ExternalLink href="https://twitter.com/Dev_lyday">
                Twitter
              </ExternalLink>
            </li>
            <li className="contactMe__footer-listItems">
              <ExternalLink href="https://instagram.com/Dev_lyday">
                Instagram
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
