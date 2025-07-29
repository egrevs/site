import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    title: 'RiverSky',
    mainImage: '/site/assets/pravki/firstProject/IMG_4224.JPG',
    description: 'ЖК «RiverSky» 96.5 м²',
    images: [
      '/site/assets/pravki/firstProject/IMG_4224.JPG',
      '/site/assets/pravki/firstProject/IMG_4223.JPG',
      '/site/assets/pravki/firstProject/IMG_4222.JPG',
      '/site/assets/pravki/firstProject/IMG_4221.JPG',
      '/site/assets/pravki/firstProject/IMG_4220.JPG',
      '/site/assets/pravki/firstProject/IMG_4219.JPG',
      '/site/assets/pravki/firstProject/IMG_4217.JPG',
      '/site/assets/pravki/firstProject/IMG_4216.JPG',
      '/site/assets/pravki/firstProject/IMG_4215.JPG',
      '/site/assets/pravki/firstProject/IMG_4214.JPG',
      '/site/assets/pravki/firstProject/IMG_4213.JPG',
      '/site/assets/pravki/firstProject/IMG_4212.JPG',
      '/site/assets/pravki/firstProject/IMG_4209.JPG',
      '/site/assets/pravki/firstProject/IMG_4208.JPG',
      '/site/assets/pravki/firstProject/IMG_4205.JPG',
      '/site/assets/pravki/firstProject/IMG_4203.JPG',
      '/site/assets/pravki/firstProject/IMG_4202.JPG',
      '/site/assets/pravki/firstProject/IMG_4201.JPG',
    ],
  },
  {
    id: 2,
    title: 'Full House',
    mainImage: '/site/assets/pravki/secondProject/IMG_4231.JPG',
    description: 'ЖК «Full House» 75 м²',
    images: [
      '/site/assets/pravki/secondProject/IMG_4231.JPG',
      '/site/assets/pravki/secondProject/IMG_4232.JPG',
      '/site/assets/pravki/secondProject/IMG_4235.JPG',
      '/site/assets/pravki/secondProject/IMG_4238.JPG',
      '/site/assets/pravki/secondProject/IMG_4241.JPG',
      '/site/assets/pravki/secondProject/IMG_4243.JPG',
      '/site/assets/pravki/secondProject/IMG_4245.JPG',
      '/site/assets/pravki/secondProject/IMG_4246.JPG',
      '/site/assets/pravki/secondProject/IMG_4247.JPG',
    ],
  },
  {
    id: 3,
    title: 'Остров',
    mainImage: '/site/assets/pravki/thirdProject/IMG_1834.PNG',
    description: 'ЖК «Остров» 66 м²',
    images: [
      '/site/assets/pravki/thirdProject/IMG_1834.PNG',
      '/site/assets/pravki/thirdProject/IMG_1835.PNG',
      '/site/assets/pravki/thirdProject/IMG_1836.PNG',
      '/site/assets/pravki/thirdProject/IMG_1839.PNG',
      '/site/assets/pravki/thirdProject/IMG_1831.PNG',
      '/site/assets/pravki/thirdProject/IMG_1830.PNG',
      '/site/assets/pravki/thirdProject/IMG_1829.PNG',
      '/site/assets/pravki/thirdProject/IMG_1828.PNG',
      '/site/assets/pravki/thirdProject/IMG_1826.PNG',
      '/site/assets/pravki/thirdProject/IMG_1824.PNG',
      '/site/assets/pravki/thirdProject/IMG_1823.PNG',
      '/site/assets/pravki/thirdProject/IMG_1822.PNG',
      '/site/assets/pravki/thirdProject/IMG_1815.PNG',
      '/site/assets/pravki/thirdProject/IMG_1816.PNG',
      '/site/assets/pravki/thirdProject/IMG_1817.PNG',
      '/site/assets/pravki/thirdProject/IMG_1818.PNG',
      '/site/assets/pravki/thirdProject/IMG_1819.PNG',
    ],
  },
];

export const Portfolio = () => {
  const [openId, setOpenId] = useState<number|null>(null);
  const [fullscreenImg, setFullscreenImg] = useState<string|null>(null);
  const [fullscreenIdx, setFullscreenIdx] = useState<number>(0);
  const openModal = (id: number) => setOpenId(id);
  const closeModal = () => { setOpenId(null); setFullscreenImg(null); setFullscreenIdx(0); };
  const current = projects.find(p => p.id === openId);

  // Открыть фото по индексу
  const openFullscreenByIdx = (idx: number) => {
    if (!current) return;
    const images = current.images;
    const newIdx = (idx + images.length) % images.length;
    setFullscreenImg(images[newIdx]);
    setFullscreenIdx(newIdx);
  };

  // Обработка клавиш
  useEffect(() => {
    if (!fullscreenImg) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') openFullscreenByIdx(fullscreenIdx - 1);
      if (e.key === 'ArrowRight') openFullscreenByIdx(fullscreenIdx + 1);
      if (e.key === 'Escape') setFullscreenImg(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [fullscreenImg, fullscreenIdx, current]);

    return (
        <section className="portfolio" id="portfolio">
      <div className="portfolio__header-group">
        <hr className="portfolio__divider" />
        <h2 className="portfolio__title">Мои проекты</h2>
        <hr className="portfolio__divider" />
      </div>
      <div className="portfolio__previews">
        {projects.map(project => (
          <div key={project.id} className="portfolio__preview" onClick={() => openModal(project.id)}>
            <img 
              src={project.mainImage} 
              alt={project.title} 
              className="portfolio__preview-img" 
              loading="lazy"
            />
            <h3 className="portfolio__project-title">{project.title}</h3>
          </div>
        ))}
      </div>
      {openId && current && (
        <div className="portfolio__modal" onClick={closeModal}>
          <div className="portfolio__modal-content" onClick={e => e.stopPropagation()}>
            <button className="portfolio__modal-close" onClick={closeModal}>×</button>
            <h2 className="portfolio__modal-title">{current.title}</h2>
            <p className="portfolio__modal-desc">{current.description}</p>
            <div className="portfolio__modal-gallery">
              {current.images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={current.title + ' ' + (idx+1)}
                  className="portfolio__modal-img"
                  loading="lazy"
                  onClick={() => { setFullscreenImg(img); setFullscreenIdx(idx); }}
                  style={{ cursor: 'zoom-in' }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {fullscreenImg && current && (
        <div className="portfolio__fullscreen" onClick={() => setFullscreenImg(null)}>
          <button className="portfolio__fullscreen-arrow portfolio__fullscreen-arrow--left" onClick={e => { e.stopPropagation(); openFullscreenByIdx(fullscreenIdx - 1); }}>&#8592;</button>
          <img src={fullscreenImg} alt="Фотография проекта" className="portfolio__fullscreen-img" />
          <button className="portfolio__fullscreen-arrow portfolio__fullscreen-arrow--right" onClick={e => { e.stopPropagation(); openFullscreenByIdx(fullscreenIdx + 1); }}>&#8594;</button>
          <button className="portfolio__fullscreen-close" onClick={e => { e.stopPropagation(); setFullscreenImg(null); }}>×</button>
        </div>
      )}
        </section>
    );
};