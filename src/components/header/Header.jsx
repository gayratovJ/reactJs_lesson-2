import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import Carousel from "../carousel/HeaderCarousel";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <ul>
              <li>
                <a href="#!">Products</a>
              </li>
              <li>
                <a href="#!">Sersificates</a>
              </li>
              <li>
                <a href="#!">Our command</a>
              </li>
              <li>
                <a href="#!">About us</a>
              </li>
              <li>
                <a href="#!">News</a>
              </li>
              <li>
                <a href="#!">Vocation</a>
              </li>
              <li>
                <a href="#!">Contacts</a>
              </li>
            </ul>
            <div className="mode">
              <i className="fa fa-moon dark"></i>
              <i className="fa fa-sun light"></i>
            </div>
          </div>
        </nav>
        <Fragment>
          <Carousel/>
        </Fragment>
      </header>
    );
  }
}

export default Header;
