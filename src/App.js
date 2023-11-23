import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


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
                <Router>
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
                                <nav>
                                    <div class="header-menu">
                                        <div className="header-menu-item"><Link to="/">Home</Link></div>
                                        <div className="header-menu-item"><Link to="/about">About Me</Link></div>
                                        <div className="header-menu-item">Portfolio</div>
                                        <div className="header-menu-item">Resume</div>
                                        <div className="header-menu-item">Blog</div>
                                        <div className="header-menu-item">Testimonials</div>
                                        <div className="header-menu-item">Skills</div>
                                        <div className="header-menu-item">Services</div>
                                        <div className="header-menu-item">Contact</div>
                                    </div>
                                </nav>
                            </div>
                            <div className="header-foot-line"></div>
                        </header>

                        <main>
                            {/* Your menu here */}
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                            </Routes>
                        </main>

                        <footer>
                            <div className="footer-head-line"></div>
                            <p>&copy; All rights reserved domokosbalazs.ro</p>
                        </footer>
                    </div>
                </Router>
            </>
        );
    }
}
export default App;
