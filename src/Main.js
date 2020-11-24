import React from 'react';
import './styles/Main.scss';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Project from './components/Project';
import arcLogoSVG from './imgs/arc-logo.svg';
import treatyLogoSVG from './imgs/treaty-logo.svg';
import animatorLogoSVG from './imgs/animator-logo.svg';
import diezSVG from './imgs/diez-logo.svg';
import fcSVG from './imgs/FC-logo.svg';
import haikuSVG from './imgs/haiku-logo.svg';
import Quotes from './testimonials.js';
import h from "./helpers.js";

h.shuffleArray(Quotes);

function Main() {
  return (
    <div className="page">
      <section>
        <div className="hero">
          <h1>Hi 👋</h1>
          <h4>
            I'm <strong>Taylor Poe</strong> — a seasoned product designer with a passion for crafting rich experiences using both design & code.
          </h4>
        </div>
      </section>

      <section id="work">
        <h2 className="center">Prior Art</h2>
        <div className="flex-holster">
          <Project
            logo={arcLogoSVG}
            link="https://www.MyArc.com"
            buttonText="MyArc.com"
          >
            <strong>Arc</strong> is like Notion meets Google Calender but for your weekly to-do list. It's a personal project I've slowly designed and coded in my free time. I've put a lot of thought into crafting what I think is a satsifying user experience. Please check it out. 
          </Project>
          <Project
            logo={treatyLogoSVG}
            link="https://treatyacoustics.com"
            buttonText="TreatyAcoustics.com"
          >
            <strong>Treaty Home Duo</strong> sound dampening panels were designed to help employees transition into their new work-from-home reality. I spent a few weeks designing and prototyping these panels in order to see if there would be product-market fit.
          </Project>
          <Project
            logo={haikuSVG}
            link="https://haikuforteams.com"
            buttonText="HaikuForTeams.com"
          >
            I co-founded and led design at <strong>Haiku</strong> (
            <a
              href="https://techcrunch.com/2018/03/19/here-are-64-startups-that-launched-today-at-y-combinators-w18-demo-day/"
              target="_blank"
            >
              YC W18
            </a>
            ) from 2016-2020. As a small team we created several
            imaginative & well-received products, including{" "}
            <a href="https://haikuanimator.com" target="_blank">
              Haiku Animator
            </a>
            ,{" "}
            <a href="https://diez.org" target="_blank">
              Diez
            </a>
            , and{" "}
            <a href="https://storybookforteams.com" target="_blank">
              Storybook for Teams
            </a>
            .
          </Project>
          <Project
            logo={animatorLogoSVG}
            link="https://haikuanimator.com"
            buttonText="HaikuAnimator.com"
          >
            <strong>Animator</strong> is an innovative stateful UI animation tool, meant for
            developers and designers to use together. I led its design & coded
            the initial versions of its user interface in React before our team raised a
            seed round.
          </Project>
          <Project
            logo={diezSVG}
            link="https://diez.org"
            buttonText="Diez.org"
          >
            <strong>Diez</strong> is a cross-platform design token framework with docs
            generation. I am a co-creator of this project and contribute
            primarily to its NUX, DX, guides, and DocsGen UI design & development.
          </Project>
          <Project
            logo={fcSVG}
            link="https://freedomcollaborative.org"
            buttonText="FreedomCollaborative.org"
          >
            I co-founded and led product on <strong>Freedom Collaborative</strong> — a platform designed to faciliate
            collaboration between anti-human-trafficking NGOs from 2010-2014
            with{" "}
            <a href="https://chabdai.org" target="_blank">
              Chab Dai Int'l
            </a>
            . I'm proud to say it's still making an impact today in 2020.
          </Project>
        </div>
      </section>

      <section>
        {Object.values(Quotes).map(person => (
          <Testimonial person={person} key={person} />
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Main;
