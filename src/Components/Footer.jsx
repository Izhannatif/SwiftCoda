import React from 'react';
    import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const today = new Date()
  return (
    <footer className="bg-white text-[#1f1f1f] py-3">
      <div className="container mx-auto text-center font-normal">
        <p>© {today.getFullYear()} SwiftCoda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;