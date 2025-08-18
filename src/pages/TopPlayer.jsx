import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faRankingStar, } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/pages/TopPlayer.css"
import { NavLink } from "react-router";

const TopPlayer = () => {
    return (
        <div className='sh-tp-main-section'>
            <div className="sh-tp-container">
                <div className="sh-tp-category-btn3">
                    <div className="sh-tp-category-btn2">
                        <NavLink to='/profile' className="sh-tp-category-btn1">
                            <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                            <NavLink to='/profile'><h1>Top Player's</h1> </NavLink>
                        </NavLink>
                    </div>
                </div>

                {/* === Top Player's Section === */}
                <div className="sh-tp-player-section">
                    <div className="sh-tp3">
                        <div className="sh-tp2">
                            <div className="sh-tp1">
                                <span> <FontAwesomeIcon icon={faRankingStar} /></span>
                                <h1>Top 50 Player's</h1>
                                <span> <FontAwesomeIcon icon={faRankingStar} /> </span>
                            </div>
                        </div>
                    </div>
                    {/* === Top Player Details === */}
                    <div className="sh-tpd-con">
                        <div className="sh-num2">
                            <div className="sh-num1">
                                <p>No</p>
                            </div>
                        </div>
                        <div className="sh-tp-name2">
                            <div className="sh-tp-name1">
                                <p>Player Name</p>
                            </div>
                        </div>
                        <div className="sh-tp-amount2">
                            <div className="sh-tp-amount1">
                                <p>Amount</p>
                            </div>
                        </div>
                    </div>
                    {/* === SOLO PARITCIPANTS === */}
                    <div className="sh-tp-participants-name">
                        <div className="sh-tp-pn2">
                            <div className="sh-tp-pn1">
                                <div className="sh-tp-no">
                                    <p>1</p>
                                </div>
                                <div className="sh-tp-name">
                                    <p>Subas Hembrom</p>
                                </div>
                                <div className="sh-tp-income">
                                    <strong>1,000 TK</strong>
                                </div>
                            </div>
                        </div>
                        <div className="sh-tp-pn2">
                            <div className="sh-tp-pn1">
                                <div className="sh-tp-no">
                                    <p>2</p>
                                </div>
                                <div className="sh-tp-name">
                                    <p>Subas Hembrom</p>
                                </div>
                                <div className="sh-tp-income">
                                    <strong>1,000 TK</strong>
                                </div>
                            </div>
                        </div>
                        <div className="sh-tp-pn2">
                            <div className="sh-tp-pn1">
                                <div className="sh-tp-no">
                                    <p>3</p>
                                </div>
                                <div className="sh-tp-name">
                                    <p>Subas Hembrom</p>
                                </div>
                                <div className="sh-tp-income">
                                    <strong>1,000 TK</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopPlayer;