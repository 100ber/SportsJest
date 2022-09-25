import React, { Component } from 'react'
 
export default class Header extends Component {
constructor(){
    super();
    this.state={
        name: "S J",
    }
    this.changeS()
}
 
changeS =()=>{
    setInterval(()=>{
    this.setState({name : "SPORTS JEST"});},3000)
 
}
 

  render() {
    return (
     
     
 

   











       
   
 
<div class="animation">
 
<nav class = "navbar navbar-expand-lg navbar-dark heads " id="hite">




        <a class = "navbar-brand" id="logo">{this.state.name}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
       
     
        <ul class = "navbar-nav ms-auto">
            <li class = "nav-item dropdown">
                <a class="lin dropdown-toggle" role="button" aria-expanded="false">Sports</a>
 
                <ul class="dropdown-menu" >
            <li><a class="dropdown-item" href="#">Football</a></li>
            <li><a class="dropdown-item" href="#">Cricket</a></li>
            <li><a class="dropdown-item" href="#">Basketball</a></li>
            <li><a class="dropdown-item" href="#">F1</a></li>
            <li><a class="dropdown-item" href="#">Kabaddi</a></li>
          </ul>
 
            </li>
            <li class = "nav-item">
                <a class="lin">Community</a>
            </li>
            <li class = "nav-item ">
                <a class="lin">Services</a>
            </li>
 
            <li class = "nav-item ">
                <a class="lin">Login/SignUp</a>
            </li>
 
        </ul>
        </div>
    </nav>
 

</div>
 
    )
  }
}
