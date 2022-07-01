import React, { useState, useEffect, useRef } from "react";
// import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import "../src/sass/style.scss";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  const toggleLink = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linkHeight = linkRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linkContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linkContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='www.google.com' className='logo'>
            E_ahmed
          </a>
          <button className='nav-toggle' onClick={toggleLink}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linkContainerRef}>
          <ul className='links' ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
