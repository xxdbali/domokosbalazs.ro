import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

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
                <header>
                    <h1>Welcome to <a href="http://domokosbalazs.ro" target="_blank" rel="noopener noreferrer">domokosbalazs.ro</a></h1>
                </header>

                <main>
                    <div className="conten retro-tv torsion corner-effect">
                        <div className="noise">
                            <canvas id="noiseCanvas"></canvas>
                        </div>

                        <p>
                            <span role="img" aria-label="console">🎮</span> Aspiring sci-fi universe creator by day, <span role='img' aria-label="joystick">🕹️</span> pixel art enthusiast by night. 
                            I code, I craft, and I bring worlds to life. If I'm not debugging, you'll find me dodging virtual 
                            asteroids or plotting epic space odysseys. Let's navigate the stars together! <span role='img' aria-label="rocket">🚀</span>
                            <br /><br />
                            Connect with me on <span role='img' aria-label="earth">🌐</span><a href="https://www.linkedin.com/in/domokos-balazs/" target="_blank" rel="noopener noreferrer">LinkedIn</a> to explore more dimensions of my journey!
                            <br />
                            Check out my game creations on <span role='img' aria-label="console">🎮</span><a href="https://domokos.itch.io/" target="_blank" rel="noopener noreferrer">itch.io</a> for some virtual adventures!
                            <br />
                            Join me on <span role='img' aria-label="play">▶️</span><a href="https://youtube.com/@DomokosBalazs" target="_blank" rel="noopener noreferrer">YouTube</a> for behind-the-scenes game development and intergalactic fun!
                            <br />
                            Tweet along with me on <span role='img' aria-label="bird">🐦</span><a href="https://twitter.com/DomokosBalazs" target="_blank" rel="noopener noreferrer">Twitter</a> for cosmic thoughts and game dev banter!</p>
                    </div>
                </main>
                <footer>
                    <p>&copy; All rights reserved domokosbalazs.ro</p>
                </footer>
            </>
        );
    }
}
export default App;
