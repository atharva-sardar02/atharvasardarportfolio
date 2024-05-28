import React from 'react';
import Home from "./components/Home";
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"

function App() {
    return (
        <Router basename={"atharvasardarportfolio"}>
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <AppFooter />
        </Router>
    );
}

export default App;
