import React from 'react';
import './SkillsPage.css';
import ThreeDPlane from './elements/ThreeDPlane';

class SkillsPage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper-skills">
                    <div className="skills-summary-container">
                        <div className="info-list">
                            <h3>SKILLS</h3>
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>LOVE OF UNITY</h2>
                                Passionate about Unity game development software, I find immense joy in bringing interactive worlds to life. Unity's versatile and powerful platform fuels my creativity, allowing me to craft engaging gaming experiences that captivate and thrill players.
                            </div>
                        </div>
                        <ThreeDPlane modelName="skillsUnity" />
                    </div>
                    <div className="skills-summary-container">
                        <ThreeDPlane modelName="skillsNode" />
                        <div className="info-list">
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>NODEJS</h2>
                                My fascination with Node.js stems from its efficiency and scalability in building server-side applications. Its event-driven architecture empowers me to develop robust and responsive backend solutions, enhancing the functionality and performance of web applications.
                            </div>
                        </div>
                    </div>

                    <div className="skills-summary-container">
                        <div className="info-list">
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>BUN</h2>
                                Exploring Bun, with its exceptional speed and modern JavaScript features, has revolutionized my approach to web development. Its innovative design and compatibility with existing Node.js packages enable me to create more efficient and faster web applications.
                            </div>
                        </div>
                        <ThreeDPlane modelName="skillsBun" />
                    </div>

                    <div className="skills-summary-container">
                        <ThreeDPlane modelName="skillsReact" />
                        <div className="info-list">
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>REACTJS</h2>
                                React has transformed the way I build user interfaces, offering a seamless blend of flexibility and performance. Its component-based architecture simplifies the development process, making it easier to create dynamic and interactive web applications that truly resonate with users.
                            </div>
                        </div>
                    </div>

                    <div className="skills-summary-container">
                        <div className="info-list">
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>PIXEL ART</h2>
                                Pixel art is a realm where creativity meets nostalgia. This unique art form allows me to express intricate details and vibrant stories through a retro digital canvas, crafting visuals that are both charming and evocative.
                            </div>
                        </div>
                        <ThreeDPlane modelName="skillsPixelArt" />
                    </div>

                    <div className="skills-summary-container">
                        <ThreeDPlane modelName="skillsGameMechanics" />
                        <div className="info-list">
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>GAME MECHANICS</h2>
                                    Designing game mechanics is a journey of constant innovation and problem-solving. It's about crafting the rules and interactive elements that define the gaming experience, ensuring each game is engaging, balanced, and offers endless entertainment to players.
                                </div>
                        </div>
                    </div>

                    <div className="info-list-horizontal">
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>LEARN THEM ALL!</h2>
                            In the ever-evolving landscape of technology, the pursuit of knowledge is not just a journey, but a necessity. Embracing a mindset of continuous learning opens doors to endless possibilities and innovations. Whether it's mastering a new programming language, exploring cutting-edge tools, or simply refining existing skills, each step forward is a leap towards personal and professional growth. In this digital era, our ability to adapt and grow is what truly defines our success. So, let's embark on this learning adventure together, and see where it takes us!
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default SkillsPage;
