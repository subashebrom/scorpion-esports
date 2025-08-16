import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/pages/Join.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router";
import "../assets/js/pages/Join"

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
                    <div className="sh-join-btn">
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>Solo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* === Name Input === */}
                    <div id="name_inpt" className="sh-join-player-name">
                        <div className="sh-jion-pn-box2">
                            <div className="sh-jion-pn-box1">
                                <input type="text" name="" id="" value="" placeholder="Enter Your Game Name"  required/>
                            </div>
                        </div>
                        <div className="sh-join-btm-triangle"></div>
                    </div>
                </div>
                {/* === Duo Joining Section === */}
                <div className="sh-joining-section">
                    <div className="sh-join-box1">
                        <div className="sh-join-box2">
                            <h1>BR Duo | Mobile | Regular</h1>
                            <p className="sh-join-date"><b>Date:</b> <input type="datetime-local" /> </p>
                            <div className="sh-join-prize">
                                <p>Win Prize : 500 TK</p>
                                <p>Entry Fee : 20 TK</p>
                            </div>
                        </div>
                    </div>
                    <p className="join-notice">*অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করবেন*</p>
                    <div className="sh-join-btn">
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>Solo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>Duo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sh-join-btn">
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>Solo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>1 V 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sh-join-team-spot">
                        <div className="sh-join-team-spot-num1">
                            <div className="sh-join-team-spot-num2">
                                <p>Team: 01</p>
                            </div>
                        </div>
                        <div className="sh-join-team-spot-name1">
                            <div className="sh-join-team-spot-name2">
                                <input type="text" id="" value="Enter Your Team name" required />
                            </div>
                        </div>
                    </div>
                    {/* === Name Input === */}
                    <div id="name_inpt" className="sh-join-player-name">
                        <div className="sh-jion-pn-box2">
                            <div className="sh-jion-pn-box1">
                                <input type="text" name="" id="" value="" placeholder="Enter Your Game Name"  required/>
                            </div>
                        </div>
                        <div className="sh-join-btm-triangle"></div>
                    </div>
                    <div id="name_inpt" className="sh-join-player-name">
                        <div className="sh-jion-pn-box2">
                            <div className="sh-jion-pn-box1">
                                <input type="text" name="" id="" value="" placeholder="Enter Your Game Name"  required/>
                            </div>
                        </div>
                        <div className="sh-join-btm-triangle"></div>
                    </div>
                </div>
                {/* === Squad Joining Section === */}
                <div className="sh-joining-section">
                    <div className="sh-join-box1">
                        <div className="sh-join-box2">
                            <h1>BR Squad | Mobile | Regular</h1>
                            <p className="sh-join-date"><b>Date:</b> <input type="datetime-local" /> </p>
                            <div className="sh-join-prize">
                                <p>Win Prize : 500 TK</p>
                                <p>Entry Fee : 20 TK</p>
                            </div>
                        </div>
                    </div>
                    <p className="join-notice">*অবশ্যই এখানে আপনার গেমের নামটি দিয়ে জয়েন করবেন*</p>
                    <div className="sh-join-btn">
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>Solo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>Duo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>Squad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sh-join-btn">
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>Duo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="show_inpt" className="sh-joining">
                            <div className="sh-join-btn-box3">
                                <div className="sh-join-btn-box2">
                                    <div className="sh-join-btn-box1">
                                        <p>2 V 4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sh-join-team-spot">
                        <div className="sh-join-team-spot-num1">
                            <div className="sh-join-team-spot-num2">
                                <p>Team: 01</p>
                            </div>
                        </div>
                        <div className="sh-join-team-spot-name1">
                            <div className="sh-join-team-spot-name2">
                                <input type="text" id="" value="Enter Your Team name" required />
                            </div>
                        </div>
                    </div>
                    {/* === Name Input === */}
                    <div id="name_inpt" className="sh-join-player-name">
                        <div className="sh-jion-pn-box2">
                            <div className="sh-jion-pn-box1">
                                <input type="text" name="" id="" value="" placeholder="Enter Your Game Name"  required/>
                            </div>
                        </div>
                        <div className="sh-join-btm-triangle"></div>
                    </div>
                    <div id="name_inpt" className="sh-join-player-name">
                        <div className="sh-jion-pn-box2">
                            <div className="sh-jion-pn-box1">
                                <input type="text" name="" id="" value="" placeholder="Enter Your Game Name"  required/>
                            </div>
                        </div>
                        <div className="sh-join-btm-triangle"></div>
                    </div>
                    <div id="name_inpt" className="sh-join-player-name">
                        <div className="sh-jion-pn-box2">
                            <div className="sh-jion-pn-box1">
                                <input type="text" name="" id="" value="" placeholder="Enter Your Game Name"  required/>
                            </div>
                        </div>
                        <div className="sh-join-btm-triangle"></div>
                    </div>
                    <div id="name_inpt" className="sh-join-player-name">
                        <div className="sh-jion-pn-box2">
                            <div className="sh-jion-pn-box1">
                                <input type="text" name="" id="" value="" placeholder="Enter Your Game Name"  required/>
                            </div>
                        </div>
                        <div className="sh-join-btm-triangle"></div>
                    </div>
                </div>
                {/* === Play to Join Now Button === */}
                <div className="sh-play-join-btn3">
                    <div className="sh-play-join-btn2">
                        <div className="sh-play-join-btn1">
                            <h1>Play to Join Now</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;