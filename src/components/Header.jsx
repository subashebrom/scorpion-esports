import "../assets/css/component/Header.css"
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <>
        <div className="cba-header-container">
            <div className="cba-header-content">
                <div className="cba-header-brand-logo-box">
                    <NavLink to='/'>
                        <div className="cba-hblb-con">
                            <i class='bxr bxs-gaming'></i> 
                            <h1>Scorpio E-sports</h1>
                        </div>
                    </NavLink>
                </div>
                <div className="cba-header-notify-and-wallet-box">
                    <div className="cba-header-notify-icon">
                        <NavLink to='/notification'>
                            <i class='bxr bxs-bell-ring'></i> 
                        </NavLink> 
                    </div>
                    <div className="cba-header-wallet-icon">
                        <NavLink to='/profile'>
                            <div className="cba-hwi-con">
                                <i class='bxr bxs-wallet-alt'></i>
                                <p><span>0.00</span> TK</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;