import { useEffect, useState } from "react";
import Container from "../Container";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import PropTypes from "prop-types";
import "./index.scss";

const Navbar = ({
  language,
  setLanguage,
  theme,
  setTheme,
  scrollToSection,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}${
        theme === "dark" ? " dark" : " light"
      }`}
    >
      <Container custom="custom-nav-style">
        <div className="left-side">
          <p onClick={() => scrollToSection("home")} className="my-name">
            {"<Nardi>"}
          </p>
          <ul className="items">
            <li onClick={() => scrollToSection("home")}>
              <p>{language === "pt-BR" ? "Início" : "Home"}</p>
            </li>
            <li onClick={() => scrollToSection("about")}>
              <p>{language === "pt-BR" ? "Sobre mim" : "About me"}</p>
            </li>
            <li onClick={() => scrollToSection("curriculum")}>
              <p>{language === "pt-BR" ? "Currículo" : "Curriculum"}</p>
            </li>
            <li onClick={() => scrollToSection("projects")}>
              <p>{language === "pt-BR" ? "Projetos" : "Projects"}</p>
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <p>{language === "pt-BR" ? "Contato" : "Contact"}</p>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <ul className="items">
            <li
              onClick={() =>
                setLanguage(language === "pt-BR" ? "en-US" : "pt-BR")
              }
            >
              <p>
                <b>{language}</b>
              </p>
            </li>
            <li onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

Navbar.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
