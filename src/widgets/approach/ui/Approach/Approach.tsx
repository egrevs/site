import '../../../../app/styles/Approach.css';

export const Approach = () => {
    const approachItems = [
        {
            number: '01',
            title: 'Комплексное ведение',
            text: 'Осуществляем полный цикл работ: от планировочного решения до полной реализации дизайн-проекта. Рекомендуем проверенных специалистов для наиболее точной и качественной реализации.'
        },
        {
            number: '02',
            title: 'Индивидуальный подход',
            text: 'Каждый интерьер уникален, создаётся с учетом пожеланий, интересов конкретного человека и является отражением его характера, стиля жизни. Наша задача - услышать и понять клиента, продумать детали и найти оптимальное решение в любой ситуации.'
        },
        {
            number: '03',
            title: 'Внимание к деталям',
            text: 'Качество реализации проекта напрямую зависит от профессионального подхода к созданию чертежей. Готовим подробную и понятную рабочую документацию для комфортной работы строительной бригады.'
        },

    ];

    return (
        <section className="approach" id="approach">
            <hr className="approach__divider"/>
            <h2 className="approach__title">
                Для меня важен грамотный и системный подход
            </h2>
            <hr className="approach__divider"/>
            <div className="approach__list">
                {approachItems.map((item, index) => (
                    <div key={index} className="approach__item">
                        <span className="approach__number">{item.number}</span>
                        <h3 className="approach__subtitle">{item.title}</h3>
                        <p className="approach__text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};