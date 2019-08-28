import React, { Component } from "react";
import Slider from "react-slick";

import './slickTheme.css'
import './slick.css'

import { Tooltip } from 'antd';
import 'antd/dist/antd.css';


export default class CarroselComponent extends Component {
  render() {
    const settingsImg = {
      infinite: true,
      slidesToShow: window.innerWidth > 700 ? 3 : 2,
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
            {this.props.listImg.map(obj => {
              return (
                <Tooltip title={obj.title}>
                  <img class="teste" style={{ width: "70%" }} src={obj.img} />
                </Tooltip> 
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
                <Tooltip>
                  <p className="descricao" style={{ textAlign: 'center' }}>
                    {c.comentario}
                  </p>
                  <p className="descricao center">
                    {c.agradecimento}
                  </p>

                  <p className="descricao font-orange center">

                    {c.ass}
                  </p>
                </Tooltip>
                
              )
            })}
          </Slider>
        </div>
      )
    }
  }
}