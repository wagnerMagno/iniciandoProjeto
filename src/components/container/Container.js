import React from "react";
import { Route } from "react-router-dom";

import "./styles.css";
import SwitchWithSlide from "../switchWithSlide/SwitchWithSlide.js";
import ContainerComponentStyled from "./ContainerComponentStyled";
import SobreNosComponent from "../sobreNos/sobreNos";
import FooterComponent from "../footer/footerComponent";
import HomeComponent from "../home/home";
import TradiFinalComponent from "../tradiFinal/tradiFinal";
import DigiFinalComponent from "../digiFinal/digiFinal";


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
    paddingTop: "18px"
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
    borderTop: "1px solid #b4b4b4",
    paddingTop: "18px"
}

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heightTotal: true,
            width: 0,
            height: 0,
            isHome: false, 
            isSafari : Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > -1
        }
        this.props.setHome(this.state.isHome);

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.setHome = this.setHome.bind(this);

        console.log("getBrowserInfo ", this.getBrowserInfo());

    }

    getBrowserInfo() {
        var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
       
        var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
        var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
       
        var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
        var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
        if (isOpera) {
            return 1;
        }
        else if (isFirefox) {
            return 2;
        }
        else if (isChrome) {
            return 3;
        }
        else if (isSafari) {
            return 4;
        }
        else if (isIE) {
            return 5;
        }
        else {
            return 0;
        }
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

    setHome(op) {
        if (op !== this.state.isHome) {
            this.props.setHome(op);
            this.setState({
                isHome: op
            })
        }

    }



    render() {
        const SwitchComponent = SwitchWithSlide;

        return (
            <div>
               

                {
                    window.innerWidth > 700 ?
                        <div style={this.state.isHome ? footerTransparent : footerBackGround} >

                            <FooterComponent />
                        </div>
                        :
                        <div style={this.state.isHome ? footerTransparent : footerBackGround} > 
                            {this.getBrowserInfo() + ''}
                            {(this.getBrowserInfo() == 4 || this.getBrowserInfo() == 0 ) + ' }}} '}
                            {this.state.isSafari + ''}
                        </div>
                }

                <ContainerComponentStyled className={this.props.className + " testeContainer"} style={this.state.heightTotal ? cssHeightTotal : cssHeigth}>
                    <SwitchComponent >

                                    <div  className={"link "}>
                                        <SobreNosComponent />
                                    </div>
                        {/* <Route
                            path="/sobre-nos"
                            render={() => {
                                this.setHome(false);
                                return (
                                    <div  className={"link "}>
                                        <SobreNosComponent />
                                    </div>
                                )
                            }}
                        />
                        <Route
                            path="/tradi-final"
                            render={() => {
                                this.setHome(false);
                                this.setHeight();
                                return (
                                    <div style={{height: "2000px"}}className="link" >
                                        <TradiFinalComponent ></TradiFinalComponent>
                                    </div>
                                )
                            }}
                        />
                        <Route
                            path="/digio-final"
                            render={() => {
                                this.setHome(false);
                                this.setHeight();
                                return (
                                    <div className="link">
                                        <DigiFinalComponent />
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
                                        <HomeComponent />
                                    </div>
                                )
                            }}
                        /> */}
                    </SwitchComponent>
                
                </ContainerComponentStyled>

            </div>
        );
    }
}
