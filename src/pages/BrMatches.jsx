import { NavLink } from "react-router";
import "../assets/css/pages/BrMatches.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const BrMatches = () => {
    // prize details modal
    const openModal = () => {
        document.querySelector(".prize-modal-con").style.display = "flex";
    }
    const closeModal = () => {
        document.querySelector(".prize-modal-con").style.display = "none";
    }
    return (
        <div className="sh-my-matches-main-section">
            <div className="sh-br-container">
                <div className="sh-br-category-btn3">
                    <div className="sh-br-category-btn2">
                        <NavLink to='/' className="sh-br-category-btn1">
                            <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                            <div><h1>TODAY'S BR MATCHE'S</h1> </div>
                        </NavLink>
                    </div>
                </div>
                {/* === BR Mathces cards === */}
                <div className="sh-br-matches-cards-section">
                    {/* === Card === */}
                    <div className="sh-brm-card">
                        {/* === Title Box === */}
                        <div className="sh-brm-taile">
                            {/* === Macth card image === */}
                            <div className="sh-brm-match-image">
                                <img src="./images/free-fire.jpg" alt="" />
                            </div>
                            {/* === Text Details === */}
                            <div className="sh-brm-text-details">
                                <h1>SOLO | MOBILE | REGULAR</h1>
                                {/* === Real time & date === */}
                                <input className="sh-brm-time" type="datetime-local" />
                            </div>
                        </div>
                        {/* === Match Entry Details === */}
                        <div className="sh-brm-entry-details">
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-win">Win Prize</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">800 TK</p>
                                </div>
                            </div>
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-kill">Per Kill</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">10 TK</p>
                                </div>
                            </div>
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-fee">Entry Fee</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">20 TK</p>
                                </div>
                            </div>
                        </div>
                        {/* === Type Section === */}
                        <div className="sh-brm-type-section">
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>ENTRY TYPE</p>
                                    <p>Solo</p>
                                </div>
                            </div>
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>MAP</p>
                                    <p>Barmuda</p>
                                </div>
                            </div>
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>VERSION</p>
                                    <p>Mobile</p>
                                </div>
                            </div>
                        </div>
                        {/* === Joining Section === */}
                        <div className="sh-brm-joining-section">
                            {/* === Progress bar === */}
                            <div className="progress-bar">
                                <div className="sh-bar">
                                    <div className="sh-bar2">
                                        <div className="sh-bar1"></div>
                                    </div>
                                </div>
                                {/* === Counter === */}
                                <div className="sh-brm-joinig-counter">
                                    <p>Only 4 spots are left</p>
                                    <p>44/48</p>
                                </div>
                            </div>
                            {/* === Join Button === */}
                            <NavLink to='/match-join' className="sh-joining-box1">
                                <div className="sh-joning-box"><h2>Join</h2></div>
                            </NavLink>
                        </div>
                        {/* === Match Details === */}
                        <div className="sh-brm-details-section">
                            <NavLink to='' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box">
                                    <p>Room Details</p>
                                </div>
                            </NavLink>
                            <NavLink to='/match-details' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box">
                                    <p>Details</p>
                                </div>
                            </NavLink>
                            <NavLink to='' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box modal-parent" onClick={openModal} id="prizeModalOpen">
                                    <p>Prize Details</p>
                                </div>
                            </NavLink>
                            <div className="prize-modal-con">
                                <div className="pd-modal">
                                    <div className="pdm-close-btn" onClick={closeModal} id="prizeModalClose">
                                        <i class="fa-solid fa-xmark"></i>
                                    </div>
                                    <div className="pdm-content">
                                        <div className="pdm-c-heading">
                                            <h3>TOTAL PRIZE</h3>
                                            <h4>Match Name</h4>
                                        </div>
                                        <div className="pdm-c-details">
                                            <ul>
                                                <li><i class="fa-solid fa-crown"></i>Winner - 1000 TK</li>
                                                <li><i class="fa-solid fa-trophy"></i>2nd Position - 1000 TK</li>
                                                <li><i class="fa-solid fa-medal"></i>3rd Position - 1000 TK</li>
                                                <li><i class="fa-solid fa-medal"></i>4th Position - 1000 TK</li>
                                                <li><i class="fa-solid fa-medal"></i>5th Position - 1000 TK</li>
                                                <li><i class="fa-solid fa-skull"></i>Per Kills - 20 TK</li>
                                                <li><i class="fa-solid fa-money-bill-wave"></i>Total Prize Pool - 1000 TK</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* === BR MATCH NUMBERING === */}
                        <div className="sh-brm-numbering-card"><span>#1130</span></div>
                        {/* === Timer box === */}
                        <div className="sh-brm-timer-box">
                            <input className="sh-starting-time" type="datetime-local" />
                        </div>
                    </div>
                    {/* === Card === */}
                    <div className="sh-brm-card">
                        {/* === Title Box === */}
                        <div className="sh-brm-taile">
                            {/* === Macth card image === */}
                            <div className="sh-brm-match-image">
                                <img src="./images/free-fire.jpg" alt="" />
                            </div>
                            {/* === Text Details === */}
                            <div className="sh-brm-text-details">
                                <h1>DUO | MOBILE | REGULAR</h1>
                                {/* === Real time & date === */}
                                <input className="sh-brm-time" type="datetime-local" />
                            </div>
                        </div>
                        {/* === Match Entry Details === */}
                        <div className="sh-brm-entry-details">
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-win">Win Prize</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">800 TK</p>
                                </div>
                            </div>
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-kill">Per Kill</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">10 TK</p>
                                </div>
                            </div>
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-fee">Entry Fee</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">20 TK</p>
                                </div>
                            </div>
                        </div>
                        {/* === Type Section === */}
                        <div className="sh-brm-type-section">
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>ENTRY TYPE</p>
                                    <p>Duo</p>
                                </div>
                            </div>
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>MAP</p>
                                    <p>Barmuda</p>
                                </div>
                            </div>
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>VERSION</p>
                                    <p>Mobile</p>
                                </div>
                            </div>
                        </div>
                        {/* === Joining Section === */}
                        <div className="sh-brm-joining-section">
                            {/* === Progress bar === */}
                            <div className="progress-bar">
                                <div className="sh-bar">
                                    <div className="sh-bar2">
                                        <div className="sh-bar1"></div>
                                    </div>
                                </div>
                                {/* === Counter === */}
                                <div className="sh-brm-joinig-counter">
                                    <p>Only 4 spots are left</p>
                                    <p>44/48</p>
                                </div>
                            </div>
                            {/* === Join Button === */}
                            <NavLink to='/match-join' className="sh-joining-box1">
                                <div className="sh-joning-box"><h2>Join</h2></div>
                            </NavLink>
                        </div>
                        {/* === Match Details === */}
                        <div className="sh-brm-details-section">
                            <NavLink to='' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box">
                                    <p>Room Details</p>
                                </div>
                            </NavLink>
                            <NavLink to='/match-details' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box">
                                    <p>Details</p>
                                </div>
                            </NavLink>
                            <NavLink to='' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box">
                                    <p>Prize Details</p>
                                </div>
                            </NavLink>
                        </div>
                        {/* === BR MATCH NUMBERING === */}
                        <div className="sh-brm-numbering-card"><span>#1130</span></div>
                        {/* === Timer box === */}
                        <div className="sh-brm-timer-box">
                            <input className="sh-starting-time" type="datetime-local" />
                        </div>
                    </div>
                    {/* === Card === */}
                    <div className="sh-brm-card">
                        {/* === Title Box === */}
                        <div className="sh-brm-taile">
                            {/* === Macth card image === */}
                            <div className="sh-brm-match-image">
                                <img src="./images/free-fire.jpg" alt="" />
                            </div>
                            {/* === Text Details === */}
                            <div className="sh-brm-text-details">
                                <h1>SQUAD | MOBILE | REGULAR</h1>
                                {/* === Real time & date === */}
                                <input className="sh-brm-time" type="datetime-local" />
                            </div>
                        </div>
                        {/* === Match Entry Details === */}
                        <div className="sh-brm-entry-details">
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-win">Win Prize</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">800 TK</p>
                                </div>
                            </div>
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-kill">Per Kill</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">10 TK</p>
                                </div>
                            </div>
                            <div className="sh-brm-details1">
                                <h1 className="sh-brm-fee">Entry Fee</h1>
                                <div className="sh-brm-tk2">
                                    <p className="sh-brm-tk">20 TK</p>
                                </div>
                            </div>
                        </div>
                        {/* === Type Section === */}
                        <div className="sh-brm-type-section">
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>ENTRY TYPE</p>
                                    <p>Squad</p>
                                </div>
                            </div>
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>MAP</p>
                                    <p>Barmuda</p>
                                </div>
                            </div>
                            <div className="sh-brm-type-box1">
                                <div className="sh-brm-type-box">
                                    <p>VERSION</p>
                                    <p>Mobile</p>
                                </div>
                            </div>
                        </div>
                        {/* === Joining Section === */}
                        <div className="sh-brm-joining-section">
                            {/* === Progress bar === */}
                            <div className="progress-bar">
                                <div className="sh-bar">
                                    <div className="sh-bar2">
                                        <div className="sh-bar1"></div>
                                    </div>
                                </div>
                                {/* === Counter === */}
                                <div className="sh-brm-joinig-counter">
                                    <p>Only 4 spots are left</p>
                                    <p>44/48</p>
                                </div>
                            </div>
                            {/* === Join Button === */}
                            <NavLink to='/match-join' className="sh-joining-box1">
                                <div className="sh-joning-box"><h2>Join</h2></div>
                            </NavLink>
                        </div>
                        {/* === Match Details === */}
                        <div className="sh-brm-details-section">
                            <NavLink to='' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box">
                                    <p>Room Details</p>
                                </div>
                            </NavLink>
                            <NavLink to='/match-details' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box">
                                    <p>Details</p>
                                </div>
                            </NavLink>
                            <NavLink to='' className="sh-brm-details-box1">
                                <div className="sh-brm-details-box">
                                    <p>Prize Details</p>
                                </div>
                            </NavLink>
                        </div>
                        {/* === BR MATCH NUMBERING === */}
                        <div className="sh-brm-numbering-card"><span>#1130</span></div>
                        {/* === Timer box === */}
                        <div className="sh-brm-timer-box">
                            <input className="sh-starting-time" type="datetime-local" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrMatches;