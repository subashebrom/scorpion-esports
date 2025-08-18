import { NavLink } from "react-router";
import "../assets/css/pages/Rules.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
const Rules = () => {
    return (
        <div className="sh-rules-main-section">
            <div className="sh-rules-container">
                <div className="sh-rules-category-btn3">
                    <div className="sh-rules-category-btn2">
                        <NavLink to='/profile' className="sh-rules-category-btn1">
                            <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                            <NavLink to='/profile'><h1>App Rules</h1> </NavLink>
                        </NavLink>
                    </div>
                </div>
                {/* === ruless Category Buttons === */}
                <div className="sh-rules-category-btn-section">
                    <div className="sh-rhvr-btn">
                        <div className="sh-rules-btn">
                            <h1 className="sh-category-btns">BR Match</h1>
                        </div>
                        <div className="sh-rules-rhvr-btnt"></div>
                        <div className="sh-rules-rhvr-btnb"></div>
                    </div>
                    <div className="sh-rhvr-btn">
                        <div className="sh-rules-btn">
                            <h1 className="sh-category-btns">Class Squad</h1>
                        </div>
                        <div className="sh-rules-rhvr-btnt"></div>
                        <div className="sh-rules-rhvr-btnb"></div>
                    </div>
                    <div className="sh-rhvr-btn">
                        <div className="sh-rules-btn">
                            <h1 className="sh-category-btns">CS 1v1 & 2v2</h1>
                        </div>
                        <div className="sh-rules-rhvr-btnt"></div>
                        <div className="sh-rules-rhvr-btnb"></div>
                    </div>
                    <div className="sh-rhvr-btn">
                        <div className="sh-rules-btn">
                            <h1 className="sh-category-btns">Lone Wolf</h1>
                        </div>
                        <div className="sh-rules-rhvr-btnt"></div>
                        <div className="sh-rules-rhvr-btnb"></div>
                    </div>
                    <div className="sh-rhvr-btn">
                        <div className="sh-rules-btn">
                            <h1 className="sh-category-btns">Free Match</h1>
                        </div>
                        <div className="sh-rules-rhvr-btnt"></div>
                        <div className="sh-rules-rhvr-btnb"></div>
                    </div>
                    <div className="sh-rhvr-btn">
                        <div className="sh-rules-btn">
                            <h1 className="sh-category-btns">E-Sports</h1>
                        </div>
                        <div className="sh-rules-rhvr-btnt"></div>
                        <div className="sh-rules-rhvr-btnb"></div>
                    </div>
                    <div className="sh-rhvr-btn">
                        <div className="sh-rules-btn">
                            <h1 className="sh-category-btns">Custom</h1>
                        </div>
                        <div className="sh-rules-rhvr-btnt"></div>
                        <div className="sh-rules-rhvr-btnb"></div>
                    </div>
                </div>
                {/* === Rules Section === */}
                <div className="sh-rules3">
                    <div className="sh-rules2">
                        <div className="sh-rules1">
                            <span> <FontAwesomeIcon icon={faScaleBalanced} /></span>
                            <h1>Full Map Rule's</h1>
                            <span> <FontAwesomeIcon icon={faScaleBalanced} /> </span>
                        </div>
                    </div>
                </div>
                <div className="sh-all-rules-con">
                    <p>Here our goes rules section</p>
                </div>
            </div>
        </div>
    );
};

export default Rules;