import React, { Component } from 'react'
 
export default class Header2 extends Component {
constructor(){
    super();
    this.state={
        name: "E-S J",
    }
    this.changeS()
}
 
changeS =()=>{
    setInterval(()=>{
    this.setState({name : "E-Sports Jest"});},3000)
 
}
  render() {
    return (
      <div class="animation2">
 
      <nav class = "navbar navbar-expand-lg navbar-dark heads " id="hite">
     
     
     
     
          <a class = "navbar-brand" id="logo">{this.state.name}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
         
         
          <ul class = "navbar-nav ms-auto">
            <li class = "nav-item ">
              <a class = "lin"  >E-Sports</a>
            </li>
            <li class = "nav-item pad">
              <a class = "lin" >Community</a>
            </li>
            <li class = "nav-item pad">
              <a class = "lin" >Services</a>
            </li>
            <li class = "nav-item pad">
              <a class = "lin" >Login/SignUp</a>
            </li>
          </ul>
          </div>
        </nav>
     
     
      </div>
    )
  }
}
 