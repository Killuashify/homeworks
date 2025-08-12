import React from "react";
import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contacts">
        <a
          href="mailto:atletstas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon" /> atletstas@gmail.com
        </a>
        <a href="tel:+380977575137" target="_blank" rel="noopener noreferrer">
          <FaPhoneAlt className="icon" /> +380 97 757 5137
        </a>
        <a
          href="https://t.me/stasyanyoyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className="icon" /> Telegram
        </a>
        <a
          href="https://instagram.com/1337stas1337"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" /> Instagram
        </a>
        <a href="will be soon..." rel="noopener noreferrer">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
      </div>
    </footer>
  );
}
