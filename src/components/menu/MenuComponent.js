import React from "react";
import MenuComponentStyled from "./MenuStyled";

import { Link, Redirect } from "react-router-dom";
import { runInThisContext } from "vm";
import MenuFlutuante from "../menuflutuante/MenuFlutuante";


export default class MenuComponent extends React.Component {

    constructor(props) {
        super(props);


        this.animatioMenu = this.animatioMenu.bind(this);
    }

    animatioMenu(path) {
        this.props.updateDisplayMenu();
        this.props.setRoute(path);
    }

    render() {
        if (this.props.route !== "") {
            return <Redirect to={this.props.route} />
        }

        return (
            <MenuComponentStyled className={this.props.className}>
                <h2>
                    Menu
                </h2>

                <MenuFlutuante animatioMenu={this.animatioMenu}></MenuFlutuante>
            </MenuComponentStyled>
        )
    }

}