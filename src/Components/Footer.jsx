import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const today = new Date()
  return (
    <footer className="bg-white text-[#1f1f1f] py-2 text-sm">
      <div className="container mx-auto text-center font-normal">
        <p>© {today.getFullYear()} SwiftCoda. All rights reserved. </p>
        {/* <p className='text-sm'> Powered By <a target='_blank' href='https://www.encoremnd.com'><span className='underline font-normal'>Encore Marketing and Development</span></a></p> */}
      </div>
    </footer>
  );
};

export default Footer;