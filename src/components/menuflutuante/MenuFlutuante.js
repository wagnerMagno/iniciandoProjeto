import React from "react";

import { Link, Redirect } from "react-router-dom";
import { runInThisContext } from "vm";
import MenuFluanteComponentStyled from "./MenuFlutuanteStyled";


export default class MenuFlutuante extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colorHover: false,
            route: ""
        }

        this.animatioMenu = this.animatioMenu.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    animatioMenu(path) {

        if (this.props.animatioMenu) {
            this.props.animatioMenu(path)
        } else {
            this.setState({
                route: path
            })
        }
    }

    handleHover() {
        this.setState({
            colorHover: !this.state.colorHover
        })
    }

    render() {

        if (this.state.route !== "") {
            return <Redirect to={this.state.route} />
        }

        return (
            <MenuFluanteComponentStyled onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={this.props.className}>
                <div style={{ marginBottom: '30px' }} className={this.state.colorHover ? "color-hover" : ""} onClick={() => this.animatioMenu("/")} >
                    <p>
                        Home
                    </p>
                </div>
                <div style={{ marginBottom: '30px' }} className={this.state.colorHover ? "color-hover" : ""} onClick={() => this.animatioMenu("/sobre-nos")}>
                    <p>
                        Sobre Nós
                    </p>
                </div>
                <div style={{ marginBottom: '30px' }} className={this.state.colorHover ? "color-hover" : ""} onClick={() => this.animatioMenu("/tradi-final")}>
                    <p>
                        Tradi Final
                    </p>
                </div>
                <div style={{ marginBottom: '30px' }} className={this.state.colorHover ? "color-hover" : ""} onClick={() => this.animatioMenu("/digio-final")}>
                    <p>
                        Digio Final
                    </p>
                </div>

                {
                    window.innerWidth < 700 && this.props.displayMenu == "display-block" ?


                        <div>

                            <p className="link-menu">TIME</p>
                            <p className="link-menu">LIGAMOS PARA VOCÊ</p>
                            <p className="link-menu">CHAT</p>
                            <p className="link-menu selected">ADMINISTRAÇÃO DE CONDOMÍNIOS</p>
                            <p className="link-menu">ADMINISTRAÇÃO DIGITAL</p>
                            <p className="link-menu">JÁ SOU CLIENTE</p>
                        </div>
                        :
                        ''

                }
            </MenuFluanteComponentStyled>
        )
    }

}