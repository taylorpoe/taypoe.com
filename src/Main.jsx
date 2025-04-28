import React, { useState, useEffect } from "react";
import "./styles/Main.scss";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Project from "./components/Project";
import arcLogoSVG from "./imgs/arc-logo.svg";
import treatyLogoSVG from "./imgs/treaty-logo.svg";
import animatorLogoSVG from "./imgs/animator-logo.svg";
import diezSVG from "./imgs/diez-logo.svg";
import fcSVG from "./imgs/FC-logo.svg";
import haikuSVG from "./imgs/haiku-logo.svg";
import Quotes from "./testimonials.js";

function Main() {
  const [pageLoaded, setpageLoaded] = useState(false);

  useEffect(() => {
    setpageLoaded(true);
  }, []);

  return (
    <div className="page">
      <section id="hero-section">
        <div className="hero">
          <h1 className={`${pageLoaded ? "loaded" : ""}`}>
            Hi
            <span className={`wave ${pageLoaded ? "loaded" : ""}`} role="img">
              👋
            </span>
          </h1>
          <h4 className={`${pageLoaded ? "loaded" : ""}`}>
            <div>
              I'm <strong>TayPoe</strong> — Director of Product at{" "}
              <a
                href="https://www.compa.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                compa.ai
              </a>
            </div>
            <div className="subb">
              Bringing fairness to enterprise pay through agentic AI
            </div>
          </h4>
        </div>
        <div className={`howdy-bloop ${pageLoaded ? "loaded" : ""}`} />
      </section>

      <section id="testimonials">
        {Object.values(Quotes).map((person) => (
          <Testimonial person={person} key={person} />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Main;
