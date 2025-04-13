import '../../../../app/styles/stylesHeader/header.css'

export const Header = () => {
    return (
        <header className="header">
            <ul className="header__nav">
                <li className="header__nav-item">Главная</li>
                <li className="header__nav-item">Обо мне</li>
                <li className="header__nav-item">Проекты</li>
                <li className="header__nav-item">Контакты</li>
            </ul>
        </header>
    );
};