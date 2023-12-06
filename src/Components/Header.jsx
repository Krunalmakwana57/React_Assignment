import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const Header = memo(() => {
  return (
    <div>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid header_top_container">
            <div className="lang_box dropdown">
              <a
                href="#"
                title="Language"
                className="nav-link"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <img
                  src="images/flag-uk.png"
                  alt="flag"
                  className=" "
                  title="United Kingdom"
                />{" "}
                <i className="fa fa-angle-down " aria-hidden="true" />
              </a>
              <div className="dropdown-menu ">
                <a href="#" className="dropdown-item">
                  <img src="images/flag-france.png" className alt="flag" />
                </a>
              </div>
              <span>English</span>
            </div>
            <div className="contact_nav">
              <a href>
                <i className="fa fa-phone" aria-hidden="true" />
                <span>Call : +01 123455678990</span>
              </a>
              <a href>
                <i className="fa fa-envelope" aria-hidden="true" />
                <span>Email : demo@gmail.com</span>
              </a>
              <a href>
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>Location</span>
              </a>
            </div>
            <div className="social_box">
              <a href>
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  ">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/service">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      {" "}
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/project">
                      Project
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/testimonial">
                      Testimonial
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      {" "}
                      Login
                    </NavLink>
                  </li>
                  <form className="form-inline">
                    <button
                      className="btn  my-2 my-sm-0 nav_search-btn"
                      type="submit"
                    >
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </ul>
                <div className="quote_btn-container">
                  <a href className="quote_btn">
                    Get A Quote
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
});

export default Header;
