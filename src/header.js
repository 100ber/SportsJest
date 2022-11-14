import React, { Component } from 'react'
import axios from 'axios';
import Mcontent from './mcontent';

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
    this.setState({name : "SPORTS JEST"});},1500)

}


newsfetch=(value,p)=>{
	var root=document.getElementById("newr");
	var ne=value+" News";
	root.innerHTML="<h1>"
	root.innerHTML+=ne;
	root.innerHTML+="</h1>"
	for(var i=1;i<=10;i++){
		var a=document.createElement("div");
		a.className="card";
		var b=document.createElement("div");
		b.className="card-header";
		b.align="left";
		b.innerHTML=value;
		a.appendChild(b);
		var c=document.createElement("div");
		c.className="row";
		var d=document.createElement("div");
		var e=document.createElement("div");
		d.className="col-3";
		e.className="col-9";
		var im=document.createElement("img");
		im.src=p.articles[i].urlToImage;
		 im.className="newim" ;
		d.appendChild(im);
		var f=document.createElement("div");
		f.className="card-body";
		f.align="left";
		var g=document.createElement("h5");
		g.innerHTML=p.articles[i].title;
		g.className="card-title";
		f.appendChild(g);
		var h=document.createElement("p");
		h.className="card-text";
		var ir=document.createElement("h3");
		ir.innerHTML=p.articles[i].description;
		h.appendChild(ir);
		f.appendChild(h);
		var j=document.createElement("a");
		j.className="btn btn-primary";
		j.innerHTML="Read More..";
		f.appendChild(j);
		e.appendChild(f);
		c.appendChild(d);
		c.appendChild(e);
		a.appendChild(c);
	   root.appendChild(a);
	   var z=document.createElement("br");
	   root.appendChild(z);
	}
};

news =value =>()=>{
var s="https://newsapi.org/v2/everything?q=";
s+=value;
s+="&from=2022-09-20&sortBy=publishedAt&apiKey=a4f7119407b04313a000d593586d61e0";
	axios.get(s)
    .then(res => {
      var p = res.data;
      console.log(p.articles[1].title);
	  this.newsfetch(value,p);
    })
    .catch(error => console.log(error));


//https://newsapi.org/v2/everything?q=tesla&from=2022-09-20&sortBy=publishedAt&apiKey=a4f7119407b04313a000d593586d61e0
}

fservice=()=>{
	var a=document.getElementById("newr");
	axios.get('services.txt')
    .then(res => {
      var p = res.data;
	  a.innerHTML=p;
    })
    .catch(error => console.log(error));
}

 sh=()=>{
	document.getElementById("id01").style.display="block";
  }


 loadag =()=> {

	window.location.reload();

    };

	


  render() {
    return (
   
<div class="animation">

<nav class = "navbar navbar-expand-lg navbar-dark heads " id="hite">




		<a class = "navbar-brand" id="logo" onClick={this.loadag}>{this.state.name}</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
		
	 
		<ul class = "navbar-nav ms-auto">
			<li class = "nav-item dropdown">
				<a class="lin dropdown-toggle" role="button" aria-expanded="false">Sports</a>

				<ul class="dropdown-menu" >
            <li><a class="dropdown-item" onClick={this.news('Football')}>Football</a></li>
            <li><a class="dropdown-item"  onClick={this.news('Cricket')}>Cricket</a></li>
            <li><a class="dropdown-item"  onClick={this.news('Basketball')}>Basketball</a></li>
			<li><a class="dropdown-item"  onClick={this.news('Formula 1')}>F1</a></li>
			<li><a class="dropdown-item" onClick={this.news('Tennis')}>Tennis</a></li>
          </ul>

			</li>
			{/* <li class = "nav-item">
				<a class="lin">Community</a>
			</li> */}
			<li class = "nav-item ">
				<a class="lin" onClick={this.fservice}>Services</a>
			</li>

			<li class = "nav-item " id="lgp">
				<a class="lin" onClick={this.sh} id="lg">Login/SignUp</a>
			</li>

		</ul>
		</div>
	</nav>


</div>

    )
  }
}
