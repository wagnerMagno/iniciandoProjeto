import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";
import Container from './components/container/Container';
import VideoComponent from './components/video/VideoComponent';
import MenuComponent from './components/menu/MenuComponent';


import IconMenu from "./images/menu.svg";
import IconClose from "./images/close.svg";

import IconMenuWhite from "./images/menu-white.svg";
import IconCloseWhite from "./images/close-white.svg";


const icon = {
  marginRight: "4px",
  width: "22px",
  position: "absolute",
  margin: "14px",
  zIndex : 3, 
  cursor : "pointer"
}

const footer={
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
class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state={
      displayMenu : "display-none", 
      containerWidth : "container-total", 
      route : "", 
      isHome : true
    }
    
    this.updateDisplayMenu = this.updateDisplayMenu.bind(this)
    this.setRoute = this.setRoute.bind(this)
    this.setHome = this.setHome.bind(this)
  }

  updateDisplayMenu(){
    if(this.state.displayMenu === "display-none"){
      this.setState({displayMenu : "display-block", containerWidth :  "container-left", route:"" })
    }else{
      this.setState({displayMenu : "display-none", containerWidth : "container-total"})
    }
  }

  setRoute(route){
    this.setState({
      route: route
    })
  }

  setHome(op){
    console.log("props wag ", op);
    this.setState({
      isHome: op
    })
  }

  render() {
    return (

      <HashRouter>
        {this.state.isHome ?
          <img onClick={this.updateDisplayMenu} style={icon} className="icon" alt="" src={this.state.displayMenu === "display-none" ? IconMenuWhite : IconCloseWhite} />
          :
          <img onClick={this.updateDisplayMenu} style={icon} className="icon" alt="" src={this.state.displayMenu === "display-none" ? IconMenu : IconClose} />
        
        }
        <MenuComponent setRoute={this.setRoute} route={this.state.route} updateDisplayMenu={this.updateDisplayMenu} className={this.state.displayMenu} />
        <VideoComponent />
        <Container isHomeApp={this.state.isHome} setHome={(op) => this.setHome(op)} className={this.state.containerWidth}/>
      </HashRouter>
    )

  };
}

export default App;
