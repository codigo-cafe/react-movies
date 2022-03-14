import React from 'react';
import './navbar.css';
import { FiLayers } from 'react-icons/fi';
import { AiOutlineTag } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="navbar" id="nav-bar">
                <nav className="nav">
                    <div>
                        <a href="#link" className="nav__logo">
                            <FiLayers className="nav__logo-icon" />
                            <span className="nav__logo-name">Bedimcode</span>
                        </a>
                        <div className="nav__list">
                            <a href="#link" className="nav__link active">
                                <AiOutlineTag className="nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </a>
                            <a href="#link" className="nav__link">
                                <AiOutlineTag className="nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </a>
                            <a href="#link" className="nav__link">
                                <AiOutlineTag className="nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </a>
                            <a href="#link" className="nav__link">
                                <AiOutlineTag className="nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </a>
                            <a href="#link" className="nav__link">
                                <AiOutlineTag className="nav__icon" />
                                <span className="nav__name">Dashboard</span>
                            </a>
                        </div>
                    </div>

                    <a href="#link" className="nav__link">
                        <BiLogOut className="nav__icon" />
                        <span className="nav__name">Log Out</span>
                    </a>
                </nav>
            </div>
            <h1>Components</h1>
        </React.Fragment>
    );
};

export default Navbar;
