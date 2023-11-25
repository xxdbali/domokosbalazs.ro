import React from 'react';
import './TestimonialsPage.css';
import ThreeDPlane from './elements/ThreeDPlane';

class TestimonialsPage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper-testimonials">
                    <div className="testimonials-summary-container">
                        <div className="info-list">
                            <h3>TESTIMONIALS</h3>
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>MAYBE MY WIFE...</h2>
                                "As a puppeteer, my world is strings and stories, while my husband's is code and gaming challenges. I may not know exactly what he does in the realm of IT and game development, but I see the magic he creates - both on the screen and as the best dad. He's as skilled with programming as I am with puppets, and that's saying something!"
                            </div>
                        </div>
                        <ThreeDPlane modelName="testimonials" />
                    </div>

                    <div className="info-list-horizontal">
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>MY BOSSES</h2>
                            Comming soon...
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>MY BEST COLLEAGUE</h2>
                            Comming soon...
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>MY GUILD MATES AT SAKER GAMES</h2>
                            Comming soon...
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>MY LOVELY FOLLOWERS</h2>
                            I hope it is comming soon...
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default TestimonialsPage;
