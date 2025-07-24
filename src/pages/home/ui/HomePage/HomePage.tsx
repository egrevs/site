import { Header } from "../../../../widgets/header/ui/Header/Header";
import { Intro } from "../../../../widgets/intro/ui/Intro/Intro";
import { Approach } from "../../../../widgets/approach/ui/Approach/Approach";
import { Portfolio } from "../../../../widgets/portfolio/ui/Portfolio/Portfolio";
import { Contact } from "../../../../widgets/contact/ui/Contact/Contact";
import { Footer } from "../../../../widgets/footer/ui/Footer/Footer";
import { AboutMe } from '../../../../widgets/about/ui/AboutMe/AboutMe';
import { ContactFooter } from '../../../../widgets/footer/ui/ContactFooter/ContactFooter';

export const HomePage = () => {
    return (
        <div className="page">
            <Header />
            <main className="page__content">
                <Intro />
                <Approach />
                <AboutMe />
                <Portfolio />
                <Contact />
                <ContactFooter />
            </main>
        </div>
    );
};