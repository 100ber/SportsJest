import React, { Component } from 'react'
import Header from './header';
import Header2 from './header2';
import { F,F2 } from './funccomp';

export default class HeadRend extends Component {
constructor(){
    super();
    this.state={
        a: 1
    }
}

Loadi =()=>{
    if(this.state.a==1){
        this.setState({a:0})
    }
    else{
        this.setState({a:1})
    }
}

  render() {
    if(this.state.a ==1){
    return (<div>
        <div id="mode" align="right">
<button id="modbtn" onClick={this.Loadi}><input type="checkbox" id="toggle-two"></input></button>
    </div>
    <Header></Header>
    <F></F>
    </div>
    )}
    return(
        <div>
        <div id="mode" align="right">
<button id="modbtn" onClick={this.Loadi}><input type="checkbox" id="toggle-two"></input></button>
    </div>
    <Header2></Header2>
    <F2></F2>
    </div>
    )
  }
}
