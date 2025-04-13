import '../../../../app/styles/Contact.css';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact__info">
                <h3 className="contact__title">
                    ОБСУДИМ ДЕТАЛИ?
                </h3>
                <p className="contact__text">
                    Если интересует стоимость Вашего проекта и условия сотрудничества, свяжитесь со мной любым
                    удобным для вас способом.
                </p>
            </div>
            <form className="contact__form">
                <div className="contact__form-group">
                    <label htmlFor="name" className="contact__label">Имя</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="contact__input"
                        required
                    />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="phone" className="contact__label">Телефон</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="contact__input"
                        required
                    />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="email" className="contact__label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="contact__input"
                        required
                    />
                </div>
                <button type="submit" className="contact__button">
                    Отправить
                </button>
            </form>
        </section>
    );
};