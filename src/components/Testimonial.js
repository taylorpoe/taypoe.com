import React, { useState } from 'react';
import '../Main.scss';
import './Testimonial.scss';

function Testimonial({person}) {
  return (
    <div className="card">
      <span className="quotemark">“</span>
      <span className="quote">{person.quote}</span>
      <a className="who-holster" href={person.link} target="_blank">
        <img src={require(`../imgs/${person.id}.jpg`)} alt={`picture of ${person.name}`}/>
        <div className="name">{person.name}</div>
        <div className="title">{person.title}</div>
      </a>
    </div>
  );
}

export default Testimonial;