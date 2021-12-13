import React from 'react';
import './index.css';

const Footer = ({ text }) => {
  return (
    <div className={`footer`}>
      {
        text ? <span className={`footer__text footer__text--small`}>{text}</span> : <span className={`footer__text footer__text--big`}>H</span>
      }
    </div>
  );
};


export default Footer;
