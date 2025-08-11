import React from 'react';
import "../assets/css/components/Footer.css"

const Footer = () => {
    return (
        <>
            <div className="cba-footer-container">
                <div className="cba-fc-menu-box">
                    <div className="cba-fc-mb-menu">
                        <img src="../../public/images/games-icon.png" alt="" />
                        <h4>Games</h4>
                    </div>
                    <div className="cba-fc-mb-menu">
                        <img src="../../public/images/my-matches-icon.png" alt="" />
                        <h4>My Matches</h4>
                    </div>
                    <div className="cba-fc-mb-menu">
                        <img src="../../public/images/results-icon.png" alt="" />
                        <h4>Results</h4>
                    </div>
                    <div className="cba-fc-mb-menu">
                        <img src="../../public/images/profile-icon.png" alt="" />
                        <h4>Profile</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;