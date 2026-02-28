import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CarouselItem {
  src: string;
  alt?: string;
  caption?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => (
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {items.map((item, idx) => (
        <div key={idx} className={`carousel-item${idx === 0 ? ' active' : ''}`}>
          <img src={item.src} className="d-block w-100" alt={item.alt || ''} />
          {item.caption && <div className="carousel-caption d-none d-md-block"><h5>{item.caption}</h5></div>}
        </div>
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default Carousel;
