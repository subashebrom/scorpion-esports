import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faScaleBalanced, faUsers } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/pages/MatchDetails.css"
import { NavLink } from "react-router";

const MatchDetails = () => {
    return (
        <div className='sh-md-main-section'>
            <div className="sh-md-container">
                <div className="sh-md-category-btn3">
                    <div className="sh-md-category-btn2">
                        <NavLink to='/br-matches' className="sh-md-category-btn1">
                            <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                            <div><h1>MATCH DETAIL'S</h1> </div>
                        </NavLink>
                    </div>
                </div>
                {/* === SOLO MATCH DETAILS SECTION === */}
                <div className="solo-match-details-section">
                    <div className="sh-smd-card-container">
                        <div className="sh-solo-md-card">
                            <div className="sh-smd-card2">
                                <div className="sh-md-category-2btn3">
                                    <div className="sh-md-category-btn2">
                                        <div className="sh-md-category-btn1">
                                            <NavLink to=''><h1>SOLO | MOBILE | REGULAR</h1> </NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* === SMD TYPE SECTION === */}
                                <div className="sh-smd-type-section">
                                    <div className="sh-smd-type-box1">
                                        <div className="sh-smd-type-box2">
                                            <p>Type: Solo</p>
                                        </div>
                                    </div>
                                    <div className="sh-smd-type-box1">
                                        <div className="sh-smd-type-box2">
                                            <p>Map: Barmuda</p>
                                        </div>
                                    </div>
                                    <div className="sh-smd-type-box1">
                                        <div className="sh-smd-type-box2">
                                            <p>Version: Mobile</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sh-smd-type-section-two">
                                    <div className="sh-smd-type-box1">
                                        <div className="sh-smd-type-box2">
                                            <p>Type: Solo</p>
                                        </div>
                                    </div>
                                    <div className="sh-smd-type-box1">
                                        <div className="sh-smd-type-box2">
                                            <p>Map: Barmuda</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sh-smd-type-box-last1">
                                    <div className="sh-smd-type-box-last">
                                        <p>Match Schedule: 09-08-2025 at 04:30 am</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sh-smd-prize-card2">
                                <div className="sh-md-category-2btn3">
                                    <div className="sh-md-category-btn2">
                                        <div className="sh-md-category-btn1">
                                            <NavLink to=''><h1>PRIZE DETAILS</h1> </NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* === SMD TYPE SECTION === */}
                                <div className="sh-smd-type-section-two">
                                    <div className="sh-smd-type-box1">
                                        <div className="sh-smd-type-box2">
                                            <p>Type: Solo</p>
                                        </div>
                                    </div>
                                    <div className="sh-smd-type-box1">
                                        <div className="sh-smd-type-box2">
                                            <p>Map: Barmuda</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* === smd notice === */}
                    <div className="smd-notice-box">
                        <p>Room details will be shared before 5-10 minutes of match start time</p>
                    </div>
                </div>
                <div className="sh-md-category-btn3">
                    <div className="sh-md-category-btn2">
                        <div className="sh-md-category-btn1">
                            <NavLink to=''><h1>MATCH INSTRUCTION & RULES</h1> </NavLink>
                        </div>
                    </div>
                </div>
                <div className="sh-smd-rules3">
                    <div className="sh-smd-rules2">
                        <div className="sh-smd-rules1">
                            <span> <FontAwesomeIcon icon={faScaleBalanced} /></span>
                            <h1>Full Map Rule's</h1>
                            <span> <FontAwesomeIcon icon={faScaleBalanced} /> </span>
                        </div>
                    </div>
                </div>
                {/* === HERE OUR RULES SECTION === */}
                <div className="sh-smd-rules-section">
                    <h1>Here our goes rules</h1>
                </div>
                {/* === Solo Registered Partcipants Section === */}
                <div className="sh-smd-registered-player-section">
                    <div className="sh-smd-rpp3">
                        <div className="sh-smd-rpp2">
                            <div className="sh-smd-rpp1">
                                <span> <FontAwesomeIcon icon={faUsers} /></span>
                                <h1>Registered Participants</h1>
                                <span> <FontAwesomeIcon icon={faUsers} /> </span>
                            </div>
                        </div>
                    </div>
                    {/* === SOLO PARITCIPANTS === */}
                    <div className="sh-smd-participants-name">
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Addro bhai</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Ruddro bhai</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Duo Registered Partcipants Section === */}
                <div className="sh-smd-registered-player-section">
                    <div className="sh-smd-rpp3">
                        <div className="sh-smd-rpp2">
                            <div className="sh-smd-rpp1">
                                <span> <FontAwesomeIcon icon={faUsers} /></span>
                                <h1>Registered Pariticipants</h1>
                                <span> <FontAwesomeIcon icon={faUsers} /> </span>
                            </div>
                        </div>
                    </div>
                    {/* === SOLO PARITCIPANTS === */}
                    <div className="sh-smd-participants-name">
                        <div className="sh-sdm-duo-team">
                            <div className="sh-sdm-duo-team-num1">
                                <div className="sh-sdm-duo-team-num2">
                                    <p>Team: 01</p>
                                </div>
                            </div>
                            <div className="sh-sdm-duo-team-name1">
                                <div className="sh-sdm-duo-team-name2">
                                    <p>Gamer team name</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Addro bhai</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smd-participants-name">
                        <div className="sh-sdm-duo-team">
                            <div className="sh-sdm-duo-team-num1">
                                <div className="sh-sdm-duo-team-num2">
                                    <p>Team: 02</p>
                                </div>
                            </div>
                            <div className="sh-sdm-duo-team-name1">
                                <div className="sh-sdm-duo-team-name2">
                                    <p>Gamer team name</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Ruddro bhai</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Squad Registered Partcipants Section === */}
                <div className="sh-smd-registered-player-section">
                    <div className="sh-smd-rpp3">
                        <div className="sh-smd-rpp2">
                            <div className="sh-smd-rpp1">
                                <span> <FontAwesomeIcon icon={faUsers} /></span>
                                <h1>Registered Pariticipants</h1>
                                <span> <FontAwesomeIcon icon={faUsers} /> </span>
                            </div>
                        </div>
                    </div>
                    {/* === SOLO PARITCIPANTS === */}
                    <div className="sh-smd-participants-name">
                        <div className="sh-sdm-duo-team">
                            <div className="sh-sdm-duo-team-num1">
                                <div className="sh-sdm-duo-team-num2">
                                    <p>Team: 01</p>
                                </div>
                            </div>
                            <div className="sh-sdm-duo-team-name1">
                                <div className="sh-sdm-duo-team-name2">
                                    <p>Gamer team name</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Addro bhai</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Addro bhai</p>
                            </div>
                        </div>
                    </div>
                    <div className="sh-smd-participants-name">
                        <div className="sh-sdm-duo-team">
                            <div className="sh-sdm-duo-team-num1">
                                <div className="sh-sdm-duo-team-num2">
                                    <p>Team: 02</p>
                                </div>
                            </div>
                            <div className="sh-sdm-duo-team-name1">
                                <div className="sh-sdm-duo-team-name2">
                                    <p>Gamer team name</p>
                                </div>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Ruddro bhai</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Ruddro bhai</p>
                            </div>
                        </div>
                        <div className="sh-smd-pn2">
                            <div className="sh-smd-pn1">
                                <p>Subas Hembrom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;