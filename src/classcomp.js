import React, { Component } from 'react'

export default class ClassComp extends Component {
 
    constructor(props){
        super();
        console.log("Constructor");
        this.state= {
            name : "Sasuke"
        }
    };

    changeS =()=>{
        this.setState({name : this.props.name});
    }



  render() {
    return (
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.changeS}>Change</button>
        </div>
    )
  }
}
