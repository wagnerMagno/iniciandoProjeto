import React from "react";
import FooterStyled from "./footerStyled";



export default class FooterComponent extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
            <FooterStyled className={this.props.className}>
              teste
            </FooterStyled>
        )
    }

}