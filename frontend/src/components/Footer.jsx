import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import '../css/footer.css'
import wow from "../assets/wow.png";
import dscLogo from "../assets/dscLogo.png";
import { Link } from "react-scroll";

function Footer() {
    function toTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <footer className="footer__main">
                <div className="footer__left">
                    <img className="footer__dscLogo" src={dscLogo} alt=""></img>
                    <img className="footer__wowLogo" src={wow} alt=""></img>
                    <div className="footer__media">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
                <div className="footer__right">
                    <div className="footer__rightRight">
                        <Link to="home" spy={true} smooth={true}>
                            <h2>Home</h2>
                        </Link>
                        <Link to="timeline" spy={true} smooth={true}>
                            <h2>Timeline</h2>
                        </Link>
                    </div>
                    <div className="footer__rightLeft">
                        <Link to="speakers" spy={true} smooth={true}>
                            <h2>Speakers</h2>
                        </Link>
                        <Link to="faq" spy={true} smooth={true}>
                            <h2>FAQ</h2>
                        </Link>
                    </div>

                </div>
            </footer>
            <div onClick={toTop} className="footer__topBtn">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 15l-5.247-6.44-5.263 6.44-.737-.678 6-7.322 6 7.335-.753.665z" /></svg>
            </div>
        </>

    )
}

export default Footer