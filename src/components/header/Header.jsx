import React from 'react';
import './header.css';
import showNavbar from './showNavbar';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import AVATAR from '../../assets/images/perfil.jpg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.state = { estado: false };
    }

    componentDidMount() {
        showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
    }

    handleMenuClick() {
        const div = document.querySelector('#header-toggle');
        this.setState({
            estado: div.classList.contains('bx-x'),
        });
    }

    render() {
        let estado = this.state.estado;

        return (
            <header className="header" id="header">
                <div
                    className="header__toggle"
                    id="header-toggle"
                    onClick={this.handleMenuClick}
                >
                    {estado ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
                <div className="header__img">
                    <img src={AVATAR} alt="Foto de Perfil" />
                </div>
            </header>
        );
    }
}

export default Header;
