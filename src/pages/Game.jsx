import { NavLink } from 'react-router';
import '../assets/css/pages/game.css'
import { useState } from "react";

const Game = () => {

    // game page special match toggle
    const [isSpecialActive, setIsSpecialActive] = useState(false);
    const toggleSpecialMatch = () => {
    setIsSpecialActive(!isSpecialActive);
    };

    // game page one day after match toggle
    const [isOneDayAfterActive, setIsOneDayAfterActive] = useState(false);
    const toggleOneDayAfterMatch = () => {
    setIsOneDayAfterActive(!isOneDayAfterActive);
    };

    // game page two day after match toggle
    const [isTwoDayAfterActive, setIsTwoDayAfterActive] = useState(false);
    const toggleTwoDayAfterMatch = () => {
    setIsTwoDayAfterActive(!isTwoDayAfterActive);
    };

    // dynamic next day
    const today = new Date();
    // Add 1 day
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    // Format as DD/MM/YYYY
    const day = String(tomorrow.getDate()).padStart(2, "0");
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const year = tomorrow.getFullYear();
    const tomorrowDate = `${day}/${month}/${year}`;

    // day after tomorrow
    const dayAfterTomorrow = new Date(tomorrow);
    dayAfterTomorrow.setDate(tomorrow.getDate() + 1);
    // Format as DD/MM/YYYY
    const dayAfterTomorrowDay = String(dayAfterTomorrow.getDate()).padStart(2, "0");
    const dayAfterTomorrowMonth = String(dayAfterTomorrow.getMonth() + 1).padStart(2, "0");
    const dayAfterTomorrowYear = dayAfterTomorrow.getFullYear();
    const dayAfterTomorrowDate = `${dayAfterTomorrowDay}/${dayAfterTomorrowMonth}/${dayAfterTomorrowYear}`;

    // modal
    const openModal = () => {
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';
    }

    const closeModal = () => {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }

    setTimeout(() => {
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';
    }, 2500);

    return (
        <>
            <div className="cba-game-page-container" id='page'>
                {/* game page main content box */}
                <div className="cba-gpc-content">
                    {/* game page notice box */}
                    <div className="cba-gpc-notice-box">
                        <div className="cba-gpc-heading" onClick={openModal}>
                            <div className="cba-gpc-hbox">
                                <h2>
                                    <i class='bx  bxs-fire-alt'></i>
                                    OFFER NOTICE BOARD
                                    <i class='bx  bxs-fire-alt'></i>
                                </h2>
                            </div>
                        </div>
                        <div className="cba-gpc-nbox-modal-box" id='modal'>
                            <div className="cba-gpc-nbox-modal">
                                <div className="cba-gpc-nbox-modal-heading" onClick={closeModal}>
                                    <div className="cba-gpc-nbox-hbox">
                                        <h2>গুরুত্বপূর্ণ  নোটিশ !!</h2>
                                    </div>
                                </div>
                                <p>SCORPION E-SPORTS  M590 সম্পূর্ণভাবে ব্যান এপ থেকে, M590, Double Victor, AWM, M82B এগুলো চালানো যাবে না | BR এ বাহিরের প্লেয়ার নিয়ে ডুকবেন না এবং ইনভাইট দিবেন না, নাইলে সোজা কিক খাবেন কাস্টম রুম এবং এপ থেকে | এমনকি আপনার টাকাও বেক পাবেন না | ডিপোজিটে সমস্যা হলে টেলিগ্রামে অথবা WhatsApp মেসেজ দিবেন | কল দেয়া  সম্পূর্ণভাবে নিষেধ | উইথড্র লিমিট ২০০ টাকা | যেকোনো সহযোগিতায় টেলিগ্রামে জয়েন করুন | ধন্যবাদ</p>
                            </div>
                            <div className="cba-gpc-nbox-modal-close-btn" onClick={closeModal}>
                                <div className="cba-gpc-nbox-mcb-box">
                                    <h2>Okay</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* game page carousel div */}
                    <div className="cba-gpc-carousel">
                        <div className="cba-gpc-carousel-slider">
                            <img src="./images/carousel-img-one.png" alt="Carousel Image 1" />
                            <img src="./images/carousel-img-two.png" alt="Carousel Image 2" />
                            <img src="./images/carousel-img-three.png" alt="Carousel Image 3" />
                            <img src="./images/carousel-img-four.png" alt="Carousel Image 4" />
                        </div>
                    </div>
                    {/* game page todays match box */}
                    <div className="cba-gpc-todays-match">
                        {/* game page todays match heading */}
                        <div className="cba-gpc-tm-heading">
                            <div className="cba-gpc-tm-hbox">
                                <h2>
                                    <i class='bx  bxs-fire-alt'></i>
                                    TODAY’S ALL MATCHES
                                    <i class='bx  bxs-fire-alt'></i>
                                </h2>
                            </div>
                        </div>
                        {/* game page todays match content matches */}
                        <div className="cba-gpc-tm-matches">
                            <NavLink to='/br-matches' className="cba-gpc-tmm-match-box">
                                <div className="cba-gpc-tmm-mb-img">
                                    <img src="./images/br-match.png" alt="BR Match" />
                                </div>
                                <div className="cba-gpc-tmm-mb-data">
                                    <div className="cba-gpc-tmm-mbd-inner">
                                        <h3>BR Matches</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="cba-gpc-tmm-match-box">
                                <div className="cba-gpc-tmm-mb-img">
                                    <img src="./images/c-squad-match.png" alt="Class Squad Match" />
                                </div>
                                <div className="cba-gpc-tmm-mb-data">
                                    <div className="cba-gpc-tmm-mbd-inner">
                                        <h3>Class Squad</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tmm-match-box">
                                <div className="cba-gpc-tmm-mb-img">
                                    <img src="./images/cs-match.png" alt="CS 1V1 & 2V2 Match" />
                                </div>
                                <div className="cba-gpc-tmm-mb-data">
                                    <div className="cba-gpc-tmm-mbd-inner">
                                        <h3>CS 1V1 & 2V2</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tmm-match-box">
                                <div className="cba-gpc-tmm-mb-img">
                                    <img src="./images/lw-match.png" alt="Lone Wolf Match" />
                                </div>
                                <div className="cba-gpc-tmm-mb-data">
                                    <div className="cba-gpc-tmm-mbd-inner">
                                        <h3>Lone Wolf</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tmm-match-box">
                                <div className="cba-gpc-tmm-mb-img">
                                    <img src="./images/free-match.png" alt="Free Match" />
                                </div>
                                <div className="cba-gpc-tmm-mb-data">
                                    <div className="cba-gpc-tmm-mbd-inner">
                                        <h3>Free Match</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tmm-match-box">
                                <div className="cba-gpc-tmm-mb-img">
                                    <img src="./images/cc-match.png" alt="Challenges Match" />
                                </div>
                                <div className="cba-gpc-tmm-mb-data">
                                    <div className="cba-gpc-tmm-mbd-inner">
                                        <h3>CHALLENGE</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* game page special match box */}
                    <div className="cba-gpc-special-match">
                        {/* game page special match heading */}
                        <div className="cba-gpc-sm-heading" onClick={toggleSpecialMatch}>
                            <div className="cba-gpc-sm-hbox">
                                <h2>
                                    <i class='bxr  bxs-bolt'></i>
                                    OUR SPECIAL MATCHES
                                    <i class='bxr  bxs-bolt'></i>
                                </h2>
                            </div>
                        </div>
                        {/* game page special match content matches */}
                        <div className={`cba-gpc-sm-matches ${isSpecialActive ? "sm-active" : ""}`}>
                            <div className="cba-gpc-smm-match-box">
                                <div className="cba-gpc-smm-mb-img">
                                    <img src="./images/br-match.png" alt="BR Match" />
                                </div>
                                <div className="cba-gpc-smm-mb-data">
                                    <div className="cba-gpc-smm-mbd-inner">
                                        <div className="cba-gpc-smm-mbd-i-text">
                                            <h3>BR Matches</h3>
                                            <p>10 Match Found</p>
                                        </div>
                                        <div className="cba-gpc-smm-mbd-i-icon">
                                            <i class='bxr  bxs-lock-keyhole'></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-smm-match-box">
                                <div className="cba-gpc-smm-mb-img">
                                    <img src="./images/c-squad-match.png" alt="Class Squad Match" />
                                </div>
                                <div className="cba-gpc-smm-mb-data">
                                    <div className="cba-gpc-smm-mbd-inner">
                                        <div className="cba-gpc-smm-mbd-i-text">
                                            <h3>CLASS SQUAD</h3>
                                            <p>10 Match Found</p>
                                        </div>
                                        <div className="cba-gpc-smm-mbd-i-icon">
                                            <i class='bxr  bxs-lock-keyhole'></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-smm-match-box">
                                <div className="cba-gpc-smm-mb-img">
                                    <img src="./images/cs-match.png" alt="CS 1V1 & 2V2 Match" />
                                </div>
                                <div className="cba-gpc-smm-mb-data">
                                    <div className="cba-gpc-smm-mbd-inner">
                                        <div className="cba-gpc-smm-mbd-i-text">
                                            <h3>CS 1V1 & 2V2</h3>
                                            <p>10 Match Found</p>
                                        </div>
                                        <div className="cba-gpc-smm-mbd-i-icon">
                                            <i class='bxr  bxs-lock-keyhole'></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-smm-match-box">
                                <div className="cba-gpc-smm-mb-img">
                                    <img src="./images/lw-match.png" alt="Lone Wolf Match" />
                                </div>
                                <div className="cba-gpc-smm-mb-data">
                                    <div className="cba-gpc-smm-mbd-inner">
                                        <div className="cba-gpc-smm-mbd-i-text">
                                            <h3>LONE WOLF</h3>
                                            <p>10 Match Found</p>
                                        </div>
                                        <div className="cba-gpc-smm-mbd-i-icon">
                                            <i class='bxr  bxs-lock-keyhole'></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-smm-match-box">
                                <div className="cba-gpc-smm-mb-img">
                                    <img src="./images/free-match.png" alt="Free Match" />
                                </div>
                                <div className="cba-gpc-smm-mb-data">
                                    <div className="cba-gpc-smm-mbd-inner">
                                        <div className="cba-gpc-smm-mbd-i-text">
                                            <h3>FREE MATCH</h3>
                                            <p>10 Match Found</p>
                                        </div>
                                        <div className="cba-gpc-smm-mbd-i-icon">
                                            <i class='bxr  bxs-lock-keyhole'></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-smm-match-box">
                                <div className="cba-gpc-smm-mb-img">
                                    <img src="./images/cc-match.png" alt="Challenges Match" />
                                </div>
                                <div className="cba-gpc-smm-mb-data">
                                    <div className="cba-gpc-smm-mbd-inner">
                                        <div className="cba-gpc-smm-mbd-i-text">
                                            <h3>CHALLENGES</h3>
                                            <p>10 Match Found</p>
                                        </div>
                                        <div className="cba-gpc-smm-mbd-i-icon">
                                            <i class='bxr  bxs-lock-keyhole'></i> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* game page one day after match box */}
                    <div className="cba-gpc-oda-match">
                        {/* game page todays match heading */}
                        <div className="cba-gpc-odam-heading" onClick={toggleOneDayAfterMatch}>
                            <div className="cba-gpc-odam-hbox">
                                <h2>
                                    <i class='bxr  bxs-bookmark-plus'></i> 
                                    {tomorrowDate}
                                    <i class='bxr  bxs-bookmark-plus'></i> 
                                </h2>
                            </div>
                        </div>
                        {/* game page todays match content matches */}
                        <div className={`cba-gpc-odam-matches ${isOneDayAfterActive ? "oda-active" : ""}`}>
                            <div className="cba-gpc-odamm-match-box">
                                <div className="cba-gpc-odamm-mb-img">
                                    <img src="./images/br-match.png" alt="BR Match" />
                                </div>
                                <div className="cba-gpc-odamm-mb-data">
                                    <div className="cba-gpc-odamm-mbd-inner">
                                        <h3>BR Matches</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-odamm-match-box">
                                <div className="cba-gpc-odamm-mb-img">
                                    <img src="./images/c-squad-match.png" alt="Class Squad Match" />
                                </div>
                                <div className="cba-gpc-odamm-mb-data">
                                    <div className="cba-gpc-odamm-mbd-inner">
                                        <h3>CLASS SQUAD</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-odamm-match-box">
                                <div className="cba-gpc-odamm-mb-img">
                                    <img src="./images/cs-match.png" alt="CS 1V1 & 2V2 Match" />
                                </div>
                                <div className="cba-gpc-odamm-mb-data">
                                    <div className="cba-gpc-odamm-mbd-inner">
                                        <h3>CS 1V1 & 2V2</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-odamm-match-box">
                                <div className="cba-gpc-odamm-mb-img">
                                    <img src="./images/lw-match.png" alt="Lone Wolf Match" />
                                </div>
                                <div className="cba-gpc-odamm-mb-data">
                                    <div className="cba-gpc-odamm-mbd-inner">
                                        <h3>LONE WOLF</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-odamm-match-box">
                                <div className="cba-gpc-odamm-mb-img">
                                    <img src="./images/free-match.png" alt="Free Match" />
                                </div>
                                <div className="cba-gpc-odamm-mb-data">
                                    <div className="cba-gpc-odamm-mbd-inner">
                                        <h3>FREE MATCH</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-odamm-match-box">
                                <div className="cba-gpc-odamm-mb-img">
                                    <img src="./images/cc-match.png" alt="Challenges Match" />
                                </div>
                                <div className="cba-gpc-odamm-mb-data">
                                    <div className="cba-gpc-odamm-mbd-inner">
                                        <h3>CHALLENGES</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* game page two day after match box */}
                    <div className="cba-gpc-tda-match">
                        {/* game page two day after match heading */}
                        <div className="cba-gpc-tdam-heading" onClick={toggleTwoDayAfterMatch}>
                            <div className="cba-gpc-tdam-hbox">
                                <h2>
                                    <i class='bxr  bxs-bookmark-plus'></i> 
                                    {dayAfterTomorrowDate}
                                    <i class='bxr  bxs-bookmark-plus'></i> 
                                </h2>
                            </div>
                        </div>
                        {/* game page two day after match content matches */}
                        <div className={`cba-gpc-tdam-matches ${isTwoDayAfterActive ? "tda-active" : ""}`}>
                            <div className="cba-gpc-tdamm-match-box">
                                <div className="cba-gpc-tdamm-mb-img">
                                    <img src="./images/br-match.png" alt="BR Match" />
                                </div>
                                <div className="cba-gpc-tdamm-mb-data">
                                    <div className="cba-gpc-tdamm-mbd-inner">
                                        <h3>BR Matches</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tdamm-match-box">
                                <div className="cba-gpc-tdamm-mb-img">
                                    <img src="./images/c-squad-match.png" alt="Class Squad Match" />
                                </div>
                                <div className="cba-gpc-tdamm-mb-data">
                                    <div className="cba-gpc-tdamm-mbd-inner">
                                        <h3>CLASS SQUAD</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tdamm-match-box">
                                <div className="cba-gpc-tdamm-mb-img">
                                    <img src="./images/cs-match.png" alt="CS 1V1 & 2V2 Match" />
                                </div>
                                <div className="cba-gpc-tdamm-mb-data">
                                    <div className="cba-gpc-tdamm-mbd-inner">
                                        <h3>CS 1V1 & 2V2</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tdamm-match-box">
                                <div className="cba-gpc-tdamm-mb-img">
                                    <img src="./images/lw-match.png" alt="Lone Wolf Match" />
                                </div>
                                <div className="cba-gpc-tdamm-mb-data">
                                    <div className="cba-gpc-tdamm-mbd-inner">
                                        <h3>LONE WOLF</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tdamm-match-box">
                                <div className="cba-gpc-tdamm-mb-img">
                                    <img src="./images/free-match.png" alt="Free Match" />
                                </div>
                                <div className="cba-gpc-tdamm-mb-data">
                                    <div className="cba-gpc-tdamm-mbd-inner">
                                        <h3>FREE MATCH</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tdamm-match-box">
                                <div className="cba-gpc-tdamm-mb-img">
                                    <img src="./images/cc-match.png" alt="Challenges Match" />
                                </div>
                                <div className="cba-gpc-tdamm-mb-data">
                                    <div className="cba-gpc-tdamm-mbd-inner">
                                        <h3>CHALLENGES</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Game;