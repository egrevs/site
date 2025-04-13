
import './CarouselButtons.css';

interface CarouselButtonsProps {
    next?: () => void;
    previous?: () => void;
}

export const CarouselButtons = ({ next, previous }: CarouselButtonsProps) => {
    const handleNext = () => {
        if (next) next();
    };

    const handlePrevious = () => {
        if (previous) previous();
    };

    return (
        <div className="carousel-buttons">
            <button className="carousel-buttons__item carousel-buttons__item--prev" onClick={handlePrevious}>
                ‹
            </button>
            <button className="carousel-buttons__item carousel-buttons__item--next" onClick={handleNext}>
                ›
            </button>
        </div>
    );
};