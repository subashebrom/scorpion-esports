import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/pages/Join.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router";

const Join = () => {
    return (
        <div className="sh-join-main-section">
            <div className="sh-join-container">
                <div className="sh-join-category-btn3">
                    <div className="sh-join-category-btn-2">
                        <div className="sh-join-category-btn1">
                            <span> <FontAwesomeIcon icon={faChevronLeft} /></span>
                            <NavLink to=''>MATCHE'S</NavLink>
                        </div>
                    </div>
                </div>
                {/* === Joining Section === */}
                <div className="sh-joining-section">
                    <div className="sh-join-box1">
                        <div className="sh-join-box2">
                            <h1>BR Solo | Mobile | Regular</h1>
                            <p className="sh-join-date"><b>Date:</b> <input type="datetime-local" /> </p>
                            <div className="sh-join-prize">
                                <p>Win Prize : 500 TK</p>
                                <p>Entry Fee : 20 TK</p>
                            </div>
                        </div>
                    </div>
                    <p className="join-notice">*অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করবেন*</p>
                    <div className="sh-joining">
                        <div className="sh-join-btn-box3">
                            <div className="sh-join-btn-box2">
                                <div className="sh-join-btn-box1">
                                    <p>Solo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;