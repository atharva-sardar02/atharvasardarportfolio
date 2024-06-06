import React from 'react';
import Home from "./components/Home";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import "./App.css"

function App() {
    return (
        <div className="app-container">
            <Router basename={"atharvasardarportfolio"}>
                <AppHeader/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
                <AppFooter/>
            </Router>
        </div>
    );
}

export default App;
