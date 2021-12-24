import React from 'react';
import { Carousel } from 'react-bootstrap';
import mountain from '../img/mountain.jpg';
import coffee from '../img/coffee.jpg';
import beach from '../img/beach.jpg';
import football from '../img/football.jpg';
import basket from '../img/basket.jpg';
import tennis from '../img/tennis.jpg';
import padel from '../img/padel.jpg';
import './TagsImages.css';

const TagsImages = () => {
  const tags = [
    { tag: 'mountain', img: mountain },
    { tag: 'coffee', img: coffee },
    { tag: 'beach', img: beach },
    { tag: 'football', img: football },
    { tag: 'basket', img: basket },
    { tag: 'tennis', img: tennis },
    { tag: 'padel', img: padel },
  ];

  return (
    <div>
      <section id="tags" className="tags">
        <Carousel>
          {tags.map((tag, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={tag.img}
                alt={`${tag.tag} slide`}
                height="400"
              />
              <Carousel.Caption>
                <h3>{tag.tag}</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default TagsImages;
