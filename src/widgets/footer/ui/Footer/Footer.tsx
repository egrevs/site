import '../../../../app/styles/Footer.css';
import { useEffect, useState } from 'react';

export const Footer = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            const contact = document.getElementById('contact');
            if (!contact) return;
            const contactRect = contact.getBoundingClientRect();
            // Показывать футер только если нижняя граница блока contact выше верхней границы окна
            if (contactRect.bottom <= 0) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll(); // вызвать при монтировании
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <footer className={`footer${visible ? ' footer--visible' : ''}`}>
            <div className="footer__contact-block">
                <span className="footer__contact-title">Связаться со мной:</span>
                <span className="footer__contact-phone">тел.: <a href="tel:+79774147907" className="footer__contact-link">+79774147907</a></span>
                <span className="footer__contact-email">email: <a href="mailto:orekhovana@list.ru" className="footer__contact-link">orekhovana@list.ru</a></span>
            </div>
        </footer>
    );
};