import React from "react";
import "./style.css";
import logo from "../../logos/maveric-logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="mt-2">
          <div className="ml-2">
          <img src={logo}  />
          <ul class="nav justify-content-center">

              <li className="nav-item">
              <a className="nav-link disabled" href="#">
              <h6 className="text-center" style={{ color: "white" }}>
              @Copyright, Maveric Systems Ltd 2022</h6>
                </a>
              </li>
              </ul>
            
          </div>
        </div>
     
    </footer>
  );
};

export default Footer;
