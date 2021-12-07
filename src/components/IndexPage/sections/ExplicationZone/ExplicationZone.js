import React from 'react';
import explicationImg from '../img/bored.jpg';

const ExplicationZone = () => {
  return (
    <div>
      <section id="about">
        <div className="explication">
          <img alt="img-group" src={explicationImg} />
          <p>lorem ipsum</p>
        </div>
      </section>
    </div>
  );
};

export default ExplicationZone;
