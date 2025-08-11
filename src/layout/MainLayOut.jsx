import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import "../assets/css/layout/MainLayOut.css"

const MainLayOut = () => {
    return (
        <>
            <div className="cba-main-layout-container">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    );
};

export default MainLayOut;