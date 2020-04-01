import React from 'react';
import './styles/Main.scss';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Project from './components/Project';
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
          <h1>
            <span className="primary">Salience</span>
            <span style={{ fontWeight: 400 }}>
              ! <em>Expressive</em> digital products that <em>resonate</em>.
            </span>
          </h1>
        </div>
      </section>

      <section className="narrow">
        <h4 className="intro">
          Hi, I'm <strong>Taylor Poe</strong> — a digital product maker.
        </h4>
        <p>
          A seasoned product designer with a passion for leadership, systems
          thinking, and crafting rich experiences using both design &{" "}
          <a href="https://github.com/taylorpoe" target="_blank">
            code
          </a>
          . I take pride in my ability to articulate and communicate ideas. Not
          just in well-received{" "}
          <a
            href="https://medium.com/haiku-blog/lottie-without-after-effects-9c5a8e74c239"
            target="_blank"
          >
            articles
          </a>
          , or{" "}
          <a href="https://www.youtube.com/watch?v=plEKge4zq68" target="_blank">
            tutorials
          </a>
          , but in day-to-day briefs, explorations, and critique. I also design{" "}
          <a href="https://share.haiku.ai/u/taylor" target="_blank">
            motion
          </a>{" "}
          &{" "}
          <a href="https://dribbble.com/taylorpoe" target="_blank">
            pretty things
          </a>{" "}
          from time to time.
        </p>
        <p>
          I'm passionate about tooling at the intersection of design & code and
          have spent the past 4 years working in this space. And change is
          a-comin' — I believe we're rocketing toward a new future where
          software creation is deeply collaborative between designers,
          developers, and managers.
        </p>
        <p>
          Design systems play a big role here and I know them well — the
          problems they solve and the problems they <em>create</em>. I can lead
          teams to assemble design system tools & methodologies that are{" "}
          <em>maintainable</em> at all scales. In the near future, I'll be
          releasing a free course on the stack I believe works best in 2020.{" "}
          <a href="https://jaxonbasil.typeform.com/to/jX3vts" target="_blank">
            Sign up here
          </a>
          .
        </p>
      </section>

      <section id="work">
        <h1 className="center">Projects</h1>
        <div className="flex-holster">
          <Project
            title="Haiku"
            logo={haikuSVG}
            link="https://haikuforteams.com"
            buttonText="haikuforteams.com"
          >
            As a Co-Founder, I acted as Head of Design at Haiku (
            <a
              href="https://techcrunch.com/2018/03/19/here-are-64-startups-that-launched-today-at-y-combinators-w18-demo-day/"
              target="_blank"
            >
              YC W18
            </a>
            ) from 2016-2020. As a small team we created a staggering amount of
            imaginative & well-received products, including{" "}
            <a href="https://haiku.ai/animator" target="_blank">
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
            title="Animator"
            logo={animatorLogoSVG}
            link="https://haiku.ai/animator"
            buttonText="Animator website"
          >
            Animator is an innovative stateful UI animation tool, meant for
            developers and designers to use together. I led its design & coded
            the first versions of its user interface in React before our team had raised a
            seed round.
          </Project>
          <Project
            title="Diez"
            logo={diezSVG}
            link="https://diez.org"
            buttonText="diez.org"
          >
            Diez is a cross-platform design token framework with docs
            generation. I am a co-creator of this project and contribute
            primarily to its NUX, DX, guides, and DocsGen UI design & development.
          </Project>
          <Project
            title="Freedom Collaborative"
            logo={fcSVG}
            link="https://freedomcollaborative.org"
            buttonText="freedomcollaborative.org"
          >
            I co-founded and led product on a platform designed to faciliate
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
