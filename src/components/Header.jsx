
import "../css/Header.css"
import { NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div className='sh-header-main-section'>
            <div className="sh-header-container">
                <div className="sh-header-logo">
                    <NavLink to=''> <span> <FontAwesomeIcon icon={faGamepad}/> SCORPION E-SPORTS</span></NavLink>
                </div>
                {/* === Wallet Section === */}
                <div className="sh-header-right-items">
                    <NavLink to=''> <FontAwesomeIcon icon={faBell}/> </NavLink>
                    <div>
                        <NavLink to=''> <span><FontAwesomeIcon icon={faWallet} /></span><b>0.00 TK</b> </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;