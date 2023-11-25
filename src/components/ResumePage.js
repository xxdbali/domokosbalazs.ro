import React from 'react';
import './ResumePage.css';
import ThreeDPlane from './elements/ThreeDPlane';

class ResumePage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper-resume">
                    <div className="resume-summary-container">
                        <div className="info-list">
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>RESUME</h2>
                                <h4>Summary</h4>
                                <p>
                                    With over 11 years of experience in computer science engineering, my journey has been marked by an unwavering passion for technology and a commitment to lifelong learning. My expertise spans various aspects of web app development, with a particular focus on technologies like Node.js, Express.js, MongoDB, React, Redux, ES6, and SASS. I thrive on solving complex problems and pushing the boundaries of what's possible. However, my true passion lies in game development, which I pursue as a dedicated hobby. From 2D pixel art to advanced 3D designs, I relish the challenge of crafting unique game mechanics that captivate players and drive engagement. In addition to game development, I also have a keen interest in exploring electronics and delving into the world of 3D printing. The blend of creativity and precision in these fields fascinates me. Staying current in the ever-evolving tech landscape is not just a choice but a necessity. My dedication to continuous learning extends to areas like C#, TypeScript, and Java, where I embrace clean code practices, object-oriented programming, and a commitment to excellence. I firmly believe that coding skills, while essential, are only part of the equation. Effective marketing, creativity, and strategic thinking are equally vital components in the journey to create exceptional projects.
                                </p>

                            </div>
                        </div>

                        <ThreeDPlane modelName="resume" />
                    </div>
                    <div className="info-list-horizontal">
                        <div className="info-list-item">
                            <div className="header-line"></div>

                            <h4>Experience</h4>
                            <ul>
                                <li>
                                    <strong>Programmer</strong> - Gloobus (Oct 2016 - Present, 7 years 2 months)
                                </li>
                                <li>
                                    <strong>Game Developer</strong> - SakerGames (Oct 2013 - Present, 10 years 2 months)
                                    <p>Here I working for free and for fun in my free time!</p>
                                </li>
                                <li>
                                    <strong>Senior Programmer</strong> - Grafx (Jul 2012 - Oct 2016, 4 years 4 months)
                                    <p>Programmer, Web development. PHP, Javascript, SQL, Java (Android)</p>
                                </li>
                                <li>
                                    <strong>Programmer</strong> - Perfect pc and soft (Nov 2011 - Jun 2012, 8 months)
                                    <p>Web development</p>
                                </li>
                            </ul>

                        </div>

                        <div className="info-list-item">
                            <div className="header-line"></div>

                            <h4>Education</h4>
                            <p>
                                <strong>EMTE Universitatea Sapientia Targu Mures</strong> - Bachelor of Engineering - BE, Computer Science (Oct 2007 - Oct 2011)
                                <p>As a Computer Science Engineer, my transformative four years at University, were a journey I truly cherished. Every moment was a reminder of how time flies when you're engaged in something you love. The university experience instilled in me a desire for continuous learning, and that drive still beckons me to explore further horizons. Eager to embrace new challenges and deepen my knowledge in the world of technology.</p>
                            </p>

                        </div>

                        <div className="info-list-item">
                            <div className="header-line"></div>

                            <h4>Licenses & Certifications</h4>
                            <ul>
                                <li>Computer Science</li>
                                <li>React.js - W3Schools.com (5YKCTPNXZ)</li>
                                <li>Pixel Art Master Course - Beginner to Professional/Freelance - Udemy (UC-fe08e83e-b19b-4c6a-9fba-1cddc818ffce)</li>
                                <li>The Beginners Guide to Aseprite - Udemy (UC-5ceea940-9957-4eee-bfab-e4d09e13bcc4)</li>
                                <li>Clean Code - Udemy (UC-37509a8d-6467-482b-99d1-b6521cbeb1f6)</li>
                                <li>ChatGPT Complete Guide: Learn Midjourney, ChatGPT 4 & More - Udemy (UC-d130764e-ff9f-47fd-8a13-b23b0e611dfd)</li>
                                <li>Complete Python Developer in 2023: Zero to Mastery - Udemy (UC-4e8be548-a613-4cda-b8a4-c1ca25f6b363)</li>
                                <li>React Native Complete Project - Udemy (UC-56cb5318-6f75-4731-ac95-520d5fd107e8)</li>
                            </ul>

                        </div>

                        <div className="info-list-item">
                            <div className="header-line"></div>

                            <h4>Skills</h4>
                            <p>React.js, JavaScript, Node.js, Express.js, React Native, Android, Python, Software Development, Linux, Git</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ResumePage;
