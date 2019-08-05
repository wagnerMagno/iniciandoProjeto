import React from "react";
import MenuComponentStyled from "./MenuStyled";

import { Link, Redirect } from "react-router-dom";
import { runInThisContext } from "vm";


export default class MenuComponent extends React.Component {

    constructor(props){
        super(props);


        this.animatioMenu = this.animatioMenu.bind(this);
    }

    animatioMenu(path){
        this.props.updateDisplayMenu();
        this.props.setRoute(path);
    }

    render() {
        console.log("this.state.route ", this.props.route);
        if(this.props.route !== ""){
            return <Redirect to={this.props.route}/> 
        }

        return (
            <MenuComponentStyled className={this.props.className}>
                <h2>
                    Menu
                </h2>

                <div  className="link" onClick={() => this.animatioMenu("/")}>
                    Home
                </div>

                <div className="link"  onClick={() => this.animatioMenu("/o-que-fazemos")}>
                    O que fazemos?
                </div>

                <div className="link" onClick={() => this.animatioMenu("/quem-somos")}>
                    Quem Somos?
                </div>
            </MenuComponentStyled>
        )
    }

}