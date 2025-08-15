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
                </div>
            </div>
        </>
    );
};

export default Game;