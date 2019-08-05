import React from "react";
import { Route } from "react-router-dom";

import "./styles.css";
import SwitchWithSlide from "../switchWithSlide/SwitchWithSlide.js";
import ContainerComponentStyled from "./ContainerComponentStyled";


const cssHeigth = {
    height: "1px",
}

const cssHeightTotal = {
    height: "100%"
}

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heightTotal: true, 
            width: 0, 
            height: 0 
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }


    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    setHeight(props) {
        if (props && this.state.heightTotal) {
            this.setState({ heightTotal: false })
        } else if (!props && !this.state.heightTotal) {
            this.setState({ heightTotal: true })
        }
    }



    render() {
        const SwitchComponent = SwitchWithSlide;

        console.log("wag ", this.state.width);

        return (
            <React.Fragment>
                <ContainerComponentStyled className={this.props.className} style={this.state.heightTotal ? cssHeightTotal : cssHeigth}>
                    <SwitchComponent>
                        TESTE

                        <Route
                            path="/o-que-fazemos"
                            render={() => {
                                this.setHeight();
                                return (
                                    <div className="link">
                                        O que fazemos?
                                                         </div>
                                )
                            }}
                        />
                        <Route
                            path="/quem-somos"
                            render={() => {
                                this.setHeight();
                                return (
                                    <div className="link">
                                        Quem Somos?
                                    </div>
                                )
                            }}
                        />

                        <Route
                            path="/"
                            render={() => { if (this.state.width < 700) { this.setHeight() } else this.setHeight("/") }}
                        />
                    </SwitchComponent>
                </ContainerComponentStyled>

            </React.Fragment>
        );
    }
}
