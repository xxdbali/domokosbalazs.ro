import React from 'react';
import './ContactPage.css';
import ThreeDPlane from './elements/ThreeDPlane';
import ContactForm from './ContactForm';

class ContactPage extends React.Component {
    render() {
        return (
            <>
                <div className="content-wrapper-contact">
                    <div className="contact-summary-container">
                        <div className="info-list">
                            <div className="info-list-item">
                                <div className="header-line"></div>
                                <h2>CONTACT</h2>
                                <h4>LET'S CONNECT!</h4>
                                <p>
                                    Got a question, a project idea, or just want to say hi? Don't hesitate! I'm all ears for any kind of inquiry or discussion. Feel free to drop me a message anytime. Looking forward to hearing from you!
                                </p>
                                <ContactForm />
                            </div>
                        </div>

                        <ThreeDPlane modelName="contact" />
                    </div>
                    <div className="info-list-horizontal">

                        <div className="info-list-item">
                            <div className="header-line"></div>
                            <h4>THE POWER OF CLEAR COMMUNICATION</h4>
                            <p>
                                I firmly believe that clear, efficient, and respectful communication is the cornerstone of all successful interactions. Whether it's a quick query or a deep discussion, I value and strive for clarity and understanding in every exchange. Let's connect and share ideas effectively - because great things happen when we communicate well!
                            </p>
                        </div>

                    </div>
                </div >
            </>
        );
    }
}
export default ContactPage;
