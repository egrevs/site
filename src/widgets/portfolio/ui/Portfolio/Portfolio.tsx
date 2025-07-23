import { ProjectCarousel } from "../../../../features/carousel/ui/ProjectCarousel/ProjectCarousel";

export const Portfolio = () => {
    const projectSet1 = [
        { src: "./assets/01.jpg", alt: "Interior design 1" },
        { src: "./assets/01 (2).jpg", alt: "Interior design 2" },
        { src: "./assets/01 (3).jpg", alt: "Interior design 3" },
        { src: "./assets/01 (4).jpg", alt: "Interior design 4" },
        { src: "./assets/01 (5).jpg", alt: "Interior design 5" },
        { src: "./assets/01 (6).jpg", alt: "Interior design 6" },
    ];

    const projectSet2 = [
        { src: "./assets/02.jpg", alt: "Interior design 1" },
        { src: "./assets/02 (2).jpg", alt: "Interior design 2" },
        { src: "./assets/02 (3).jpg", alt: "Interior design 3" },
        { src: "./assets/02 (4).jpg", alt: "Interior design 4" },
        { src: "./assets/02 (5).jpg", alt: "Interior design 5" },
        { src: "./assets/02 (6).jpg", alt: "Interior design 6" },
    ];

    const projectSet3 = [
        { src: "./assets/03.jpg", alt: "Interior design 1" },
        { src: "./assets/03 (2).jpg", alt: "Interior design 2" },
        { src: "./assets/03 (3).jpg", alt: "Interior design 3" },
        { src: "./assets/03 (4).jpg", alt: "Interior design 4" },
        { src: "./assets/03 (5).jpg", alt: "Interior design 5" },
        { src: "./assets/03 (6).jpg", alt: "Interior design 6" },
    ];

    return (
        <section className="portfolio" id="portfolio">
            <hr className="portfolio__divider" />
            <h2 className="portfolio__title">Мои проекты</h2>
            <hr className="portfolio__divider" />
            <ProjectCarousel images={projectSet1} />
            <ProjectCarousel images={projectSet2} />
            <ProjectCarousel images={projectSet3} />
        </section>
    );
};