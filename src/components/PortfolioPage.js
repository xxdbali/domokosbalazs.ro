import React from 'react';
import './PortfolioPage.css';
import ThreeDPlane from './elements/ThreeDPlane';

class PortfolioPage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper">
                    <div className="info-list">
                        <h3>PORTFOLIO</h3>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>GAME PROJECTS</h2>
                            Check out my game creations on 🎮<a href="https://domokos.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>WEB PROJECTS</h2>
                            Check out my web pages on 🌐
                            <a href="https://domokosbalazs.ro/" target="_blank" rel="noopener noreferrer">domokosbalazs.ro</a>
                            <a href="https://maiad.ro/" target="_blank" rel="noopener noreferrer">maiad.ro</a>
                            <a href="https://nyomat.ro/" target="_blank" rel="noopener noreferrer">nyomat.ro</a>
                            <a href="https://domokosbalazs.w3spaces.com/" target="_blank" rel="noopener noreferrer">domokosbalazs.w3spaces.com</a>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>MOBILE PROJECTS</h2>
                            Check out my mobile projects on 📱<a href="https://domokos.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>COOPERATION</h2>
                            Check out our gamedev crew page on 🐦
                            <a href="https://sakergames.com/" target="_blank" rel="noopener noreferrer">sakergames.com</a>
                        </div>
                    </div>
                    <ThreeDPlane modelName="portfolio"/>
                </div>
            </>
        );
    }
}
export default PortfolioPage;
