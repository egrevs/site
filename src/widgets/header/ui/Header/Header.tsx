import '../../../../app/styles/stylesHeader/header.css';

export const Header = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <ul className="header__nav">
                <li className="header__nav-item" onClick={() => scrollToSection('intro')}>
                    Главная
                </li>
                <li className="header__nav-item" onClick={() => scrollToSection('approach')}>
                    Обо мне
                </li>
                <li className="header__nav-item" onClick={() => scrollToSection('portfolio')}>
                    Проекты
                </li>
                <li className="header__nav-item" onClick={() => scrollToSection('contact')}>
                    Контакты
                </li>
            </ul>
        </header>
    );
};