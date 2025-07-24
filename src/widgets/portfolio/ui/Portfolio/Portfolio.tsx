import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Проект 1',
    mainImage: './assets/01.jpg',
    description: 'Краткое описание проекта 1. Здесь можно рассказать о стиле, площади, особенностях и т.д.',
    images: [
      './assets/01.jpg', './assets/01 (2).jpg', './assets/01 (3).jpg',
      './assets/01 (4).jpg', './assets/01 (5).jpg', './assets/01 (6).jpg',
    ],
  },
  {
    id: 2,
    title: 'Проект 2',
    mainImage: './assets/02.jpg',
    description: 'Краткое описание проекта 2. Здесь можно рассказать о стиле, площади, особенностях и т.д.',
    images: [
      './assets/02.jpg', './assets/02 (2).jpg', './assets/02 (3).jpg',
      './assets/02 (4).jpg', './assets/02 (5).jpg', './assets/02 (6).jpg',
    ],
  },
  {
    id: 3,
    title: 'Проект 3',
    mainImage: './assets/03.jpg',
    description: 'Краткое описание проекта 3. Здесь можно рассказать о стиле, площади, особенностях и т.д.',
    images: [
      './assets/03.jpg', './assets/03 (2).jpg', './assets/03 (3).jpg',
      './assets/03 (4).jpg', './assets/03 (5).jpg', './assets/03 (6).jpg',
    ],
  },
];

export const Portfolio = () => {
  const [openId, setOpenId] = useState<number|null>(null);
  const [fullscreenImg, setFullscreenImg] = useState<string|null>(null);
  const openModal = (id: number) => setOpenId(id);
  const closeModal = () => { setOpenId(null); setFullscreenImg(null); };
  const current = projects.find(p => p.id === openId);

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
            <img src={project.mainImage} alt={project.title} className="portfolio__preview-img" />
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
                  onClick={() => setFullscreenImg(img)}
                  style={{ cursor: 'zoom-in' }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {fullscreenImg && (
        <div className="portfolio__fullscreen" onClick={() => setFullscreenImg(null)}>
          <img src={fullscreenImg} alt="Фотография проекта" className="portfolio__fullscreen-img" />
          <button className="portfolio__fullscreen-close" onClick={() => setFullscreenImg(null)}>×</button>
        </div>
      )}
    </section>
  );
};