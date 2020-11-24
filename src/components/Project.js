import React from 'react';

function Project ({name, link, buttonText, logo, children}) {
  return (
    <div className="half">
      <div className="item">
        <img
          src={logo}
          className={`logo ${name}-logo`}
          alt="project logo" />
        <p>{children}</p>
        <a className="button" href={link} target="_blank">
          <button>{buttonText}</button>
        </a>
      </div>
    </div>
  );
}

export default Project;

