import React from 'react';
import footerContent from "../../api/footerApi.json";
import { MdPlace } from 'react-icons/md';
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    TbMailPlus: <TbMailPlus />,
    IoCallSharp: <IoCallSharp />
  };

  return (
    <footer className='footer-section bg-gray-800 text-white py-10'>
      <div className='container mx-auto grid md:grid-cols-3 gap-8 px-6'>
        {footerContent.map((currData, idx) => {
          const { icon, title, details } = currData;
          return (
            <div className='footer-contact flex gap-4 items-start' key={idx}>
              <div className='icon text-3xl'>{footerIcon[icon]}</div>
              <div className='footer-contact-text'>
                <p className='font-bold'>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className='copyright-area mt-10 border-t border-gray-600 pt-6'>
        <div className="container mx-auto grid md:grid-cols-2 gap-6 px-6">
          <div className="copyright-text">
            <p>
              © 2025, All Rights Reserved |{" "}
              <NavLink to="https://www.linkedin.com/in/sudhirmhamane/" className="text-blue-400 hover:underline">LinkedIn</NavLink>
            </p>
          </div>

          <div className="footer-menu">
            <ul className="flex gap-6 justify-end">
              <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
              <li><NavLink to="/country" className="hover:underline">Country</NavLink></li>
              <li><NavLink to="/contact" className="hover:underline">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
