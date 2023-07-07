import React from 'react';
import '../styles/Main.scss';
import '../styles/Testimonial.scss';

function Testimonial({person}) {
  return (
    <div className="card">
      <span className="quotemark">“</span>
      <span className="quote">{person.quote}</span>
      <a className="who-holster" rel="noreferrer" href={person.link} target="_blank">
        <img src={require(`../imgs/${person.id}.jpg`)} alt={person.name}/>
        <div className="name">{person.name}</div>
        <div className="title">{person.title}</div>
      </a>
    </div>
  );
}

export default Testimonial;