import React from "react";
import "./Header.css";

const Header = () => {
  return (
  <section className="h-wrapper">
      <div className="flexCenter  h-container">
        <img src="./log.png" width={100}></img>
        <div className="flexCenter  h-contact ">
          <b>
            <a href="https://wa.me/7814846829" target="blank">
              <i class="fa fa-whatsapp" width={500}></i>
            </a>
          </b>
          <b>
            <a href=""> 73802-89999</a>
          </b>
        </div>
        <div className="flexCenter  h-contact">
          Email :
          <b>
            <a href="">goyal.traders@gmail.com</a>
          </b>
        </div>
        <div className="flexCenter paddings centerWidth  h-contact h-social ">
          <b>
            <a
              href="https://www.facebook.com/GoyalAssociates30/"
               class="btn btn-outline-blue btn-floating m-1" role="button">
              <i class="fa fa-facebook"></i>
            </a>
          </b>
          <b>
            <a
              href="https://www.instagram.com/p/Cu8kjpyL3Kx/?igshid=MzRlODBiNWFlZA=="
              class="btn btn-outline-blue btn-floating m-1" role="button"
              
            >
              <i class="fa fa-instagram"></i>
            </a>
          </b>
          <b>
            <a href="https://www.linkedin.com/in/goyal-associates-3b7b9b259/"  class="btn btn-outline-blue btn-floating m-1" role="button">
              <i class="fa fa-linkedin"></i>
            </a>
          </b>
        </div>
      </div>

      <div class="menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="" class="Services">
              Services
            </a>
            <ul>
              <li>
              
                <a href="#" class="loan">Loan</a>
                <ul class="submenu">
                  <li>
                    <a href="#">Personal Loan</a>
                  </li>
                  <li>
                    <a href="#">Home Loan</a>
                  </li>
                  <li>
                    <a href="#">Property Loan</a>
                  </li>
                  <li>
                    <a href="#">Educational Loan</a>
                  </li>
                  <li>
                    <a href="#">Unsecured Loan</a>
                  </li>
                  
                </ul>
              </li>
              <li>
                <a href="#" >Insurance</a>
                <ul class="submenu1">
                <li>
                    <a href="#">Life Insurance</a>
                  </li>
                  <li>
                    <a href="#">Health Insurance</a>
                  </li>
                  <li>
                    <a href="#">Motor Insurance</a>
                  </li>
                  <li>
                    <a href="#">Travel Insurance</a>
                  </li>
                  <li>
                    <a href="#">Investment Plan</a>
                  </li>

                </ul>

              </li>
              <li>
                <a href="#">Credit Card</a>
              </li>
              <li>
                <a href="/">Study Abroad</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
