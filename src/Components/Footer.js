import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        {/*<!--  Effect 1  -->*/}
        <ul className="effect_1">
          <li>
            <a
              href="https://www.fiverr.com/keerthana_anand?up_rollout=true"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/KeerthanaAnandan" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kay.kodes/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/keerthana-anandan/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
        {/*<!-- Effect 2  -->
        <ul className="effect_2">
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-google-plus"></i>
            </a>
          </li>
        </ul>*/}
      </div>
      <div>
        <h4 className="text-center"> Keerthana Anandan &copy;2021 </h4>
      </div>
    </div>
  );
}

export default Footer;
