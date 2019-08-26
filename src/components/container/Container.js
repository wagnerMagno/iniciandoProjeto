import React from "react";
import { Route } from "react-router-dom";

import "./styles.css";
import SwitchWithSlide from "../switchWithSlide/SwitchWithSlide.js";
import ContainerComponentStyled from "./ContainerComponentStyled";
import SobreNosComponent from "../sobreNos/sobreNos";
import FooterComponent from "../footer/footerComponent";
import HomeComponent from "../home/home";


const cssHeigth = {
    height: "1px",
}

const cssHeightTotal = {
    height: "100%"
}

const footerBackGround = {
    position: "absolute",
    zIndex: "3",
    cursor: "pointer",
    width: "100%",
    marginLeft: "0",
    backgroundColor: "black",
    bottom: "0",
    color: "white",
    height: "43px",
    textAlign: "center",
}
const footerTransparent = {
    position: "absolute",
    zIndex: "3",
    cursor: "pointer",
    width: "100%",
    marginLeft: "0",
    backgroundColor: "transparent",
    bottom: "0",
    color: "white",
    height: "43px",
    textAlign: "center",
    borderTop : "1px solid #b4b4b4", 
    paddingTop: "18px"
}

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heightTotal: true,
            width: 0,
            height: 0, 
            isHome : false
        }
        this.props.setHome(this.state.isHome); 
         
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.setHome = this.setHome.bind(this);
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

    setHome(op){
        console.log("props containe ", this.props.setHome);
        if(op !== this.state.isHome){
            console.log("props containe ", this.props.setHome);
            this.props.setHome(op); 
            this.setState({
                isHome : op
            })
        }

    }



    render() {
        const SwitchComponent = SwitchWithSlide;

        return (
            <div>
                <div style={this.state.isHome ? footerTransparent : footerBackGround} >teste </div>

                <ContainerComponentStyled className={this.props.className} style={this.state.heightTotal ? cssHeightTotal : cssHeigth}>
                    <SwitchComponent>

                        <Route
                            path="/sobre-nos"
                            render={() => {
                                this.setHome(false);
                                return (
                                    <div className="link">
                                        <SobreNosComponent />
                                    </div>
                                )
                            }}
                        />
                        <Route
                            path="/quem-somos"
                            render={() => {
                                this.setHome(false);
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
                            render={() => {
                                this.setHome(true);
                                
                                return (
                                    <div className="home">
                                        <HomeComponent/>
                                    </div>
                                )
                            }}
                        />
                    </SwitchComponent>
                </ContainerComponentStyled>

            </div>
        );
    }
}
