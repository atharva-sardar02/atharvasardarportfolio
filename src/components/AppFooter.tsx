import React from "react";
import "../assets/css/AppFooter.css";
import '../assets/css/global.css';
import {Link} from "react-router-dom";

function AppFooter() {
    return (
        <footer>
            <section>
                <section className="image-button">
                    <Link to="/">
                        <img
                            src={require('../assets/images/copyright.png')}
                            alt="copyright button"
                        />
                    </Link>
                    <section>
                        Copyright
                    </section>
                    <section>
                        All Rights Reserved
                    </section>

                </section>
            </section>
            <section>
                <p>
                    Address
                </p>
                <section className="social-media-icons">
                    <section className="image-button">
                        <Link to="/">
                            <img
                                src={require('../assets/images/dir.png')}
                                alt="Address button"
                            />
                        </Link>
                    </section>
                </section>
            </section>
            <section>
                <p>
                    Contact Us
                </p>
                <section className="social-media-icons">
                    <section className="image-button">
                        <Link to="/">
                            <img
                                src={require('../assets/images/gm.png')}
                                alt="gmail button"
                            />
                        </Link>
                    </section>
                    <section className="image-button">
                        <Link to="/">
                            <img
                                src={require('../assets/images/fb.png')}
                                alt="facebook button"
                            />
                        </Link>
                    </section>
                    <section className="image-button">
                        <Link to="/">
                            <img
                                src={require('../assets/images/tw.png')}
                                alt="twitter button"
                            />
                        </Link>
                    </section>
                </section>
            </section>
        </footer>
        // <div>
        //     Footer
        // </div>
    )
}

export default AppFooter;