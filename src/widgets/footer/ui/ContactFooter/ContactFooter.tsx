import '../../../../app/styles/Footer.css';
import { useEffect, useRef, useState } from 'react';

export const ContactFooter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div ref={ref} className={`footer footer--static${visible ? ' footer--visible' : ''}`}>
      <div className="footer__contact-block">
        <span className="footer__contact-title">Связаться со мной:</span>
        <span className="footer__contact-phone">тел.: <a href="tel:+79774147907" className="footer__contact-link">+79774147907</a></span>
        <span className="footer__contact-email">email: <a href="mailto:orekhovana@list.ru" className="footer__contact-link">orekhovana@list.ru</a></span>
      </div>
    </div>
  );
}; 