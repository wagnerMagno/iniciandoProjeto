import React from 'react';
import './App.css';
import { HashRouter } from "react-router-dom";
import Container from './components/container/Container';
import VideoComponent from './components/video/VideoComponent';
import MenuComponent from './components/menu/MenuComponent';


import IconMenu from "./images/menu.svg";
import IconClose from "./images/close.svg";


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
      route : ""
    }
    
    this.updateDisplayMenu = this.updateDisplayMenu.bind(this)
    this.setRoute = this.setRoute.bind(this)
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


  render() {
    return (

      <HashRouter>
        <img onClick={this.updateDisplayMenu} style={icon} className="icon" alt="" src={this.state.displayMenu === "display-none" ? IconMenu : IconClose} />
        <MenuComponent setRoute={this.setRoute} route={this.state.route} updateDisplayMenu={this.updateDisplayMenu} className={this.state.displayMenu} />
        <VideoComponent />
        <Container className={this.state.containerWidth}/>
      </HashRouter>
    )

  };
}

export default App;
