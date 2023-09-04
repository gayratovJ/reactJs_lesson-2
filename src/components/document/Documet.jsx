import React, { Component } from "react";
import Slider from "react-slick";
import "./Doc.module.css";
import photo from "../../assets/image 7.png";
import photo2 from "../../assets/image 8.png";
import photo3 from "../../assets/image 9.png";
import photo4 from "../../assets/image 10.png";
import photo5 from "../../assets/image 11.png";

export default class Document extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2> Качество продукции подтверждают сертификаты</h2>
        <Slider {...settings}>
          <div>
            <img src={photo} alt="" />
          </div>
          <div>
            <img src={photo2} alt="" />
          </div>
          <div>
            <img src={photo3} alt="" />
          </div>
          <div>
            <img src={photo4} alt="" />
          </div>
          <div>
            <img src={photo5} alt="" />
          </div>
          <div></div>
        </Slider>
      </div>
    );
  }
}
