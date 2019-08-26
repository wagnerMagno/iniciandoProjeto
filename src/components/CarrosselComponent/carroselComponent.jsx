import React, { Component } from "react";
import Slider from "react-slick";

import './slickTheme.css'
import './slick.css'

export default class CarroselComponent extends Component {
  render() {
    const settings = {
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
    return (
      <div style={{marginBottom: "35px"}}>
        <Slider {...settings}>
          {this.props.listImg.map( img => {
            return(
            <div >
                <img style={{width: "63%"}}  src={img} />
            </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}