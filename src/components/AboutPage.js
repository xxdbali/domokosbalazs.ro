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
                        <h3>ABOUT ME</h3>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>DOMOKOS BALÁZS</h2>
                            With over a decade in computer science engineering, I specialize in web app development using Node.js, Express.js, MongoDB, React, Redux, ES6, and SASS. I excel in solving complex challenges and innovating in technology. Beyond this, game development is my passion, where I enjoy creating engaging 2D and 3D game experiences. I'm also fascinated by electronics and 3D printing, exploring these as hobbies. Committed to lifelong learning, I keep up-to-date with C#, TypeScript, Java, and emphasize clean coding and object-oriented principles. I believe in blending coding skills with marketing, creativity, and strategic thinking to create outstanding projects.
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
