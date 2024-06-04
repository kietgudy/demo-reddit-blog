import React from "react";
import "./Footer.css";

const Footer = (props) => {
  const { isOpenPost, setIsOpenPost } = props;
  return (
    <footer>
      <div onClick={() => setIsOpenPost(!isOpenPost)} className="footer-title">
        {isOpenPost ? "-" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
