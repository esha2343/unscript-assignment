import React from 'react';
import '../components/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                    <img className='logo-img'  src="src/img/logo.webp" alt="Logo" />
                        <div className="footer-address">
                            <p>2nd Floor, #295, 7th Cross Rd, RWD Quarters, 1st Sector, HSR Layout,</p>
                            <p>Bengaluru, Karnataka 560102</p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Usecase</h4>
                            <ul>
                                <li>Learning and Development</li>
                                <li>Marketing Teams</li>
                                <li>Personalized videos</li>
                                <li>Dubbing</li>
                                <li>Customer Service</li>
                                <li>Enterprise</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Features</h4>
                            <ul>
                                <li>AI Avatars</li>
                                <li>Video Dubbing</li>
                                <li>AI Face Swap</li>
                                <li>Customized Virtual Influencer</li>
                                <li>Video Personalization</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Blogs</li>
                                <li>Support</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li>About us</li>
                                <li>Contact</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright © 2024 UnscriptAI</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
