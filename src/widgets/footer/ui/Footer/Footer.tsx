import '../../../../app/styles/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer__text">Заказать проект</span>
            {/*<a href="tel:+79999999999" className="footer__link">+7 999 999-99-99</a>*/}
            <a href="mailto:Orekhovana@list.ru" className="footer__link">Orekhovana@list.ru</a>
        </footer>
    );
};