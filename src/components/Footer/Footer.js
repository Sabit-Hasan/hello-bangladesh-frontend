import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="top">
                        <h3>HelloBangladeshヅ</h3>
                        <div className="social">
                            <FaFacebook className="icon" />
                            <FaInstagram className="icon" />
                            <FaTwitter className="icon" />
                            <FaPinterest className="icon" />
                            <FaYoutube className="icon" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <ul>
                                <li>About</li>
                                <li>Partnerships</li>
                                <li>Careers</li>
                                <li>News</li>
                                <li>Advertising</li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>Contact</li>
                                <li>Teams</li>
                                <li>Policy</li>
                                <li>Privacy</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}