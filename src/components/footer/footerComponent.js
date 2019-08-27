import React from "react";
import FooterStyled from "./footerStyled";



export default class FooterComponent extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
            <FooterStyled className={this.props.className}>
              <p className="link">TIME</p>
              <p className="divisor">|</p>  
              <p className="link">LIGAMOS PARA VOCÊ</p>
              <p className="divisor">|</p>  
              <p className="link">CHAT</p>
              <p className="divisor">|</p>  
              <p className="link selected">ADMINISTRAÇÃO DE CONDOMÍNIOS</p>
              <p className="divisor">|</p>  
              <p className="link">ADMINISTRAÇÃO DIGITAL</p>
              <p className="divisor">|</p>  
              <p className="link">JÁ SOU CLIENTE</p>
            </FooterStyled>
        )
    }

}