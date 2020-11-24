import React from 'react';

function Project ({link, buttonText, logo, children}) {
  return (
    <div className="half">
      <div className="item">
        <img src={logo} className={`logo ${buttonText === 'MyArc.com' ? 'arc-logo' : ''}`} alt="diez logo" />
        <p>{children}</p>
        <a className="button" href={link} target="_blank">
          <button>{buttonText}</button>
        </a>
      </div>
    </div>
  );
}

export default Project;

