import React from 'react';
import './HomePage.css';
import './ArticleBlocks.css';
import ThreeDPlane from './ThreeDPlane';


class HomePage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper">
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
                            <h2>CONNECT</h2>
                            Connect with me on 🌐<a href="https://www.linkedin.com/in/domokos-balazs/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>CREATINOS</h2>
                            Check out my game creations on 🎮<a href="https://domokos.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>JOIN</h2>
                            Join me on ▶️<a href="https://youtube.com/@DomokosBalazs" target="_blank" rel="noopener noreferrer">YouTube</a>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>X</h2>
                            Tweet along with me on 🐦<a href="https://twitter.com/DomokosBalazs" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                    <div className="three-d-plane-container">
                        <ThreeDPlane />
                    </div>
                </div>
            </>
        );
    }
}
export default HomePage;
