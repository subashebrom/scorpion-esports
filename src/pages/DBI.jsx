import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/pages/DBI.css"
import { faBangladeshiTakaSign, faChevronLeft, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
const DBI = () => {
    return (
        <div className="sh-dbi-main-section">
            <div className="sh-dbi-container">
                <div className="sh-dbi-category-btn3">
                    <div className="sh-dbi-category-btn2">
                        <div className="sh-dbi-category-btn1">
                            <span> <FontAwesomeIcon icon={faChevronLeft} /></span>
                            <NavLink to=''>Profile</NavLink>
                        </div>
                    </div>
                </div>
                {/* === DBI Card Section === */}
                <div className="sh-dbi-card-section">
                    <div className="sh-dbi-category-btn2">
                        <div className="sh-dbi">
                            <h1>Deposit By Income</h1>
                            <span><b><FontAwesomeIcon icon={faBangladeshiTakaSign}/><strong>1,000 TK</strong></b></span>
                        </div>
                    </div>
                    {/* === Amount === */}
                    <div className="sh-dbi-amount">
                        <span><FontAwesomeIcon icon={faHandHoldingDollar}/></span>
                        <input type="text" placeholder="Enter Amount (BDT)" required/>
                    </div>
                    {/* === Submit btn === */}
                    <div className="sh-submit-btn">
                        <input className="sh-submit" type="submit" value="Submit Data" required  />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DBI;