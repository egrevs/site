import React, { useEffect, useState } from 'react';
import '../../../../app/styles/intro.css';

const images = [
  '/site/assets/mainPagePics/IMG_4221 (2).JPG',
  '/site/assets/mainPagePics/IMG_1817.PNG',
  '/site/assets/mainPagePics/IMG_1819.PNG',
  '/site/assets/mainPagePics/IMG_1834.PNG',
  '/site/assets/mainPagePics/IMG_4224.JPG',
];

export const Intro = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [direction, setDirection] = useState(-1); // -1 = right to left

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prevIdx) => (prevIdx - 1 + images.length) % images.length);
      setDirection(-1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

    return (
    <section className="intro-hero" id="intro">
      {images.map((img, idx) => {
        let className = 'intro-hero__bg';
        if (idx === current) className += ' active slide-in-right';
        else if (idx === prev) className += ' slide-out-left';
        return (
          <div
            key={img}
            className={className}
            style={{ backgroundImage: `url('${img}')` }}
          />
        );
      })}
      <div className="intro-hero__overlay" />
      <div className="intro-hero__center">
        <h1 className="intro-hero__brand">ONA</h1>
        <div className="intro-hero__subtitle">Interior Design</div>
        <div className="intro-hero__phrase">
          Мы здесь для того, чтобы вам всегда хотелось возвращаться домой, <br />
          потому что каждая деталь в нем — о Вас и для Вас.
        </div>
            </div>
        </section>
    );
}