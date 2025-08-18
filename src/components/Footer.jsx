import React from 'react';
import "../assets/css/component/Footer.css"
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <>
            <div className="cba-footer-container">
                <div className="cba-footer-content">
                    <div className="cba-footer-menu-box">
                        <div className="cba-fmb-con">
                            <span></span>
                            <NavLink to='/'>
                                <div className="cba-fmb-menu">
                                    <i class='bxr bx-shapes'></i>
                                    <h3>Games</h3>
                                </div>
                            </NavLink>
                            <span></span>
                        </div>
                        <div className="cba-fmb-con">
                            <span></span>
                            <NavLink to='/my-matches'>
                            <div className="cba-fmb-menu">
                                <i class='bxr bx-list-ul'></i> 
                                <h3>My Matches</h3>
                            </div>
                            </NavLink>
                            <span></span>
                        </div>
                        <div className="cba-fmb-con">
                            <span></span>
                            <NavLink to='/results'>
                                <div className="cba-fmb-menu">
                                    <i class='bxr bx-list-ol'></i> 
                                    <h3>Results</h3>
                                </div>
                            </NavLink>
                            <span></span>
                        </div>
                        <div className="cba-fmb-con">
                            <span></span>
                            <NavLink to='/profile'>
                            <div className="cba-fmb-menu">
                                <i class='bxr bx-user-hexagon'></i> 
                                <h3>Profile</h3>
                            </div>
                            </NavLink>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;