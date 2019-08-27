import React, { Component } from "react";
import Slider from "react-slick";

import './slickTheme.css'
import './slick.css'

export default class CarroselComponent extends Component {
  render() {
    const settingsImg = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 1000,
      cssEase: "linear",
      centerMode: true,
      className: "center",

    };

    const settingsComenter = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    if (this.props.isImg) {

      return (
        <div className="div-img" style={{ marginBottom: "35px" }}>
          <Slider  {...settingsImg}>
            {this.props.listImg.map(img => {
              return (
                <div >
                  <img style={{ width: "70%" }} src={img} />
                </div>
              )
            })}
          </Slider>
        </div>
      )
    } else {
      return (

        <div className="div-comenter" style={{ marginBottom: "35px" }}>
          <Slider {...settingsComenter} className="slick-comenter">
            {this.props.listComentario.map(c => {
              return (
                <div>
                  <p className="descricao" style={{ textAlign: 'center' }}>
                    {c.comentario}
                  </p>
                  <p className="descricao center">
                    {c.agradecimento}
                  </p>

                  <p className="descricao font-orange center">

                    {c.ass}
                  </p>
                </div>
              )
            })}
          </Slider>
        </div>
          )
        }
      }
}