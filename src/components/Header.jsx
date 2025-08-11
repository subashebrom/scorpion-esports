import React from 'react';
import "../assets/css/components/Header.css"

const Header = () => {
    return (
        <>
            <div className="cba-header-container">
                <div className="cba-hc-brand-logo">
                    {/* nav logo */}
                    <img src="/public/images/brand-logo.png" alt="brand logo" />
                    {/* nav logo text */}
                    <h1>Scorpion E-sports</h1>
                </div>
                {/* notify and wallet icons */}
                <div className="cba-hc-notify-wallet">
                    {/* notify icon */}
                    <div className="cba-hc-notify">
                        <img src="../../public/images/notify-icon.png" alt="notify icon" />
                    </div>
                    {/* wallet icon */}
                    <div className="cba-hc-wallet">
                        <img src="../../public/images/wallet-icon.png" alt="wallet icon" />
                        <h4>
                            0.00
                            <span>TK</span>
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;