import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/pages/MyMatches.css"
import { faBangladeshiTakaSign, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
const MyMatches = () => {
    return (
        <div className="sh-my-match-main-section">
            <div className="sh-mm-container">
                <div className="sh-mm-category-btn3">
                    <div className="sh-mm-category-btn-2">
                        <div className="sh-mm-category-btn1">
                            <span> <FontAwesomeIcon icon={faChevronLeft} /></span>
                            <NavLink to=''>MATCHE'S</NavLink>
                        </div>
                    </div>
                </div>
                {/* === My Matches Card === */}
                <div className="sh-mm-card-container">
                    <div className="sh-mm-card-box">
                        <div className="sh-mm-cards">
                            <div className="sh-mm-left-item">
                                <p>1</p>
                            </div>
                            {/* === Middle Item === */}
                            <div className="sh-mm-middle-item">
                                {/* === Joining match naem will be shown here === */}
                                <p>Solo | Mobile | Regular</p>
                                {/* === Joining match start time will be shown here === */}
                                <p>2025-08-17 at 03:00 pm</p>
                                {/* === Joining match winner prize will be shown here === */}
                                <p>Winning Prize: <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 800 TK</span></p>
                                {/* === After the match ends, the amount of money the player has won will be shown === */}
                                <p>Won Amount: <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 1,000 TK </span></p>
                            </div>
                            {/* === Right Item === */}
                            <div className="sh-mm-right-item">
                                {/* ==== Joining mathc number will be shown here === */}
                                <p>#1130</p>
                            </div>
                        </div>
                        {/* === */}
                        <div className="sh-mm-entry-fee">20 TK</div>
                    </div>
                    <div className="sh-mm-card-box">
                        <div className="sh-mm-cards">
                            <div className="sh-mm-left-item">
                                <p>2</p>
                            </div>
                            {/* === Middle Item === */}
                            <div className="sh-mm-middle-item">
                                {/* === Joining match naem will be shown here === */}
                                <p>Solo | Mobile | Regular</p>
                                {/* === Joining match start time will be shown here === */}
                                <p>2025-08-17 at 03:00 pm</p>
                                {/* === Joining match winner prize will be shown here === */}
                                <p>Winning Prize: <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 800 TK</span></p>
                                {/* === After the match ends, the amount of money the player has won will be shown === */}
                                <p>Won Amount: <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 1,000 TK </span></p>
                            </div>
                            {/* === Right Item === */}
                            <div className="sh-mm-right-item">
                                {/* ==== Joining mathc number will be shown here === */}
                                <p>#1130</p>
                            </div>
                        </div>
                        {/* === */}
                        <div className="sh-mm-entry-fee">20 TK</div>
                    </div>
                    <div className="sh-mm-card-box">
                        <div className="sh-mm-cards">
                            <div className="sh-mm-left-item">
                                <p>3</p>
                            </div>
                            {/* === Middle Item === */}
                            <div className="sh-mm-middle-item">
                                {/* === Joining match naem will be shown here === */}
                                <p>Solo | Mobile | Regular</p>
                                {/* === Joining match start time will be shown here === */}
                                <p>2025-08-17 at 03:00 pm</p>
                                {/* === Joining match winner prize will be shown here === */}
                                <p>Winning Prize: <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 800 TK</span></p>
                                {/* === After the match ends, the amount of money the player has won will be shown === */}
                                <p>Won Amount: <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/> 1,000 TK </span></p>
                            </div>
                            {/* === Right Item === */}
                            <div className="sh-mm-right-item">
                                {/* ==== Joining mathc number will be shown here === */}
                                <p>#1130</p>
                            </div>
                        </div>
                        {/* === */}
                        <div className="sh-mm-entry-fee">20 TK</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyMatches;