import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/pages/Noticifaction.css"
import { NavLink } from "react-router";
import { faBell, } from "@fortawesome/free-solid-svg-icons";
const Notification = () => {
    return (
        <div className="sh-notifi-main-section">
            <div className="sh-notifi-main-container">
                <div className="sh-notifi-category-btn3">
                    <div className="sh-notifi-category-btn2">
                        <div className="sh-notifi-category-btn1">
                            <span> <FontAwesomeIcon icon={faBell} /></span>
                            <NavLink to='/profile'>History / Notification</NavLink>
                        </div>
                    </div>
                </div>
                {/* === My Info === */}
                <div className="sh-notifi-sec">
                    <div className="sh-notifi-con">
                        <div className="sh-notifi-left-item">
                            <p>100 TK</p>
                            <p>A/N: 01315291293</p>
                            <p>TrxID:1130sspp00</p>
                            <p>04:30 am 18/08/2025</p>
                        </div>
                        <div className="sh-notif-middle-item">
                            <div className="sh-notifi-box2">
                                <div className="sh-notifi-box1">
                                    <p>Deposit</p>
                                </div>
                            </div>
                            <div className="sh-status">
                                <p>+success</p>
                            </div>
                        </div>
                    </div>
                    {/* === Payment methode === */}
                    <div className="sh-notifi-pay">
                        <div className="sh-notifi-pay1">
                            <p>bKash</p>
                        </div>
                    </div>
                </div>
                <div className="sh-notifi-sec">
                    <div className="sh-notifi-con">
                        <div className="sh-notifi-left-item">
                            <p>100 TK</p>
                            <p>A/N: 01315291293</p>
                            <p>TrxID:1130sspp00</p>
                            <p>04:30 am 18/08/2025</p>
                        </div>
                        <div className="sh-notif-middle-item">
                            <div className="sh-notifi-box2">
                                <div className="sh-notifi-box1">
                                    <p>Withdraw</p>
                                </div>
                            </div>
                            <div className="sh-status">
                                <p>+success</p>
                            </div>
                        </div>
                    </div>
                    {/* === Payment methode === */}
                    <div className="sh-notifi-pay">
                        <div className="sh-notifi-pay1">
                            <p>bKash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;