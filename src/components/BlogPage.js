import React from 'react';
import './BlogPage.css';
import ThreeDPlane from './elements/ThreeDPlane';

class BlogPage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper-blog">
                    <div className="resume-summary-container">
                        <div className="info-list">
                            <h3>BLOG</h3>
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2> Introducing "Reverse Pongineer": My Latest Game!</h2>
                                I'm thrilled to announce the launch of "Reverse Pongineer"! This 2D pixel art space defense game is finally here to challenge and entertain you.
                                In "Reverse Pongineer," you're defending your space base against invading alien ships. It's an exhilarating blend of strategy and action. Manage your energy wisely to shoot bullets and deploy nukes – every decision counts in this cosmic battle!
                                Creating this game has been a fantastic journey, blending nostalgic pixel art with modern gameplay. I can't wait for you to experience the thrill and challenge it offers.
                                Dive into "Reverse Pongineer" now and join the space defense adventure!
                                Check out the reverse ponginner 🎮<a href="https://domokos.itch.io/reverse-pongineer" target="_blank" rel="noopener noreferrer">domokos.itch.io/reverse-pongineer</a>
                            </div>
                        </div>
                        <ThreeDPlane modelName="blog" />
                    </div>

                    <div className="info-list-horizontal">
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>"Postobot": A Puzzling Adventure in Pixel Art</h2>
                            Exciting news for puzzle game enthusiasts! I want to take a moment to reminisce about "Postobot," a game I developed with my friend Arthur for the Ludum Dare 42 competition. This unique 2D pixel art game offers an intriguing blend of strategy and quick thinking.
                            In "Postobot," you play as a brave robot, tasked with organizing boxes during a war against humans. Your job is to combine boxes to create bigger ones, pushing them strategically to clear space and score points. But watch out – the game gets trickier with each of the 10 levels, as more box sizes come into play.
                            The challenge? If five or more boxes accumulate in the landing zone, you have just 10 seconds to clear them out or face shutdown – a fate no robot wants to meet. Your efficiency is key to survival and success.
                            "Postobot" isn't just a game; it's a story of resilience and adaptation. Despite being wounded in the war and repurposed, our hero robot proves that even in dire situations, there's an opportunity to make a significant impact.
                            Whether you're a fan of puzzles, pixel art, or just love a good story, "Postobot" offers an engaging experience that tests both your mind and reflexes. If you haven't tried it yet, it's time to dive into the world of "Postobot" and see how efficiently you can manage those boxes!
                            Check out the reverse ponginner 🎮<a href="https://domokos.itch.io/postobot" target="_blank" rel="noopener noreferrer">domokos.itch.io/postobot</a>
                        </div>
                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h2>The Beginning of a New Journey: My Site is Live!</h2>
                            Hello everyone!
                            Today, I'm beyond excited to share some fantastic news with you all – my website is officially live! 🎉 It feels surreal to finally see the fruits of my labor out there in the digital world. This website is not just a collection of pages and features; it's a canvas where my passion, creativity, and countless hours of dedication have come to life.
                            But, as with any grand adventure, this is just the beginning. While I take a moment to bask in the joy of this significant milestone, I'm fully aware that there's still a mountain of work ahead. The site, in its current form, is just the foundation. There are tweaks to be made, bugs to squash, and optimizations to ensure everything runs smoothly.
                            Looking into the future, my mind buzzes with endless possibilities. I have a plethora of plans and ideas waiting to unfurl. From engaging content to innovative features, the roadmap ahead is brimming with potential. This website is set to be a dynamic space, evolving and growing, just like the digital landscape.
                            I want to take a moment to thank everyone who supported me on this journey. Your encouragement and feedback have been invaluable. Stay tuned, because this is just the start, and there's so much more to come!
                            Here's to new beginnings and the exciting journey ahead!
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default BlogPage;
