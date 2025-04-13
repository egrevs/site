import Carousel from "react-multi-carousel";
import '../../../../app/styles/Carousel.css';
import "react-multi-carousel/lib/styles.css";
import { CarouselButtons } from "../../../../shared/ui/CarouselButtons/CarouselButtons";

interface ProjectCarouselProps {
    images: {src: string; alt: string}[];
}

export const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
    return (
        <div className="carousel-wrapper">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={{
                    desktop: {
                        breakpoint: {max: 3000, min: 1024},
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {max: 1024, min: 464},
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {max: 464, min: 0},
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                arrows={false}
                customButtonGroup={<CarouselButtons />}
                renderButtonGroupOutside={false}
                infinite={true}
                autoPlay={false}
                containerClass="carousel__container"
                removeArrowOnDeviceType={["mobile"]}
                itemClass="carousel__item"
            >
                {images.map((image, index) => (
                    <div key={index} className="carousel__image-wrapper">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="carousel__image"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};