import React from "react";
import "../assets/css/AppHeader.css";
import {Link} from "react-router-dom";
import '../assets/css/global.css';


function AppHeader() {
    return (
        <header className="header-flex">
            <section className="bookstore-logo">
                <Link to="/">
                    <img
                        src={require('../assets/images/ARS.png')}
                        alt="AtharvaLogo"
                        width="150px"
                        height="auto"
                        className="logo"
                    />
                </Link>
            </section>
            <section className="title">
                <h1>
                    <Link to="/" className="text-logo"> Atharva Sardar </Link>
                </h1>
            </section>
            {/*<section>*/}
                {/*<form className="same-line" action="">*/}
                {/*    <div className="search-container">*/}
                {/*        <input type="text" className="search-bar" placeholder="Search..."/>*/}
                {/*        <Link to="/" className="search-icon-link">*/}
                {/*            <img*/}
                {/*                // src={require('../assets/images/site/search-icon.png')}*/}
                {/*                alt="search icon"*/}
                {/*                className="search-icon"*/}
                {/*            />*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</form>*/}
                <section className="same-line-buttons">
                    <Link to="/projects" className="header-link-button">
                        <button className="button">About</button>
                    </Link>
                    <div>
                        {/*<HeaderDropdown/>*/}
                        <button className="button">Projects</button>
                    </div>
                    <Link to="/" className="header-link-button">
                        <button className="button">Contact Me</button>
                    </Link>
                </section>
            {/*</section>*/}
            {/*<section className="cart-login">*/}
            {/*    <section className="image-button-header">*/}
            {/*        <Link to={"/cart"}>*/}
            {/*            <div className="cart-icon-container">*/}
            {/*                <img*/}
            {/*                    // src={require('../assets/images/site/cart.png')}*/}
            {/*                    alt="cart button"*/}
            {/*                />*/}
            {/*                <span className="cart-item-count">{}</span>*/}
            {/*            </div>*/}
            {/*        </Link>*/}
            {/*    </section>*/}
            {/*    <Link to="/" className="header-link-button">*/}
            {/*        <form className="same-line" action="">*/}
            {/*            <button className="button">*/}
            {/*                Login*/}
            {/*                <img*/}
            {/*                    // src={require('../assets/images/site/login.png')}*/}
            {/*                    alt="login button"*/}
            {/*                />*/}
            {/*            </button>*/}
            {/*        </form>*/}
            {/*    </Link>*/}
            {/*</section>*/}
        </header>
    )
}

export default AppHeader;