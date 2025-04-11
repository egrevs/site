import './App.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomButtonGroup = ({next, previous, ...rest}) => {
    return (
        <div className="carousel-button-group">
            <button className="carousel-button prev" onClick={() => previous()}>
                ‹
            </button>
            <button className="carousel-button next" onClick={() => next()}>
                ›
            </button>
        </div>
    );
};


function App() {


    return (
        <div className= 'portfolio'>
            <header>
                <ul>
                    <li>Главная</li>
                    <li>Обо мне</li>
                    <li>Проекты</li>
                    <li>Контакты</li>
                </ul>
            </header>
            <section>
                <img src='src/assets/images/photo_2025-03-03_13-32-51.png' alt=""/>
                <div>
                    <h1>Дизайн интерьеров</h1>
                    <hr/>
                    <p>Мои проекты - это внешнее отражение вашего внутреннего мира</p>
                    <p>Я — мастер спорта России по художественной гимнастике. В 2021 году я завершила обучение в
                        Российском экономическом университете имени Г.В. Плеханова на факультете экономики и права. В
                        настоящее время работаю в сфере коммуникаций между бизнесом и властью, где приобрела ценный опыт
                        взаимодействия с различными заинтересованными сторонами.
                    </p>
                        <p>Однако со временем я осознала, что моя настоящая страсть заключается в дизайне интерьеров. Этот
                        интерес пробудился во время ремонта в моей квартире, когда я поняла, как важно создавать
                        комфортные и эстетически привлекательные пространства для жизни людей. Желание реализовать свои
                        идеи и решения в области дизайна стало для меня приоритетом.</p>
                       <p> Для дальнейшего развития своих навыков я решила обучиться в Московской школе дизайна (МШД), что
                        стало отличным стартом моего путешествия в мир дизайна. Я уверена, что полученные знания и опыт
                        позволяют мне создавать уникальные и функциональные интерьеры, которые не только радуют глаз, но
                        и делают жизнь людей более комфортной и гармоничной.
                    </p>
                    {/*<img className='diplom' src='src/assets/images/ДИПЛОМ.jpg' alt=""/>*/}
                </div>
            </section>
            <section>
                <hr/>
                <h2>
                    Для меня важен грамотный и системный подход
                </h2>
                <hr/>
                <div>
                    <div>
                        <span>01</span>
                        <h3>Комплексное ведение</h3>
                        <p>Осуществляем полный цикл работ: от планировочного решения до полной реализации
                            дизайн-проекта. Рекомендуем проверенных специалистов для наиболее точной и качественной
                            реализации. Даже удаленно контролируем подрядчиков и каждый этап работы.
                        </p>
                    </div>
                    <div>
                        <span>02</span>
                        <h3>Индивидуальный подход</h3>
                        <p>Каждый интерьер уникален, создаётся с учетом пожеланий, интересов конкретного человека и
                            является отражением его характера, стиля жизни. Наша задача - услышать и понять клиента,
                            продумать детали и найти оптимальное решение в любой ситуации.
                        </p>
                    </div>
                    <div>
                        <span>03</span>
                        <h3>Внимание к деталям</h3>
                        <p>Качество реализации проекта напрямую зависит от профессионального подхода к созданию
                            чертежей.
                            Готовим подробную и понятную рабочую документацию для комфортной работы строительной
                            бригады.
                        </p>
                    </div>
                </div>
            </section>
            <section className='portfolio-carousel'>
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
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {max: 464, min: 0},
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    arrows={false}
                    customButtonGroup={<CustomButtonGroup/>}
                    renderButtonGroupOutside={true}
                    infinite={true}
                    autoPlay={false}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["mobile"]}
                    itemClass="carousel-item"
                >
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/01.jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/01%20(2).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/01%20(3).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/01%20(4).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/01%20(5).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/01%20(6).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                </Carousel>
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
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {max: 464, min: 0},
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    arrows={false}
                    customButtonGroup={<CustomButtonGroup/>}
                    renderButtonGroupOutside={true}
                    infinite={true}
                    autoPlay={false}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["mobile"]}
                    itemClass="carousel-item"
                >
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/02.jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/02%20(2).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/02%20(3).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/02%20(4).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/02%20(5).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/02%20(6).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                </Carousel>
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
                            items: 2,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {max: 464, min: 0},
                            items: 1,
                            partialVisibilityGutter: 30
                        }
                    }}
                    arrows={false}
                    customButtonGroup={<CustomButtonGroup/>}
                    renderButtonGroupOutside={true}
                    infinite={true}
                    autoPlay={false}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["mobile"]}
                    itemClass="carousel-item"
                >
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/03.jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/03%20(2).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/03%20(3).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/03%20(4).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/03%20(5).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                    <div className="carousel-image-container">
                        <img
                            src="src/assets/03%20(6).jpg"
                            alt="Interior design 1"
                        />
                    </div>
                </Carousel>
            </section>
            <section>
                <div>
                    <h3>
                        ОБСУДИМ ДЕТАЛИ?
                    </h3>
                    <p>
                        Если интересует стоимость Вашего проекта и условия сотрудничества, свяжитесь со мной любым
                        удобным для вас способом.
                    </p>
                </div>
                <form className="contact-form">
                    <div className="input-group">
                        <label htmlFor="name">Имя</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Отправить
                    </button>
                </form>
            </section>
            <footer>
                <div>
                    <span>Заказать проект</span>
                    <a href="tel:+79999999999">+7 999 999-99-99</a>
                    <a href="mailto:info@example.com">info@example.com</a>
                </div>
            </footer>
        </div>
    )
}

export default App
