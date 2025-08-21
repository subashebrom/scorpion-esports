import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/pages/Profile.css"
import { faBangladeshiTakaSign, faCirclePlay, faHandHoldingDollar, faMoneyBillTransfer, faRankingStar, faScaleBalanced, faShareNodes, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

const Profile = () => {
    return (
        <div className="sh-profile-main-section">
            <div className="sh-profile-main-container">
                {/* === Profile Image and Name === */}
                <div className="sh-profile">
                    <div className="sh-pImg">
                        <img src="./images/free-fire.jpg" alt="" />
                    </div>
                    <h1>Subas Hebrom</h1>
                </div>
                {/* === Revenue Section === */}
                <div className="sh-revenue-section">
                    {/* === Deposit === */}
                    <div className="sh-pRevenue-con2">
                        <div className="sh-pRevenue-con1">
                            <h1>Total Deposit</h1>
                            <h1>BDT <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/><b>1,000 TK</b> </span> </h1>
                        </div>
                    </div>
                    {/* === Payed === */}
                    <div className="sh-pRevenue-con2">
                        <div className="sh-pRevenue-con1">
                            <h1>Total Deposit</h1>
                            <h1>BDT <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/><b>1,000 TK</b> </span> </h1>
                        </div>
                    </div>
                    {/* === Income === */}
                    <div className="sh-pRevenue-con2">
                        <div className="sh-pRevenue-con1">
                            <h1>Total Deposit</h1>
                            <h1>BDT <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/><b>1,000 TK</b> </span> </h1>
                        </div>
                    </div>
                    {/* === Withdraw === */}
                    <div className="sh-pRevenue-con2">
                        <div className="sh-pRevenue-con1">
                            <h1>Total Deposit</h1>
                            <h1>BDT <span> <FontAwesomeIcon icon={faBangladeshiTakaSign}/><b>1,000 TK</b> </span> </h1>
                        </div>
                    </div>
                </div>
                {/* === Depo & Income Section === */}
                <div className="sh-depo-income-section">
                    <div className="sh-Transaction-Btn2">
                        <NavLink to='/' className="sh-Transaction-Btn1">
                            <span> <FontAwesomeIcon icon={faHandHoldingDollar}/> </span>
                            <h1>DEPOSIT MONEY</h1>
                        </NavLink>
                    </div>
                    <NavLink to='' className="sh-Transaction-Btn2">
                        <div className="sh-Transaction-Btn1">
                            <span> <FontAwesomeIcon icon={faMoneyBillTransfer}/> </span>
                            <h1>WITHDRAW</h1>
                        </div>
                    </NavLink>
                </div>
                {/* === Deposit by money Section === */}
                <div className="sh-depo-income-wallet-section">
                    <div className="sh-Transaction-dbi-Btn2">
                        <NavLink to='/deposit-byincome' className="sh-Transaction-dbi-Btn1">
                            <span> <FontAwesomeIcon icon={faHandHoldingDollar}/> </span>
                            <h1>DEPOSIT BY INCOME</h1>
                        </NavLink>
                    </div>
                </div>
                {/* === Profile Detail Section === */}
                <div className="sh-pDetails-section">
                    <div className="sh-pd-Btn2">
                        <NavLink to='/my-profile' className="sh-pd-Btn1">
                            <span> <FontAwesomeIcon icon={faUser}/> </span>
                            <p>My Profile</p>
                        </NavLink>
                    </div>
                    <div className="sh-pd-Btn2">
                        <NavLink to='/app-rules' className="sh-pd-Btn1">
                            <span> <FontAwesomeIcon icon={faScaleBalanced}/> </span>
                            <p>Rules</p>
                        </NavLink>
                    </div>
                    <div className="sh-pd-Btn2">
                        <NavLink to='/top-players' className="sh-pd-Btn1">
                            <span> <FontAwesomeIcon icon={faRankingStar}/> </span>
                            <p>Top Players</p>
                        </NavLink>
                    </div>
                </div>
                {/* === Help Section === */}
                <div className="sh-help-section">
                    <div className="sh-help-box2">
                        <div className="sh-help-box1">
                            <div className="sh-hbli">
                                <div className="sh-eng-tl">
                                    <span><FontAwesomeIcon icon={faCirclePlay}/></span>
                                    <p>How to add money?</p>
                                </div>
                                <p>টাকা কিভাবে অ্যাড করবেন</p>
                            </div>
                            <div className="sh-hbri">
                                <div className="sh-vedio-box2">
                                    <div className="sh-vedio-box1">
                                        <span><FontAwesomeIcon icon={faCirclePlay}/></span>
                                        <a href="">ভিডিওটি দেখুন</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sh-help-box2">
                        <div className="sh-help-box1">
                            <div className="sh-hbli">
                                <div className="sh-eng-tl">
                                    <span><FontAwesomeIcon icon={faCirclePlay}/></span>
                                    <p>How to add money?</p>
                                </div>
                                <p>টাকা কিভাবে অ্যাড করবেন</p>
                            </div>
                            <div className="sh-hbri">
                                <div className="sh-vedio-box2">
                                    <div className="sh-vedio-box1">
                                        <span><FontAwesomeIcon icon={faCirclePlay}/></span>
                                        <a href="">ভিডিওটি দেখুন</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sh-help-box2">
                        <div className="sh-help-box1">
                            <div className="sh-hbli">
                                <div className="sh-eng-tl">
                                    <span><FontAwesomeIcon icon={faCirclePlay}/></span>
                                    <p>How to add money?</p>
                                </div>
                                <p>টাকা কিভাবে অ্যাড করবেন</p>
                            </div>
                            <div className="sh-hbri">
                                <div className="sh-vedio-box2">
                                    <div className="sh-vedio-box1">
                                        <span><FontAwesomeIcon icon={faCirclePlay}/></span>
                                        <a href="">ভিডিওটি দেখুন</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* === Deposit by money Section === */}
                <div className="sh-depo-income-wallet-section">
                    <div className="sh-share-Btn2">
                        <a href="" className="sh-share-Btn1">
                            {/* === share section === */}
                            <div className="sh-shareLI">
                                <span><FontAwesomeIcon icon={faShareNodes}/></span>
                                <a href="">Share this App</a>
                            </div>
                            <a className="sh-share-link" href="">
                                <img src="/public/images/brand-logo.png" alt="" />
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;