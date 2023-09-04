import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.module.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      // <div className="container">
      <div>
        <Slider {...settings}>
          <div>
            <div className="main-png">
              <div className="container">
                <div className="col-6">
                  <p>LEANGROUP - тубы и этикетки</p>
                  <h3>Ламинатные тубы</h3>
                  <p className="text">
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и (DIY Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="main-png">
              <div className="container">
                <div className="col-6">
                  <p>LEANGROUP - тубы и этикетки</p>
                  <h3>Ламинатные тубы</h3>
                  <p className="text">
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и (DIY Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="main-png">
              <div className="container">
                <div className="col-6">
                  <p>LEANGROUP - тубы и этикетки</p>
                  <h3>Ламинатные тубы</h3>
                  <p className="text">
                    Используются для производства зубных паст. Широко
                    применяются в сегменте косметики, пищевой индустрии,
                    парафармацевтике, бытовой химии и (DIY Do-it-Yourself).
                  </p>
                  <button>Каталог</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      // </div>
    );
  }
}
