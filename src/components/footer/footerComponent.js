import React from "react";
import FooterStyled from "./footerStyled";

import { Link, Redirect } from "react-router-dom";
import { runInThisContext } from "vm";
import MenuFlutuante from "../menuflutuante/MenuFlutuante";


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