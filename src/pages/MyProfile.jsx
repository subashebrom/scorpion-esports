import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/pages/MyProfile.css"
import { NavLink } from "react-router";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const MyProfile = () => {
    return (
        <div className="sh-my-profile-main-section">
            <div className="sh-my-profile-main-container">
                <div className="sh-myp-category-btn3">
                    <div className="sh-myp-category-btn2">
                        <NavLink to='/profile' className="sh-myp-category-btn1">
                            <span> <FontAwesomeIcon icon={faChevronLeft} /></span>
                            <NavLink to='/profile'>My Profile</NavLink>
                        </NavLink>
                    </div>
                </div>
                {/* === Profile Image and Name === */}
                <div className="sh-profile">
                    <div className="sh-pImg">
                        <img src="/public/images/free-fire.jpg" alt="" />
                    </div>
                    <h1>My Info</h1>
                </div>
                {/* === My Info === */}
                <div className="sh-my-info-sec">
                    <div className="sh-myp-name2">
                        <div className="sh-myp-name1">
                            <p>Name: Subas Hebrom</p>
                        </div>
                    </div>
                    <div className="sh-myp-name2">
                        <div className="sh-myp-name1">
                            <p>Email: subashebrom@gmail.com</p>
                        </div>
                    </div>
                    <div className="sh-myp-name2">
                        <div className="sh-myp-name1">
                            <p>User ID: #1130subas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;