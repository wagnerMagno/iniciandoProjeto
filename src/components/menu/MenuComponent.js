import React from "react";
import MenuComponentStyled from "./MenuStyled";

import { Link } from "react-router-dom";


export default class MenuComponent extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <MenuComponentStyled className={this.props.className}>
                <h2>
                    Menu
                </h2>

                <Link className="link" to="/">
                    Home
                </Link>

                <Link className="link" to="/o-que-fazemos">
                    O que fazemos?
                </Link>

                <Link className="link" to="/quem-somos">
                    Quem Somos?
                </Link>
            </MenuComponentStyled>
        )
    }

}