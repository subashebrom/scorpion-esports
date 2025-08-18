import { NavLink } from "react-router";
import "../assets/css/pages/Results.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const Results = () => {
    return (
        <div className="sh-result-main-section">
            <div className="sh-result-container">
                <div className="sh-result-category-btn3">
                    <div className="sh-result-category-btn2">
                        <NavLink to='/' className="sh-result-category-btn1">
                            <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                            <div><h1>TODAY'S BR MATCHES</h1> </div>
                        </NavLink>
                    </div>
                </div>
                {/* === Results Category Buttons === */}
                <div className="sh-result-category-btn-section">
                    <div className="sh-hvr-btn">
                        <div className="sh-result-btn">
                            <h1 className="sh-category-btns">BR Match</h1>
                        </div>
                        <div className="sh-result-hvr-btnt"></div>
                        <div className="sh-result-hvr-btnb"></div>
                    </div>
                    <div className="sh-hvr-btn">
                        <div className="sh-result-btn">
                            <h1 className="sh-category-btns">Class Squad</h1>
                        </div>
                        <div className="sh-result-hvr-btnt"></div>
                        <div className="sh-result-hvr-btnb"></div>
                    </div>
                    <div className="sh-hvr-btn">
                        <div className="sh-result-btn">
                            <h1 className="sh-category-btns">CS 1v1 & 2v2</h1>
                        </div>
                        <div className="sh-result-hvr-btnt"></div>
                        <div className="sh-result-hvr-btnb"></div>
                    </div>
                    <div className="sh-hvr-btn">
                        <div className="sh-result-btn">
                            <h1 className="sh-category-btns">Lone Wolf</h1>
                        </div>
                        <div className="sh-result-hvr-btnt"></div>
                        <div className="sh-result-hvr-btnb"></div>
                    </div>
                    <div className="sh-hvr-btn">
                        <div className="sh-result-btn">
                            <h1 className="sh-category-btns">Free Match</h1>
                        </div>
                        <div className="sh-result-hvr-btnt"></div>
                        <div className="sh-result-hvr-btnb"></div>
                    </div>
                    <div className="sh-hvr-btn">
                        <div className="sh-result-btn">
                            <h1 className="sh-category-btns">E-Sports</h1>
                        </div>
                        <div className="sh-result-hvr-btnt"></div>
                        <div className="sh-result-hvr-btnb"></div>
                    </div>
                    <div className="sh-hvr-btn">
                        <div className="sh-result-btn">
                            <h1 className="sh-category-btns">Custom</h1>
                        </div>
                        <div className="sh-result-hvr-btnt"></div>
                        <div className="sh-result-hvr-btnb"></div>
                    </div>
                </div>
                {/* === Result Mathces cards === */}
                <div className="sh-result-matches-cards-section">
                    {/* === Card === */}
                    <div className="sh-result-card">
                        {/* === Title Box === */}
                        <div className="sh-result-taile">
                            {/* === Macth card image === */}
                            <div className="sh-result-match-image">
                                <img src="/public/images/free-fire.jpg" alt="" />
                            </div>
                            {/* === Text Details === */}
                            <div className="sh-result-text-details">
                                <h1>SOLO | MOBILE | REGULAR</h1>
                                {/* === Real time & date === */}
                                <input type="datetime-local" />
                            </div>
                        </div>
                        {/* === Match Entry Details === */}
                        <div className="sh-result-entry-details">
                            <div className="sh-result-details1">
                                <h1 className="sh-result-win">Win Prize</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">800 TK</p>
                                </div>
                            </div>
                            <div className="sh-result-details1">
                                <h1 className="sh-result-kill">Per Kill</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">10 TK</p>
                                </div>
                            </div>
                            <div className="sh-result-details1">
                                <h1 className="sh-result-fee">Entry Fee</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">20 TK</p>
                                </div>
                            </div>
                        </div>
                        {/* === Type Section === */}
                        <div className="sh-result-type-section">
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>ENTRY TYPE</p>
                                    <p>Solo</p>
                                </div>
                            </div>
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>MAP</p>
                                    <p>Barmuda</p>
                                </div>
                            </div>
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>VERSION</p>
                                    <p>Mobile</p>
                                </div>
                            </div>
                        </div>
                        {/* === Match Details === */}
                        <div className="sh-result-details-section">
                            <NavLink to='/match-results' className="sh-result-details-box1">
                                <div className="sh-result-details-box">
                                    <p>Match Result</p>
                                </div>
                            </NavLink>
                        </div>
                        {/* === BR MATCH NUMBERING === */}
                        <div className="sh-brm-numbering-card"><span>#1130</span></div>
                    </div>
                    {/* === Card === */}
                    <div className="sh-result-card">
                        {/* === Title Box === */}
                        <div className="sh-result-taile">
                            {/* === Macth card image === */}
                            <div className="sh-result-match-image">
                                <img src="/public/images/free-fire.jpg" alt="" />
                            </div>
                            {/* === Text Details === */}
                            <div className="sh-result-text-details">
                                <h1>DUO | MOBILE | REGULAR</h1>
                                {/* === Real time & date === */}
                                <input type="datetime-local" />
                            </div>
                        </div>
                        {/* === Match Entry Details === */}
                        <div className="sh-result-entry-details">
                            <div className="sh-result-details1">
                                <h1 className="sh-result-win">Win Prize</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">800 TK</p>
                                </div>
                            </div>
                            <div className="sh-result-details1">
                                <h1 className="sh-result-kill">Per Kill</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">10 TK</p>
                                </div>
                            </div>
                            <div className="sh-result-details1">
                                <h1 className="sh-result-fee">Entry Fee</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">20 TK</p>
                                </div>
                            </div>
                        </div>
                        {/* === Type Section === */}
                        <div className="sh-result-type-section">
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>ENTRY TYPE</p>
                                    <p>Duo</p>
                                </div>
                            </div>
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>MAP</p>
                                    <p>Barmuda</p>
                                </div>
                            </div>
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>VERSION</p>
                                    <p>Mobile</p>
                                </div>
                            </div>
                        </div>
                        {/* === Match Details === */}
                        <div className="sh-result-details-section">
                            <NavLink to='/match-results' className="sh-result-details-box1">
                                <div className="sh-result-details-box">
                                    <p>Match Result</p>
                                </div>
                            </NavLink>
                        </div>
                        {/* === BR MATCH NUMBERING === */}
                        <div className="sh-brm-numbering-card"><span>#1130</span></div>
                    </div>
                    {/* === Card === */}
                    <div className="sh-result-card">
                        {/* === Title Box === */}
                        <div className="sh-result-taile">
                            {/* === Macth card image === */}
                            <div className="sh-result-match-image">
                                <img src="/public/images/free-fire.jpg" alt="" />
                            </div>
                            {/* === Text Details === */}
                            <div className="sh-result-text-details">
                                <h1>SQUAD | MOBILE | REGULAR</h1>
                                {/* === Real time & date === */}
                                <input type="datetime-local" />
                            </div>
                        </div>
                        {/* === Match Entry Details === */}
                        <div className="sh-result-entry-details">
                            <div className="sh-result-details1">
                                <h1 className="sh-result-win">Win Prize</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">800 TK</p>
                                </div>
                            </div>
                            <div className="sh-result-details1">
                                <h1 className="sh-result-kill">Per Kill</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">10 TK</p>
                                </div>
                            </div>
                            <div className="sh-result-details1">
                                <h1 className="sh-result-fee">Entry Fee</h1>
                                <div className="sh-result-tk2">
                                    <p className="sh-result-tk">20 TK</p>
                                </div>
                            </div>
                        </div>
                        {/* === Type Section === */}
                        <div className="sh-result-type-section">
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>ENTRY TYPE</p>
                                    <p>Squad</p>
                                </div>
                            </div>
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>MAP</p>
                                    <p>Barmuda</p>
                                </div>
                            </div>
                            <div className="sh-result-type-box1">
                                <div className="sh-result-type-box">
                                    <p>VERSION</p>
                                    <p>Mobile</p>
                                </div>
                            </div>
                        </div>
                        {/* === Match Details === */}
                        <div className="sh-result-details-section">
                            <NavLink to='/match-results' className="sh-result-details-box1">
                                <div className="sh-result-details-box">
                                    <p>Match Result</p>
                                </div>
                            </NavLink>
                        </div>
                        {/* === BR MATCH NUMBERING === */}
                        <div className="sh-brm-numbering-card"><span>#1130</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Results;