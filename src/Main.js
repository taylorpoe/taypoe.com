import React from 'react';
import './Main.scss';
import Testimonial from './components/Testimonial';
import tayImg from './imgs/tay.jpg';
import animatorLogoSVG from './imgs/animator-logo.svg';
import diezSVG from './imgs/diez-logo.svg';
import fcSVG from './imgs/FC-logo.svg';
import haikuSVG from './imgs/haiku-logo.svg';
import dribbbleSVG from './icons/dribbble.svg';
import angelSVG from './icons/angel.svg';
import animatorSVG from './icons/animator.svg';
import emailSVG from './icons/email.svg';
import githubSVG from './icons/github.svg';
import mediumSVG from './icons/medium.svg';
import twitterSVG from './icons/twitter.svg';
import Quotes from './testimonials.js';

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
          A seasoned product designer with a passion for leadership,
          systems thinking, and crafting rich experiences using both design &{" "}
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
          <div className="half">
            <div className="item">
              <img src={haikuSVG} className="logo" alt="haiku logo" />
              <h3>Haiku</h3>
              <p>
                I was Co-Founder & Head of Design at Haiku (
                <a
                  href="https://techcrunch.com/2018/03/19/here-are-64-startups-that-launched-today-at-y-combinators-w18-demo-day/"
                  target="_blank"
                >
                  YC W18
                </a>
                ) from 2016-2020. As a small team we created a staggering amount
                of imaginative & well-received products, including:{" "}
                <a href="https://haiku.ai/animator" href="_blank">
                  Haiku Animator
                </a>
                ,{" "}
                <a href="https://diez.org" href="_blank">
                  Diez
                </a>
                , and{" "}
                <a href="https://storybookforteams.com" href="_blank">
                  Storybook for Teams
                </a>
                .
              </p>
              <a
                className="button"
                href="https://haikuforteams.com"
                target="_blank"
              >
                <button>Launch hakuforteams.com</button>
              </a>
            </div>
          </div>
          <div className="half">
            <div className="item">
              <img src={animatorLogoSVG} className="logo" alt="animator logo" />
              <h3>Animator</h3>
              <p>
                Animator is an innovative stateful UI animation tool, meant for
                developers and designers to use together. I led its design &
                coded most of its v1 user interface in React before our team had raised a seed
                round.
              </p>
              <a
                className="button"
                href="https://haiku.ai/animator"
                target="_blank"
              >
                <button>Launch Animator website</button>
              </a>
            </div>
          </div>
          <div className="half">
            <div className="item">
              <img src={diezSVG} className="logo" alt="diez logo" />
              <h3>Diez</h3>
              <p>
                Diez is a cross-platform design token framework with docs
                generation. I am a co-creator of this project and contribute primarily to
                its NUX, DX, DocsGen UI design & development, and guides & example educational content.
              </p>
              <a className="button" href="https://diez.org" target="_blank">
                <button>Launch diez.org</button>
              </a>
            </div>
          </div>
          <div className="half">
            <div className="item">
              <img src={fcSVG} className="logo" alt="fc logo" />
              <h3>Freedom Collaborative</h3>
              <p>
                I co-founded and led product on a platform designed to faciliate
                collaboration between anti-human-trafficking NGOs from 2010-2014
                with{" "}
                <a href="https://chabdai.org" target="_blank">
                  Chab Dai Int'l
                </a>
                . I'm proud to say it's still making an impact today in 2020.
              </p>
              <a
                className="button"
                href="https://freedomcollaborative.org"
                target="_blank"
              >
                <button>Launch freedomcollaborative.org</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        {Object.values(Quotes).map((person) => <Testimonial person={person} key={person} />)}
      </section>

      <footer>
        <div className="holster">
          <img src={tayImg} className="profile" alt="Image of Taylor Poe" />
          <div className="adjacent">
            <p>
              I believe the “impossible” futures are there for the taking — a
              healthy sprinkling of resilience and gumption and any new world
              can be created. But I also believe you’re only likely to get there
              with intentional effort to make everyone around you better.
            </p>
            <p>
              I get great satisfaction and meaning from drawing out others'
              best thinking. If you’re building something
              and could use some startup or design advice — please{" "}
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
    </div>
  );
}

export default Main;
