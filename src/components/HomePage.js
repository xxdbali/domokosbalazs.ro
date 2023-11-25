import React from 'react';
import './HomePage.css';
import ThreeDPlane from './elements/ThreeDPlane';


class HomePage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper-home">
                    <div className="info-list">
                        <h3>NEWS</h3>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>LOVE</h2>
                            🎮Experienced in computer science with a fervent passion for game development.
                            I excel in creating immersive 2D and 3D games, blending technical skill with
                            creativity to craft captivating virtual experiences. Dedicated to innovating
                            and enriching the gaming world.🕹️
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>Stay Connected</h2>
                            <p>Join my professional network on <a href="https://www.linkedin.com/in/domokos-balazs/" target="_blank" rel="noopener noreferrer">LinkedIn 🌐</a> and let's exchange ideas!</p>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>Creative Gaming</h2>
                            <p>Explore my unique game designs and creative projects on <a href="https://domokos.itch.io/" target="_blank" rel="noopener noreferrer">itch.io 🎮</a>.</p>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>YouTube Adventures</h2>
                            <p>Subscribe and join me on my journey at <a href="https://youtube.com/@DomokosBalazs" target="_blank" rel="noopener noreferrer">YouTube ▶️</a> for regular updates and insights.</p>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>Tweet With Me</h2>
                            <p>Follow my thoughts and engage with me on <a href="https://twitter.com/DomokosBalazs" target="_blank" rel="noopener noreferrer">Twitter 🐦</a>. Let's tweet together!</p>
                        </div>

                    </div>
                    <ThreeDPlane />
                </div>
            </>
        );
    }
}
export default HomePage;
