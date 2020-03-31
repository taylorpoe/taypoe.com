import React from 'react';

function Project ({title, link, buttonText, logo, children}) {
  return (
    <div className="half">
      <div className="item">
        <img src={logo} className="logo" alt="diez logo" />
        <h3>{title}</h3>
        <p>{children}</p>
        <a className="button" href={link} target="_blank">
          <button>Launch {buttonText}</button>
        </a>
      </div>
    </div>
  );
}

export default Project;

