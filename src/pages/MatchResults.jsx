import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSquarePollHorizontal, faTrophy, } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/pages/MatchResults.css"
import { NavLink } from "react-router";

const MatchResults = () => {
    return (
        <div className='sh-mr-main-section'>
            <div className="sh-mr-container">
                <div className="sh-mr-category-btn3">
                    <div className="sh-mr-category-btn2">
                        <div className="sh-mr-category-btn1">
                            <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                            <NavLink to=''><h1>MATCH RESULT'S</h1> </NavLink>
                        </div>
                    </div>
                </div>
                {/* === SOLO Match Results === */}
                <div className="solo-match-details-section">
                    <div className="sh-smr-card-container">
                        <div className="sh-solo-mr-card">
                            <div className="sh-smr-card2">
                                <div className="sh-mr-category-2btn3">
                                    <div className="sh-mr-category-btn2">
                                        <div className="sh-mr-category-btn1">
                                            <NavLink to=''><h1>SOLO | MOBILE | REGULAR</h1> </NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* === Smr TYPE SECTION === */}
                                <div className="sh-smr-type-section">
                                    <div className="sh-smr-type-box1">
                                        <div className="sh-smr-type-box2">
                                            <p>Type: Solo</p>
                                        </div>
                                    </div>
                                    <div className="sh-smr-type-box1">
                                        <div className="sh-smr-type-box2">
                                            <p>Map: Barmuda</p>
                                        </div>
                                    </div>
                                    <div className="sh-smr-type-box1">
                                        <div className="sh-smr-type-box2">
                                            <p>Version: Mobile</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sh-smr-type-section-two">
                                    <div className="sh-smr-type-box1">
                                        <div className="sh-smr-type-box2">
                                            <p>Type: Solo</p>
                                        </div>
                                    </div>
                                    <div className="sh-smr-type-box1">
                                        <div className="sh-smr-type-box2">
                                            <p>Map: Barmuda</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sh-smr-type-box-last1">
                                    <div className="sh-smr-type-box-last">
                                        <p>Match Schedule: 09-08-2025 at 04:30 am</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sh-smr-prize-card2">
                                <div className="sh-mr-category-2btn3">
                                    <div className="sh-mr-category-btn2">
                                        <div className="sh-mr-category-btn1">
                                            <NavLink to=''><h1>PRIZE DETAILS</h1> </NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* === Smr TYPE SECTION === */}
                                <div className="sh-smr-type-section-two">
                                    <div className="sh-smr-type-box1">
                                        <div className="sh-smr-type-box2">
                                            <p>Type: Solo</p>
                                        </div>
                                    </div>
                                    <div className="sh-smr-type-box1">
                                        <div className="sh-smr-type-box2">
                                            <p>Map: Barmuda</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Solo Match Results === */}
                <div className="sh-smr-registered-player-section">
                    <div className="sh-smr-rpp3">
                        <div className="sh-smr-rpp2">
                            <div className="sh-smr-rpp1">
                                <span> <FontAwesomeIcon icon={faTrophy} /></span>
                                <h1>WINNER</h1>
                                <span> <FontAwesomeIcon icon={faTrophy} /> </span>
                            </div>
                        </div>
                    </div>
                    {/* === SOLO PARITCIPANTS === */}
                    <div className="sh-smr-participants-name">
                        <div className="sh-smr-pn2">
                            <div className="sh-smr-pn1">
                                <p>Player Name</p>
                            </div>
                        </div>
                        <div className="sh-smr-kill-pn2">
                            <div className="sh-smr-kill-pn1">
                                <p>Kills</p>
                            </div>
                        </div>
                        <div className="sh-smr-mp-pn2">
                            <div className="sh-smr-mp-pn1">
                                <p>M.P</p>
                            </div>
                        </div>
                        <div className="sh-smr-amnt-pn2">
                            <div className="sh-smr-amnt-pn1">
                                <p>Amount</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smr-participants-name">
                        <div className="sh-smrp-pn2">
                            <div className="sh-smrp-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smrp-kill-pn2">
                            <div className="sh-smrp-kill-pn1">
                                <p>30</p>
                            </div>
                        </div>
                        <div className="sh-smrp-mp-pn2">
                            <div className="sh-smrp-mp-pn1">
                                <p>3.80</p>
                            </div>
                        </div>
                        <div className="sh-smrp-amnt-pn2">
                            <div className="sh-smrp-amnt-pn1">
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smr-participants-name">
                        <div className="sh-smrp-pn2">
                            <div className="sh-smrp-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smrp-kill-pn2">
                            <div className="sh-smrp-kill-pn1">
                                <p>30</p>
                            </div>
                        </div>
                        <div className="sh-smrp-mp-pn2">
                            <div className="sh-smrp-mp-pn1">
                                <p>3.80</p>
                            </div>
                        </div>
                        <div className="sh-smrp-amnt-pn2">
                            <div className="sh-smrp-amnt-pn1">
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smr-participants-name">
                        <div className="sh-smrp-pn2">
                            <div className="sh-smrp-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smrp-kill-pn2">
                            <div className="sh-smrp-kill-pn1">
                                <p>30</p>
                            </div>
                        </div>
                        <div className="sh-smrp-mp-pn2">
                            <div className="sh-smrp-mp-pn1">
                                <p>3.80</p>
                            </div>
                        </div>
                        <div className="sh-smrp-amnt-pn2">
                            <div className="sh-smrp-amnt-pn1">
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smr-participants-name">
                        <div className="sh-smrp-pn2">
                            <div className="sh-smrp-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smrp-kill-pn2">
                            <div className="sh-smrp-kill-pn1">
                                <p>30</p>
                            </div>
                        </div>
                        <div className="sh-smrp-mp-pn2">
                            <div className="sh-smrp-mp-pn1">
                                <p>3.80</p>
                            </div>
                        </div>
                        <div className="sh-smrp-amnt-pn2">
                            <div className="sh-smrp-amnt-pn1">
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Solo Match Results === */}
                <div className="sh-smr-registered-player-section">
                    <div className="sh-smr-rpp3">
                        <div className="sh-smr-rpp2">
                            <div className="sh-smr-rpp1">
                                <span> <FontAwesomeIcon icon={faSquarePollHorizontal} /></span>
                                <h1>Full Result's</h1>
                                <span> <FontAwesomeIcon icon={faSquarePollHorizontal} /> </span>
                            </div>
                        </div>
                    </div>
                    {/* === SOLO PARITCIPANTS === */}
                    <div className="sh-smr-participants-name">
                        <div className="sh-smr-pn2">
                            <div className="sh-smr-pn1">
                                <p>Player Name</p>
                            </div>
                        </div>
                        <div className="sh-smr-kill-pn2">
                            <div className="sh-smr-kill-pn1">
                                <p>Kills</p>
                            </div>
                        </div>
                        <div className="sh-smr-mp-pn2">
                            <div className="sh-smr-mp-pn1">
                                <p>M.P</p>
                            </div>
                        </div>
                        <div className="sh-smr-amnt-pn2">
                            <div className="sh-smr-amnt-pn1">
                                <p>Amount</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smr-participants-name">
                        <div className="sh-smrp-pn2">
                            <div className="sh-smrp-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smrp-kill-pn2">
                            <div className="sh-smrp-kill-pn1">
                                <p>30</p>
                            </div>
                        </div>
                        <div className="sh-smrp-mp-pn2">
                            <div className="sh-smrp-mp-pn1">
                                <p>3.80</p>
                            </div>
                        </div>
                        <div className="sh-smrp-amnt-pn2">
                            <div className="sh-smrp-amnt-pn1">
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smr-participants-name">
                        <div className="sh-smrp-pn2">
                            <div className="sh-smrp-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smrp-kill-pn2">
                            <div className="sh-smrp-kill-pn1">
                                <p>30</p>
                            </div>
                        </div>
                        <div className="sh-smrp-mp-pn2">
                            <div className="sh-smrp-mp-pn1">
                                <p>3.80</p>
                            </div>
                        </div>
                        <div className="sh-smrp-amnt-pn2">
                            <div className="sh-smrp-amnt-pn1">
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smr-participants-name">
                        <div className="sh-smrp-pn2">
                            <div className="sh-smrp-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smrp-kill-pn2">
                            <div className="sh-smrp-kill-pn1">
                                <p>30</p>
                            </div>
                        </div>
                        <div className="sh-smrp-mp-pn2">
                            <div className="sh-smrp-mp-pn1">
                                <p>3.80</p>
                            </div>
                        </div>
                        <div className="sh-smrp-amnt-pn2">
                            <div className="sh-smrp-amnt-pn1">
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smr-participants-name">
                        <div className="sh-smrp-pn2">
                            <div className="sh-smrp-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smrp-kill-pn2">
                            <div className="sh-smrp-kill-pn1">
                                <p>30</p>
                            </div>
                        </div>
                        <div className="sh-smrp-mp-pn2">
                            <div className="sh-smrp-mp-pn1">
                                <p>3.80</p>
                            </div>
                        </div>
                        <div className="sh-smrp-amnt-pn2">
                            <div className="sh-smrp-amnt-pn1">
                                <p>1,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Duo Match Results === */}
                <div className="sh-smr-registered-player-section">
                    <div className="sh-smr-rpp3">
                        <div className="sh-smr-rpp2">
                            <div className="sh-smr-rpp1">
                                <span> <FontAwesomeIcon icon={faTrophy} /></span>
                                <h1>WINNER</h1>
                                <span> <FontAwesomeIcon icon={faTrophy} /> </span>
                            </div>
                        </div>
                    </div>
                    {/* === SOLO PARITCIPANTS === */}
                    <div className="sh-smr-participants-name">
                        <div className="sh-smr-pn2">
                            <div className="sh-smr-pn1">
                                <p>Player Name</p>
                            </div>
                        </div>
                        <div className="sh-smr-kill-pn2">
                            <div className="sh-smr-kill-pn1">
                                <p>Kills</p>
                            </div>
                        </div>
                        <div className="sh-smr-mp-pn2">
                            <div className="sh-smr-mp-pn1">
                                <p>M.P</p>
                            </div>
                        </div>
                        <div className="sh-smr-amnt-pn2">
                            <div className="sh-smr-amnt-pn1">
                                <p>Amount</p>
                            </div>
                        </div>
                    </div>
                    {/* === Duo Player Container === */}
                    <div className="sh-duo-container">
                        <div className="sh-smr-duo-participants-name">
                            <div className="sh-smrp-pn2">
                                <div className="sh-smrp-pn1">
                                    <p>Team 01</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smr-participants-name">
                            <div className="sh-smrp-pn2">
                                <div className="sh-smrp-pn1">
                                    <p>Subas Hembrom</p>
                                </div>
                            </div>
                            <div className="sh-smrp-kill-pn2">
                                <div className="sh-smrp-kill-pn1">
                                    <p>30</p>
                                </div>
                            </div>
                            <div className="sh-smrp-mp-pn2">
                                <div className="sh-smrp-mp-pn1">
                                    <p>3.80</p>
                                </div>
                            </div>
                            <div className="sh-smrp-amnt-pn2">
                                <div className="sh-smrp-amnt-pn1">
                                    <p>1,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smr-participants-name">
                            <div className="sh-smrp-pn2">
                                <div className="sh-smrp-pn1">
                                    <p>Subas Hembrom</p>
                                </div>
                            </div>
                            <div className="sh-smrp-kill-pn2">
                                <div className="sh-smrp-kill-pn1">
                                    <p>30</p>
                                </div>
                            </div>
                            <div className="sh-smrp-mp-pn2">
                                <div className="sh-smrp-mp-pn1">
                                    <p>3.80</p>
                                </div>
                            </div>
                            <div className="sh-smrp-amnt-pn2">
                                <div className="sh-smrp-amnt-pn1">
                                    <p>1,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smr-participants-name">
                            <div className="sh-smrp-pn2">
                                <div className="sh-smrp-pn1">
                                    <p>Team Name</p>
                                </div>
                            </div>
                            <div className="sh-smrp-kill-pn2">
                                <div className="sh-smrp-kill-pn1">
                                    <p>60</p>
                                </div>
                            </div>
                            <div className="sh-smrp-mp-pn2">
                                <div className="sh-smrp-mp-pn1">
                                    <p>6</p>
                                </div>
                            </div>
                            <div className="sh-smrp-amnt-pn2">
                                <div className="sh-smrp-amnt-pn1">
                                    <p>2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sh-duo-container">
                        <div className="sh-smr-duo-participants-name">
                            <div className="sh-smrp-pn2">
                                <div className="sh-smrp-pn1">
                                    <p>Team 02</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smr-participants-name">
                            <div className="sh-smrp-pn2">
                                <div className="sh-smrp-pn1">
                                    <p>Subas Hembrom</p>
                                </div>
                            </div>
                            <div className="sh-smrp-kill-pn2">
                                <div className="sh-smrp-kill-pn1">
                                    <p>30</p>
                                </div>
                            </div>
                            <div className="sh-smrp-mp-pn2">
                                <div className="sh-smrp-mp-pn1">
                                    <p>3.80</p>
                                </div>
                            </div>
                            <div className="sh-smrp-amnt-pn2">
                                <div className="sh-smrp-amnt-pn1">
                                    <p>1,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smr-participants-name">
                            <div className="sh-smrp-pn2">
                                <div className="sh-smrp-pn1">
                                    <p>Subas Hembrom</p>
                                </div>
                            </div>
                            <div className="sh-smrp-kill-pn2">
                                <div className="sh-smrp-kill-pn1">
                                    <p>30</p>
                                </div>
                            </div>
                            <div className="sh-smrp-mp-pn2">
                                <div className="sh-smrp-mp-pn1">
                                    <p>3.80</p>
                                </div>
                            </div>
                            <div className="sh-smrp-amnt-pn2">
                                <div className="sh-smrp-amnt-pn1">
                                    <p>1,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smr-participants-name">
                            <div className="sh-smrp-pn2">
                                <div className="sh-smrp-pn1">
                                    <p>Team Name</p>
                                </div>
                            </div>
                            <div className="sh-smrp-kill-pn2">
                                <div className="sh-smrp-kill-pn1">
                                    <p>60</p>
                                </div>
                            </div>
                            <div className="sh-smrp-mp-pn2">
                                <div className="sh-smrp-mp-pn1">
                                    <p>6</p>
                                </div>
                            </div>
                            <div className="sh-smrp-amnt-pn2">
                                <div className="sh-smrp-amnt-pn1">
                                    <p>2,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchResults;