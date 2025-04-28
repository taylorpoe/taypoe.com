import React from "react";
import "../styles/Main.scss";
import "./Footer.scss";
import tayImg from "../imgs/tay.jpg";
import dribbbleSVG from "../icons/dribbble.svg";
import linkedinSVG from "../icons/linkedin.svg";
import emailSVG from "../icons/email.svg";
import githubSVG from "../icons/github.svg";
import twitterSVG from "../icons/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="holster">
        <img src={tayImg} className="profile" alt="Taylor Poe" />
        <div className="adjacent">
          <p>
            I believe the impossible futures are there for the taking — a
            healthy sprinkling of gumption and any new world can be created.
          </p>
          <p>
            I get great satisfaction from drawing out others' best thinking. If
            you're building something and could use startup or design advice —
            please{" "}
            <a
              href="mailto:taylorpoe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              drop me a line
            </a>{" "}
            to set up a call.
          </p>
          <div className="socialStrip">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/taypoe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinSVG} className="logo" alt="linkedin icon" />
              <div className="tooltip">
                LinkedIn (professional)
                <span className="arrow" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://dribbble.com/taylorpoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={dribbbleSVG} className="logo" alt="dribbble icon" />
              <div className="tooltip">
                Dribbble (visual design)
                <span className="arrow" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://github.com/taylorpoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubSVG} className="logo" alt="github icon" />
              <div className="tooltip">
                GitHub (code)
                <span className="arrow" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://twitter.com/taylorpoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterSVG} className="logo" alt="twitter icon" />
              <div className="tooltip">
                Twitter (irreverance)
                <span className="arrow" />
              </div>
            </a>
            <a
              className="social-link"
              href="mailto:taylorpoe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailSVG} className="logo" alt="email icon" />
              <div className="tooltip">
                Email (let's chat)
                <span className="arrow" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
