import React from "react";
import "../assets/css/Home.css";


function Home() {
    return (
        <div>
            <img
                src={require('../assets/images/header1.png')}
                alt="AtharvaBookstoreReact Logo"
                width="500px"
                height="auto"
                className="logo"
            />
        </div>
    )
}

export default Home;