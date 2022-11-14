import React, { Component } from 'react'
import axios from 'axios';
export default class Orgs extends Component {

    
  render() {
    function upd(){
        console.log("HELLO");
var a=document.getElementById("selorg").value;
var b =document.getElementById("orgs");
var file1="h";
if(a==1){
file1= 'indorgs.txt'}
else{
file1='worldorgs.txt'}
axios.get(file1)
    .then(res => {
      var p = res.data;
      console.log(p);
      b.innerHTML=p;
    })
    .catch(error => console.log(error));
    };
    return (
        <div align="center" >
        <h1>Top Organisations : &nbsp;
        
        <select class="form-select sel" id="selorg" onChange={upd}>
          <option value="1">India</option>
          <option value="2">Worldwide</option>
        </select>
        
        
        </h1>
        <br></br>
        
        
        <br></br>
        <div id="orgs">


        <div class="row" >

<div class="col-lg-4 og"><br></br><img src="pics/sle.png" height="100vh"></img><br></br><br></br>SKYLIGHTZ GAMING</div>

<div class="col-lg-4 og"><br></br><img src="pics/gl.png" height="100vh"></img><br></br><br></br>GODLIKE</div>

<div class="col-lg-4 og"><br></br><img src="pics/s8ul.png" height="100vh"></img><br></br><br></br>S8UL</div>



  </div>

<br></br>

<div class="row">
<div class="col-lg-4 og"><br></br><img src="pics/tmayhem.png" height="100vh"></img><br></br><br></br>MAYHEM ESPORTS</div>

<div class="col-lg-4 og "><br></br><img src="pics/ge.png" height="100vh"></img><br></br><br></br>GLOBAL ESPORTS</div>
<div class="col-lg-4 og"><br></br><img src="pics/vlt.png" height="100vh"></img><br></br><br></br>VELOCITY GAMING</div>



  </div>

<br></br>
<br></br>



            </div>


            </div>
    )
  }
}
