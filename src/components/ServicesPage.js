import React from 'react';
import './ServicesPage.css';
import ThreeDPlane from './elements/ThreeDPlane';

class ServicesPage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper-services">
                    <div className="services-summary-container">
                        <div className="info-list">
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>SERVICES</h2>
                                <h4>GAME JAM LOVE</h4>
                                <p>
                                    There's a unique rush in the game jam world—days of non-stop, adrenaline-fueled development, powered by pizza and Red Bull. It's here, amidst sleepless nights and relentless coding, where creativity and collaboration come alive.
                                </p>
                                <p>
                                    Each game jam is a whirlwind of teamwork and talent. We dive into a frenzy of coding, our screens our canvases, transforming wild ideas into playable realities. These intense sessions are my playground, where passion meets profession, and every challenge is an opportunity to innovate.
                                </p>
                                <p>
                                    For me, game development isn't just a job; it's a passion lived out in these exhilarating, pizza-fueled marathons. It's in this chaotic harmony of game jams that I find my true calling as a creator, collaborator, and dreamer.
                                </p>
                                <p>
                                    Feel free to invite me to a cool jam – I'm always up for an adventure in creativity and collaboration!
                                </p>
                            </div>
                        </div>

                        <ThreeDPlane modelName="services" />
                    </div>
                    <div className="info-list-horizontal">

                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h4>LENDING A HAND FOR A BETTER WORLD</h4>
                            <p>
                                Sometimes, the most powerful gesture we can make is extending a hand to help others. It's about making our corner of the universe a little brighter, a little kinder. My journey has often led me to don the hat of a volunteer, to support causes and dreams that resonate with the betterment of all.
                            </p>
                            <p>
                                I'm drawn to the idea of donating time, effort, and resources to initiatives that spark positive change. It's not just about financial support; it's about being part of something bigger, something transformative. Whether it's backing innovative ideas from dreamers like myself or getting my hands dirty in the field, the goal is always to contribute to a greater good.
                            </p>
                            <p>
                                This isn't about believing in karma or expecting cosmic rewards. It's simpler and more profound than that. My experiences have taught me that helping others doesn't just benefit them; it enriches my soul, brightens my perspective, and adds a layer of fulfillment to my life.
                            </p>
                            <p>
                                So, if you're embarking on an endeavor to make a positive impact, to shake things up for the better – I'm here to listen. Whether it's a bold, unconventional project or a heartfelt community effort, don't hesitate to reach out. Let's collaborate to turn extraordinary visions into reality and spread a little more good in the world.
                            </p>
                            <p>
                                Together, we can be the change-makers, the dreamers in action. Let's create ripples of positivity, one extraordinary project at a time.
                            </p>
                        </div>

                        <div className="info-list-item">
                            <div className="header-line"></div>

                            <h4>I WON'T FIX YOUR PRINTER</h4>
                            <p>
                                Okay, let's clear the air with a bit of humor: I won't be the hero who rescues your printer from its paper-jam purgatory. It's a quirky truth many in the tech sphere will chuckle at, but there's a deeper message here.
                            </p>
                            <p>
                                In our quest to solve complex problems and create groundbreaking solutions, it’s easy to get sidetracked. Sure, I could fix your printer, maybe even enjoy the challenge, but is that the best use of our collective talents? I'm here to dive into the tasks that ignite passion, drive innovation, and truly make a difference.
                            </p>
                            <p>
                                Why settle for mundane when the extraordinary awaits? Our work, tough as it may be, is a once-in-a-lifetime journey. We owe it to ourselves to pursue paths that bring us joy, fulfillment, and a sense of accomplishment. Fixing printers? That’s a job for another day, or perhaps, for someone else.
                            </p>
                            <p>
                                Let’s focus on what makes our professional hearts beat faster. Let’s embark on journeys that fuel our creative engines, not drain them. Remember, we have one life to live; let’s not spend it in the shallow end of the tech pool. Instead, let's dive deep into the waters of innovation and true technological advancement.
                            </p>
                        </div>
                    </div>
                </div >
            </>
        );
    }
}
export default ServicesPage;
