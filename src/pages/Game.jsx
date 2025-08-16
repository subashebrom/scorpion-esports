import '../assets/css/pages/game.css'

const Game = () => {
    return (
        <>
            <div className="cba-game-page-container">
                {/* game page main content box */}
                <div className="cba-gpc-content">
                    {/* game page heading box */}
                    <div className="cba-gpc-heading">
                        <div className="cba-gpc-hbox">
                            <h2>
                                <i class='bx  bxs-fire-alt'></i>
                                OFFER NOTICE BOARD
                                <i class='bx  bxs-fire-alt'></i>
                            </h2>
                        </div>
                    </div>
                    {/* game page carousel div */}
                    <div className="cba-gpc-carousel">
                        <div className="cba-gpc-carousel-slider">
                            <img src="../../public/images/carousel-img-one.png" alt="Carousel Image 1" />
                            <img src="../../public/images/carousel-img-two.png" alt="Carousel Image 2" />
                            <img src="../../public/images/carousel-img-three.png" alt="Carousel Image 3" />
                            <img src="../../public/images/carousel-img-four.png" alt="Carousel Image 4" />
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
                            <div className="cba-gpc-tmm-match-box">
                                <div className="cba-gpc-tmm-mb-img">
                                    <img src="../../public/images/br-match.png" alt="BR Match" />
                                </div>
                                <div className="cba-gpc-tmm-mb-data">
                                    <div className="cba-gpc-tmm-mbd-inner">
                                        <h3>BR Matches</h3>
                                        <p>10 Match Found</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cba-gpc-tmm-match-box">
                                <div className="cba-gpc-tmm-mb-img">
                                    <img src="../../public/images/c-squad-match.png" alt="Class Squad Match" />
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
                                    <img src="../../public/images/cs-match.png" alt="CS 1V1 & 2V2 Match" />
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
                                    <img src="../../public/images/lw-match.png" alt="Lone Wolf Match" />
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
                                    <img src="../../public/images/free-match.png" alt="Free Match" />
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
                                    <img src="../../public/images/cc-match.png" alt="Custom Challenge Match" />
                                </div>
                                <div className="cba-gpc-tmm-mb-data">
                                    <div className="cba-gpc-tmm-mbd-inner">
                                        <h3>BR Match</h3>
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