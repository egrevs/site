import '../../../../app/styles/Approach.css';

export const Approach = () => {
    return (
        <section className="approach">
            <hr className="approach__divider"/>
            <h2 className="approach__title">
                Для меня важен грамотный и системный подход
            </h2>
            <hr className="approach__divider"/>
            <div className="approach__list">
                <div className="approach__item">
                    <span className="approach__number">01</span>
                    <h3 className="approach__subtitle">Комплексное ведение</h3>
                    <p className="approach__text">
                        Осуществляем полный цикл работ: от планировочного решения до полной реализации
                        дизайн-проекта. Рекомендуем проверенных специалистов для наиболее точной и качественной
                        реализации. Даже удаленно контролируем подрядчиков и каждый этап работы.
                    </p>
                </div>
                <div className="approach__item">
                    <span className="approach__number">02</span>
                    <h3 className="approach__subtitle">Индивидуальный подход</h3>
                    <p className="approach__text">
                        Каждый интерьер уникален, создаётся с учетом пожеланий, интересов конкретного человека и
                        является отражением его характера, стиля жизни. Наша задача - услышать и понять клиента,
                        продумать детали и найти оптимальное решение в любой ситуации.
                    </p>
                </div>
                <div className="approach__item">
                    <span className="approach__number">03</span>
                    <h3 className="approach__subtitle">Внимание к деталям</h3>
                    <p className="approach__text">
                        Качество реализации проекта напрямую зависит от профессионального подхода к созданию
                        чертежей. Готовим подробную и понятную рабочую документацию для комфортной работы строительной
                        бригады.
                    </p>
                </div>
            </div>
        </section>
    );
};