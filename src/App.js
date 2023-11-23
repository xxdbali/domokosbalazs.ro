import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ThreeDPlane from './components/homePageMesh';

class App extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Domokos Balazs - Web & Game Developer</title>
                    <meta name="description" content="Showcasing the web and game development portfolio of Domokos Balazs. Explore innovative projects and creative designs." />
                    <meta name="keywords" content="Domokos Balazs, Web Developer, Game Developer, Portfolio, Web Development, Game Design" />
                    <meta property="og:title" content="Domokos Balazs - Web & Game Developer" />
                    <meta property="og:description" content="Discover the portfolio of Domokos Balazs, where web development meets game design. Learn about my projects, skills, and professional journey." />
                    <meta property="og:image" content="https://domokosbalazs.ro/images/ogimage.jpg" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://domokosbalazs.ro/" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Domokos Balazs - Web & Game Developer" />
                    <meta name="twitter:description" content="Portfolio of Domokos Balazs: From web applications to immersive games, discover a unique blend of technology and creativity." />
                    <meta name="twitter:image" content="https://domokosbalazs.ro/images/twitterimage.jpg" />
                    <link rel="canonical" href="https://domokosbalazs.ro/" />
                    <link rel="icon" href="https://domokosbalazs.ro/favicon.ico" />
                    {/* Additional tags as needed */}
                </Helmet>
                <div className="master-frame">
                    <header>
                        <div class="header-content">
                            <div class="header-logo">
                                <a href="http://www.domokosbalazs.ro" target="_blank">
                                    <img src="logo.png" alt="Domokos Balazs Logo" width="100px" />
                                </a>
                            </div>
                            <div class="header-title">
                                <h1>DOMOKOSBALAZS.RO</h1>
                            </div>
                            <div class="header-menu">
                                <div className="header-menu-item">Home</div>
                                <div className="header-menu-item">About Me</div>
                                <div className="header-menu-item">Portfolio</div>
                                <div className="header-menu-item">Resume</div>
                                <div className="header-menu-item">Blog</div>
                                <div className="header-menu-item">Testimonials</div>
                                <div className="header-menu-item">Skills</div>
                                <div className="header-menu-item">Services</div>
                                <div className="header-menu-item">Contact</div>
                            </div>
                        </div>
                        <div className="header-foot-line"></div>
                    </header>

                    <main>
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

                    </main>

                    <footer>
                        <div className="footer-head-line"></div>
                        <p>&copy; All rights reserved domokosbalazs.ro</p>
                    </footer>
                </div>
            </>
        );
    }
}
export default App;
