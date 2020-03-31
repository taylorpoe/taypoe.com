import React from "react";
import "../Main.scss";
import "./Footer.scss";
import tayImg from "../imgs/tay.jpg";
import dribbbleSVG from "../icons/dribbble.svg";
import angelSVG from "../icons/angel.svg";
import animatorSVG from "../icons/animator.svg";
import emailSVG from "../icons/email.svg";
import githubSVG from "../icons/github.svg";
import mediumSVG from "../icons/medium.svg";
import twitterSVG from "../icons/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="holster">
        <img src={tayImg} className="profile" alt="Image of Taylor Poe" />
        <div className="adjacent">
          <p>
            I believe the “impossible” futures are there for the taking — a
            healthy sprinkling of resilience and gumption and any new world can be
            created. But I also believe you’re only likely to get there with
            intentional effort to make everyone around you better.
          </p>
          <p>
            I get great satisfaction and meaning from drawing out others' best
            thinking. If you’re building something and could use some startup or
            design advice — please{" "}
            <a href="mailto:taylorpoe@gmail.com" target="_blank">
              drop me a line
            </a>{" "}
            to set up a video call.
          </p>
          <div className="socialStrip">
            <a
              className="social-link"
              href="https://angel.co/taylorpoe"
              target="_blank"
            >
              <img src={angelSVG} className="logo" alt="angel icon" />
              <div className="tooltip">
                AngelList (resume)
                <span className="arrow" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://dribbble.com/taylorpoe"
              target="_blank"
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
            >
              <img src={githubSVG} className="logo" alt="github icon" />
              <div className="tooltip">
                GitHub (code)
                <span className="arrow" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://share.haiku.ai/u/taylor"
              target="_blank"
            >
              <img src={animatorSVG} className="logo" alt="animator icon" />
              <div className="tooltip">
                Animator (motion design)
                <span className="arrow" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://medium.com/@taylorpoe"
              target="_blank"
            >
              <img src={mediumSVG} className="logo" alt="medium icon" />
              <div className="tooltip">
                Medium (articles)
                <span className="arrow" />
              </div>
            </a>
            <a
              className="social-link"
              href="https://twitter.com/taylorpoe"
              target="_blank"
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
  )
}

export default Footer;
