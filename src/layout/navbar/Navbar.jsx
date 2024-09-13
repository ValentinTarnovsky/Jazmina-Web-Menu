import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import "./navbar.scss";

import SvgCloseLineIcon from "../../styles/svgs/close-line.svg";
import SvgMenuLineIcon from "../../styles/svgs/menu-line.svg";

const Navbar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleOnClickShowMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    // Función para cerrar el menú al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        // Escuchar el evento de scroll
        window.addEventListener("scroll", handleScroll);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMenuOpen]);

    return (
        <nav className="nav container">
            <Box className="nav__data">
                <a
                    href="#"
                    className="nav__logo">
                    <img
                        className="nav__logo__img"
                        src="/img/logo.png"
                        alt="Logo La Jazmina"/>
                </a>

                <Box
                    className={isMenuOpen ? "nav__toggle show-icon" : "nav__toggle"}
                    onClick={handleOnClickShowMenu}>
                    <SvgMenuLineIcon className="nav__burger"/>
                    <SvgCloseLineIcon className="nav__close"/>
                </Box>
            </Box>
            <Box
                className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    <li><a
                        href="#empanadas"
                        className="nav__link nav__link--close nav__link--first"
                        onClick={handleOnClickShowMenu}>
                        Empanadas
                    </a></li>

                    <li><a
                        href="#pizzas"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        Pizzas
                    </a></li>

                    <li><a
                        href="#calzones"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        Calzones
                    </a></li>

                    <li><a
                        href="#tartas"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        Tartas
                    </a></li>

                    <li><a
                        href="#fainas"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        Fainas
                    </a></li>

                    <li><a
                        href="#bebidas"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        Bebidas
                    </a></li>

                    <li><a
                        href="#postres"
                        className="nav__link nav__link--close"
                        onClick={handleOnClickShowMenu}>
                        Postres
                    </a></li>

                    <li><a
                        href="#promos"
                        className="nav__link nav__link--close nav__link--last"
                        onClick={handleOnClickShowMenu}>
                        Promos
                    </a></li>
                </ul>
            </Box>
        </nav>
    );
};

export default Navbar;