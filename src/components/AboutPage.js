import React from 'react';
import './AboutPage.css';
import './ArticleBlocks.css';
import ThreeDPlane from './ThreeDPlane';


class AboutPage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div className="info-list">
                        <h3>NEWS</h3>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>LOVE</h2>
                            🎮 Aspiring sci-fi universe creator by day, 🕹️ pixel art enthusiast by night.
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>ABOUT</h2>
                            ABOUT 🌐<a href="https://www.linkedin.com/in/domokos-balazs/" target="_blank" rel="noopener noreferrer">about in</a>
                        </div>
                    </div>
                    <div className="three-d-plane-container">
                        <ThreeDPlane modelName="about"/>
                    </div>
                </div>
            </>
        );
    }
}
export default AboutPage;
