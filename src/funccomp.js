import React,{useEffect,useState} from 'react'
import Mcontent from './mcontent';
import Orgs from './orgs';
import axios from 'axios';
import Ql from './ql';
//props are data that are passes to one component to another, which is unidirectional and read-only
export default function FuncComp(props) {console.log(props);
  return (
    <div><h1>funccomp {props.na}</h1></div>
  )
} 


//  fdta =(root,d)=>{


//   // var root=document.getElementById("sr");
	
// 	for(var i=1;i<=4;i++){
// 		var a=document.createElement("div");
// 		a.className="cardh";
//     a.align="center";
// 		var b=document.createElement("div");
// 		b.className="cardhead";
//     var temp="data";
//     temp+=i;
// 		b.innerHTML=d.temp.title;
// 		a.appendChild(b);
// 		var c=document.createElement("div");
// 		c.className="row cardw";
// 		var d=document.createElement("div");
// 		var e=document.createElement("div");
//     var e2=document.createElement("div");
// 		d.className="col-lg-5";
// 		e.className="col-lg-2";
//     e2.className="col-lg-5";
// 		var im=document.createElement("img");
// 		im.src=d.temp.img1;
//     var im2=document.createElement("img");
// 		im2.src=d.temp.img2;
// 		 im.height="40px";
//      im2.height="40px";
//      var brk=document.createElement("br");
// 		d.appendChild(im);
//     d.appendChild(brk);
//     e2.appendChild(im2);
//     e2.appendChild(brk);
//     e.innerHTML="Vs";
//     d.innerHTML+=d.temp.t1;
//     e2.innerHTML+=d.temp.t2;
//     c.appendChild(d);
//     c.appendChild(e);
//     c.appendChild(e2);
//     a.appendChild(c);
// 		var f=document.createElement("div");
// 		f.className="results";
// 		f.align="center";
// 		f.innerHTML=d.temp.status;
//     a.appendChild(f);
//     root.appendChild(a);
	
// 	}

//    loadleft=(p)=>{
//     var a=document.getElementById("sr");
//     axios.get("data.json").then((res)=>{fdta(a,res.data)})
//        .catch(error => console.log(error))
//   }





export function F(){


  function cls(){
    document.getElementById("id01").style.display="none";
   }

   function login(){
    var a=document.getElementById("uname").value;
    var b=document.getElementById("ps").value;
    var r=document.getElementById("lg");
    axios.get("log.json").then((res)=>{
      var p=res.data;
      for(var i=0;i<p.length;i++){
        if(p[i].un===a && p[i].ps===b){
          console.log("match")
          r.innerHTML=a;
          cls()
        }
      }
    })
       .catch(error => console.log(error))

   }


 function fdta(da){

  var root=document.getElementById("sr");
	
 root.innerHTML="";
	for(var i=1;i<=da.length;i++){

    
   
    var t=i-1;
    
		var a=document.createElement("div");
		a.className="cardh";
    a.align="center";
		var b=document.createElement("div");
		b.className="cardhead";
		b.innerHTML=da[t].title;
		a.appendChild(b);
		var c=document.createElement("div");
		c.className="row cardw";
		var d=document.createElement("div");
		var e=document.createElement("div");
    var e2=document.createElement("div");
		d.className="col-lg-5";
		e.className="col-lg-2";
    e2.className="col-lg-5";
		var im=document.createElement("img");
		im.src=da[t].img1;
    var im2=document.createElement("img");
		im2.src=da[t].img2;
		 im.height="40";
     im2.height="40";
     var brk=document.createElement("br");
		d.appendChild(im);
    d.appendChild(brk);
    e2.appendChild(im2);
    e2.appendChild(brk);
    e.innerHTML="Vs";
    d.innerHTML+="<br>";
    d.innerHTML+=da[t].t1;
    e2.innerHTML+=da[t].t2;
    if(da[t].cat==='f'){
      d.innerHTML+="<br>";
      e2.innerHTML+="<br>";
      d.innerHTML+=da[t].s1;
      e2.innerHTML+=da[t].s2;
    }
    c.appendChild(d);
    c.appendChild(e);
    c.appendChild(e2);
    a.appendChild(c);
		var f=document.createElement("div");
		f.className="results";
		f.align="center";
    if(da[t].cat==='c'){
		f.innerHTML=da[t].status;}
    else if(da[t].cat==='f'){
      f.innerHTML=da[t].score;
    }
    a.appendChild(f);
    root.appendChild(a);
    console.log("fdta left");
  
  }

  root.innerHTML+=" <div class='cardh' align='center'><div class='cardhead' align='center'>Japanese GP 2022</div><div class='row cardw'><div class='col-lg-2'>Pos</div><div class='col-lg-8'></div><div class='col-lg-2'>Pts</div></div><div class='row cardw' ><div class='col-lg-2'>1.</div><div class='col-lg-2'><img src='pics/netherland.png' height='20px'></img></div><div class='col-lg-6 results2'>M. Verstappen</div><div class='col-lg-2'>25</div></div><div class='row cardw' ><div class='col-lg-2'>2.</div><div class='col-lg-2'><img src='pics/italy.png' height='20px'></img></div><div class='col-lg-6 results2'>S. Pererz</div><div class='col-lg-2'>18</div></div><div class='row cardw' align='center'><div class='col-lg-2'>3.</div><div class='col-lg-2'><img src='pics/monaco.png' height='13px'></img></div><div class='col-lg-6 results2'>	C. Leclerc</div><div class='col-lg-2'>15</div></div><div class='row cardw' align='center'><div class='col-lg-2'>4.</div><div class='col-lg-2'><img src='https://pngimg.com/uploads/france/france_PNG89667.png' height='25px'></img></div><div class='col-lg-6 results2'>E. Ocon</div><div class='col-lg-2'>12</div></div><div class='row cardw' align='center'><div class='col-lg-2'>5.</div><div class='col-lg-2'><img src='pics/uk.png' height='13px'></img></div><div class='col-lg-6 results2'>	L. Hamilton</div><div class='col-lg-2'>10</div></div><br><div align='center' class='cardhead'>WINNER - Red Bull</div></div>";
	
	}






  function fdta2(da){

    var root=document.getElementById("sr2");
    console.log("fdta2");
   root.innerHTML="";
    for(var i=1;i<=da.length;i++){
      var t=i-1;
      
      var a=document.createElement("div");
      a.className="cardh";
      a.align="center";
      var b=document.createElement("div");
      b.className="cardhead";
      console.log("da da ",da[t].title);
      b.innerHTML=da[t].title;
      a.appendChild(b);
      var c=document.createElement("div");
      c.className="row cardw";
      var d=document.createElement("div");
      var e=document.createElement("div");
      var e2=document.createElement("div");
      d.className="col-lg-5";
      e.className="col-lg-2";
      e2.className="col-lg-5";
      var im=document.createElement("img");
      im.src=da[t].img1;
      var im2=document.createElement("img");
      im2.src=da[t].img2;
       im.height="40";
       im2.height="40";
       var brk=document.createElement("br");
      d.appendChild(im);
      d.appendChild(brk);
      e2.appendChild(im2);
      e2.appendChild(brk);
      e.innerHTML="Vs";
      d.innerHTML+="<br>";
      d.innerHTML+=da[t].t1;
      e2.innerHTML+=da[t].t2;
  
      c.appendChild(d);
      c.appendChild(e);
      c.appendChild(e2);
      a.appendChild(c);
      var f=document.createElement("div");
      f.className="results";
      f.align="center";
      
      f.innerHTML=da[t].status;
      
      a.appendChild(f);
      root.appendChild(a);
    
    }
  
    //root.innerHTML+=" <div class='cardh' align='center'><div class='cardhead' align='center'>Japanese GP 2022</div><div class='row cardw'><div class='col-lg-2'>Pos</div><div class='col-lg-8'></div><div class='col-lg-2'>Pts</div></div><div class='row cardw' ><div class='col-lg-2'>1.</div><div class='col-lg-2'><img src='pics/netherland.png' height='20px'></img></div><div class='col-lg-6 results2'>M. Verstappen</div><div class='col-lg-2'>25</div></div><div class='row cardw' ><div class='col-lg-2'>2.</div><div class='col-lg-2'><img src='pics/italy.png' height='20px'></img></div><div class='col-lg-6 results2'>S. Pererz</div><div class='col-lg-2'>18</div></div><div class='row cardw' align='center'><div class='col-lg-2'>3.</div><div class='col-lg-2'><img src='pics/monaco.png' height='13px'></img></div><div class='col-lg-6 results2'>	C. Leclerc</div><div class='col-lg-2'>15</div></div><div class='row cardw' align='center'><div class='col-lg-2'>4.</div><div class='col-lg-2'><img src='pics/spain.png' height='25px'></img></div><div class='col-lg-6 results2'>E. Ocon</div><div class='col-lg-2'>12</div></div><div class='row cardw' align='center'><div class='col-lg-2'>5.</div><div class='col-lg-2'><img src='pics/uk.png' height='13px'></img></div><div class='col-lg-6 results2'>	L. Hamilton</div><div class='col-lg-2'>10</div></div><br><div align='center' class='cardhead'>WINNER - Red Bull</div></div>";

    root.innerHTML+="<div class='cardh'><div class='cardhead' align='center'>United States GP 2022</div><div class='row cardw' align='center'><img src='pics/f1.png' height='80px'></img></div><div align='center' class='results'>Starts 24th Oct</div></div>";
    }






   function Loadleft(){
    axios.get("data.json").then((res)=>{
      var p=res.data;
      console.log("Loadleft")
      console.log(p[0].title);
      fdta(p);
    })
       .catch(error => console.log(error))
  }


  function Loadleft2(){
    axios.get("upm.json").then((res)=>{
      var p=res.data;
      fdta2(p);
    })
       .catch(error => console.log(error))
  }


//   const [ad, setad] = useState([])
//   useEffect(() => {
//   axios.get("data.json").then((res)=>{setad(res.data)})
//   .catch(error => console.log(error))
// },[]);
  

//   const [ad2, setad2] = useState([])
//   useEffect(() => {
//   axios.get("upm.json").then((res)=>{setad2(res.data)})
//   .catch(error => console.log(error))
// },[]);

    return(
        <div id="root2">








          
        <div class="row">







<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#scores" aria-expanded="false" aria-controls="scores" id="scorebtn">
    Scores
  </button>

           <div className='col-lg-2 hh fi' id="scores">


             <div align="center">Latest Scores </div>
             <div id="sr">
              <Loadleft/>
           {/* <div class="cardh"><div class="cardhead" align="center"> {ad.data1.title}</div>
           <div class="row cardw" align="center">
<div class="col-lg-5"><img src={ad.data1.img1} height="40px"></img><br></br>{ad.data1.t1}</div>
<div class="col-lg-2">Vs</div>
<div class="col-lg-5"><img src={ad.data1.img2} height="40px"></img><br></br>{ad.data1.t2}</div>

</div>
<div align="center" class="results">{ad.data1.status}</div>
           </div>
           

           <div class="cardh"><div class="cardhead" align="center"> {ad.data2.title}</div>
           <div class="row cardw" align="center">
<div class="col-lg-5"><img src={ad.data2.img1} height="40px"></img><br></br>{ad.data2.t1}</div>
<div class="col-lg-2">Vs</div>
<div class="col-lg-5"><img src={ad.data2.img2} height="40px"></img><br></br>{ad.data2.t2}</div>

</div>
<div align="center" class="results">{ad.data2.status}</div>
           </div>


           <div class="cardh"><div class="cardhead" align="center"> {ad.data3.title}</div>
           <div class="row cardw" align="center">
<div class="col-lg-5"><img src={ad.data3.img1} height="40px"></img><br></br>{ad.data3.t1}<br></br>{ad.data3.s1}</div>
<div class="col-lg-2">Vs</div>
<div class="col-lg-5"><img src={ad.data3.img2} height="40px"></img><br></br>{ad.data3.t2}<br></br>{ad.data3.s2}</div>

</div>
<div align="center" class="results">{ad.data3.score}</div>
           </div>

           <div class="cardh"><div class="cardhead" align="center"> {ad.data4.title}</div>
           <div class="row cardw" align="center">
<div class="col-lg-5"><img src={ad.data4.img1} height="40px"></img><br></br>{ad.data4.t1}<br></br>{ad.data4.s1}</div>
<div class="col-lg-2">Vs</div>
<div class="col-lg-5"><img src={ad.data4.img2} height="40px"></img><br></br>{ad.data4.t2}<br></br>{ad.data4.s2}</div>

</div>
<div align="center" class="results">{ad.data4.score}</div>
           </div>



           <div class="cardh"><div class="cardhead" align="center"> Italian GP 2022</div>
           <div class="row cardw"align="center">
<div class="col-lg-2">Pos</div>
<div class="col-lg-8"></div>
<div class="col-lg-2">Pts</div>

</div>


<div class="row cardw" align="center">
<div class="col-lg-2">1.</div>
<div class="col-lg-2"><img src="pics/netherland.png" height="20px"></img></div>
<div class="col-lg-6 results2">
M. Verstappen</div>
<div class="col-lg-2">25</div>

</div>


<div class="row cardw"align="center">
<div class="col-lg-2">2.</div>
<div class="col-lg-2"><img src="pics/monaco.png" height="20px"></img></div>
<div class="col-lg-6 results2">
C. Leclerc</div>
<div class="col-lg-2">18</div>

</div>


<div class="row cardw"align="center">
<div class="col-lg-2">3.</div>
<div class="col-lg-2"><img src="pics/uk.png" height="13px"></img></div>
<div class="col-lg-6 results2">	
G. Russell</div>
<div class="col-lg-2">15</div>

</div>


<div class="row cardw"align="center">
<div class="col-lg-2">4.</div>
<div class="col-lg-2"><img src="pics/spain.png" height="25px"></img></div>
<div class="col-lg-6 results2">
C. Sainz Jr</div>
<div class="col-lg-2">12</div>

</div>


<div class="row cardw"align="center">
<div class="col-lg-2">5.</div>
<div class="col-lg-2"><img src="pics/uk.png" height="13px"></img></div>
<div class="col-lg-6 results2">	
L. Hamilton</div>
<div class="col-lg-2">10</div>

</div>



<br></br>

<div align="center" class="cardhead">WINNER - Red Bull</div>
           </div> */}


</div>

<div align="center">Upcoming Matches</div>
<div id="sr2">

  <Loadleft2></Loadleft2>
</div>

{/* 
<div class="cardh"><div class="cardhead" align="center"> {ad2.data1.title}</div>
           <div class="row cardw" align="center">
<div class="col-lg-5"><img src={ad2.data1.img1} height="40px"></img><br></br>{ad2.data1.t1}</div>
<div class="col-lg-2">Vs</div>
<div class="col-lg-5"><img src={ad2.data1.img2} height="40px"></img><br></br>{ad2.data1.t2}</div>

</div>
<div align="center" class="results">{ad2.data1.status}</div>
           </div>

           <div class="cardh"><div class="cardhead" align="center"> {ad2.data2.title}</div>
           <div class="row cardw" align="center">
<div class="col-lg-5"><img src={ad2.data2.img1} height="40px"></img><br></br>{ad2.data2.t1}</div>
<div class="col-lg-2">Vs</div>
<div class="col-lg-5"><img src={ad2.data2.img2} height="40px"></img><br></br>{ad2.data2.t2}</div>

</div>
<div align="center" class="results">{ad2.data2.status}</div>
           </div>


           <div class="cardh"><div class="cardhead" align="center">{ad2.data3.title}</div>
           <div class="row cardw"align="center">
<div class="col-lg-5"><img src={ad2.data3.img1} height="40px"></img><br></br>{ad2.data3.t1}</div>
<div class="col-lg-2">Vs</div>
<div class="col-lg-5"><img src={ad2.data3.img2} height="40px"></img><br></br>{ad2.data3.t2}</div>

</div>
<div align="center" class="results">{ad2.data3.status}</div>
           </div>

           <div class="cardh"><div class="cardhead" align="center">{ad2.data4.title}</div>
           <div class="row cardw"align="center">
<div class="col-lg-5"><img src={ad2.data4.img1} height="40px"></img><br></br>{ad2.data4.t1}</div>
<div class="col-lg-2">Vs</div>
<div class="col-lg-5"><img src={ad2.data4.img2} height="40px"></img><br></br>{ad2.data4.t2}</div>

</div>
<div align="center" class="results">{ad2.data4.status}</div>
           </div>

          


           <div class="cardh"><div class="cardhead" align="center">{ad2.data5.title}</div>
           <div class="row cardw"align="center">
           <img src={ad2.data5.img} height="80px"></img>

</div>
<div align="center" class="results">{ad2.data5.status}</div>
           </div> */}
           {/* hide */}



          


           
           </div>











           <div className='col-lg-8 hh mid' id="newr" align="center">
            
            
            
            
          <Mcontent></Mcontent>







           </div>












           <div className='col-lg-2 hh rs' >


            <Ql></Ql>
            
           <div id="id01" class="modal">
  
  <form class="modal-content animate" name="fc1" action='#'>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" id="uname" required></input>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="ps" required></input>
        
      <label>
        <input type="checkbox"  name="remember"></input> Remember me
      </label>
<br></br><br></br>
      <button type="button" class="cancelbtn" onClick={login}>LOGIN</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
      <button type="button" class="cancelbtn" onClick={cls}>Close</button>
    </div>
    
  </form>
 
</div>










           
         
           </div>

          

        </div>

        </div>
    )
}






// export function F2(){

//   const [ad, setad] = useState([])
//   useEffect(() => {
//   axios.get("edata.json").then((res)=>{setad(res.data)})},[]);


//   const [ad2, setad2] = useState([])
//   useEffect(() => {
//   axios.get("eupm.json").then((res)=>{setad2(res.data)})},[]);


  export function F2(){


    function sh(){
      document.getElementById("id01").style.display="block";
    }

    function fdta(da){
   
     var root=document.getElementById("sr");
     
    root.innerHTML="";
     for(var i=1;i<=da.length;i++){
   
       
      
       var t=i-1;
       
       var a=document.createElement("div");
       a.className="cardh";
       a.align="center";
       var b=document.createElement("div");
       b.className="cardhead";
       b.innerHTML=da[t].title;
       var b2=document.createElement("div");
       b2.className="cardhead";
       b2.innerHTML=da[t].game;
       a.appendChild(b);
       a.appendChild(b2);
       var c=document.createElement("div");
       c.className="row cardw";
       var d=document.createElement("div");
       var e=document.createElement("div");
       var e2=document.createElement("div");
       d.className="col-lg-5";
       e.className="col-lg-2";
       e2.className="col-lg-5";
       var im=document.createElement("img");
       im.src=da[t].img1;
       var im2=document.createElement("img");
       im2.src=da[t].img2;
        im.height="40";
        im2.height="40";
        var brk=document.createElement("br");
       d.appendChild(im);
       d.appendChild(brk);
       e2.appendChild(im2);
       e2.appendChild(brk);
       e.innerHTML="Vs";
       d.innerHTML+="<br>";
       d.innerHTML+=da[t].t1;
       e2.innerHTML+=da[t].t2;
         d.innerHTML+="<br>";
         e2.innerHTML+="<br>";
         d.innerHTML+=da[t].s1;
         e2.innerHTML+=da[t].s2;
      
       c.appendChild(d);
       c.appendChild(e);
       c.appendChild(e2);
       a.appendChild(c);
      
       
   
       root.appendChild(a);
       console.log("fdta left");
     
     }
   
     //root.innerHTML+=" <div class='cardh' align='center'><div class='cardhead' align='center'>Japanese GP 2022</div><div class='row cardw'><div class='col-lg-2'>Pos</div><div class='col-lg-8'></div><div class='col-lg-2'>Pts</div></div><div class='row cardw' ><div class='col-lg-2'>1.</div><div class='col-lg-2'><img src='pics/netherland.png' height='20px'></img></div><div class='col-lg-6 results2'>M. Verstappen</div><div class='col-lg-2'>25</div></div><div class='row cardw' ><div class='col-lg-2'>2.</div><div class='col-lg-2'><img src='pics/italy.png' height='20px'></img></div><div class='col-lg-6 results2'>S. Pererz</div><div class='col-lg-2'>18</div></div><div class='row cardw' align='center'><div class='col-lg-2'>3.</div><div class='col-lg-2'><img src='pics/monaco.png' height='13px'></img></div><div class='col-lg-6 results2'>	C. Leclerc</div><div class='col-lg-2'>15</div></div><div class='row cardw' align='center'><div class='col-lg-2'>4.</div><div class='col-lg-2'><img src='https://pngimg.com/uploads/france/france_PNG89667.png' height='25px'></img></div><div class='col-lg-6 results2'>E. Ocon</div><div class='col-lg-2'>12</div></div><div class='row cardw' align='center'><div class='col-lg-2'>5.</div><div class='col-lg-2'><img src='pics/uk.png' height='13px'></img></div><div class='col-lg-6 results2'>	L. Hamilton</div><div class='col-lg-2'>10</div></div><br><div align='center' class='cardhead'>WINNER - Red Bull</div></div>";
     
     }
   
   
   
   
   function cls(){
    document.getElementById("id01").style.display="none";
   }

   function login(){
    var a=document.getElementById("uname").value;
    var b=document.getElementById("ps").value;
    var r=document.getElementById("lgp");
    axios.get("log.json").then((res)=>{
      var p=res.data;
      for(var i=0;i<p.length;i++){
        if(p[i].un===a && p[i].ps===b){
          console.log("match")
          r.className="nav-item dropdown";
          var nn=document.createElement("a");
          nn.className="lin dropdown-toggle";
          nn.role="button";
          nn.ariaExpanded="false";
          nn.innerHTML=a;
          r.appendChild(nn);
          var nn1=document.createElement("ul");
          nn1.className="dropdown-menu";
          var nn2=document.createElement("li");
          var nn3=document.createElement("a");
          nn3.className="dropdown-link";
          nn3.innerHTML="Sign Out";
          nn3.onclick=()=>{window.location.reload()}
          nn2.appendChild(nn3);
          nn1.appendChild(nn2);
          r.appendChild(nn1);
          // r.innerHTML=a;
          cls()
        }
      }
    })
       .catch(error => console.log(error))

   }
   
     function fdta2(da){
   
       var root=document.getElementById("sr2");
       console.log("fdta2");
      root.innerHTML="";
       for(var i=1;i<=da.length;i++){
         var t=i-1;
         
         var a=document.createElement("div");
         a.className="cardh";
         a.align="center";
         var b=document.createElement("div");
         b.className="cardhead";   
         b.innerHTML=da[t].title;
         var b2=document.createElement("div");
         b2.className="cardhead";   
         b2.innerHTML=da[t].game;
         a.appendChild(b);
         a.appendChild(b2);
         var c=document.createElement("div");
         c.className="row cardw";
         var d=document.createElement("div");
         var e=document.createElement("div");
         var e2=document.createElement("div");
         d.className="col-lg-5";
         e.className="col-lg-2";
         e2.className="col-lg-5";
         var im=document.createElement("img");
         im.src=da[t].img1;
         var im2=document.createElement("img");
         im2.src=da[t].img2;
          im.height="40";
          im2.height="40";
          var brk=document.createElement("br");
         d.appendChild(im);
         d.appendChild(brk);
         e2.appendChild(im2);
         e2.appendChild(brk);
         e.innerHTML="Vs";
         d.innerHTML+="<br>";
         d.innerHTML+=da[t].t1;
         e2.innerHTML+=da[t].t2;
     
         c.appendChild(d);
         c.appendChild(e);
         c.appendChild(e2);
         a.appendChild(c);
         var f=document.createElement("div");
         f.className="results";
         f.align="center";
         
         f.innerHTML=da[t].st;
         
         a.appendChild(f);
         root.appendChild(a);
       
       }
     
       //root.innerHTML+=" <div class='cardh' align='center'><div class='cardhead' align='center'>Japanese GP 2022</div><div class='row cardw'><div class='col-lg-2'>Pos</div><div class='col-lg-8'></div><div class='col-lg-2'>Pts</div></div><div class='row cardw' ><div class='col-lg-2'>1.</div><div class='col-lg-2'><img src='pics/netherland.png' height='20px'></img></div><div class='col-lg-6 results2'>M. Verstappen</div><div class='col-lg-2'>25</div></div><div class='row cardw' ><div class='col-lg-2'>2.</div><div class='col-lg-2'><img src='pics/italy.png' height='20px'></img></div><div class='col-lg-6 results2'>S. Pererz</div><div class='col-lg-2'>18</div></div><div class='row cardw' align='center'><div class='col-lg-2'>3.</div><div class='col-lg-2'><img src='pics/monaco.png' height='13px'></img></div><div class='col-lg-6 results2'>	C. Leclerc</div><div class='col-lg-2'>15</div></div><div class='row cardw' align='center'><div class='col-lg-2'>4.</div><div class='col-lg-2'><img src='pics/spain.png' height='25px'></img></div><div class='col-lg-6 results2'>E. Ocon</div><div class='col-lg-2'>12</div></div><div class='row cardw' align='center'><div class='col-lg-2'>5.</div><div class='col-lg-2'><img src='pics/uk.png' height='13px'></img></div><div class='col-lg-6 results2'>	L. Hamilton</div><div class='col-lg-2'>10</div></div><br><div align='center' class='cardhead'>WINNER - Red Bull</div></div>";
   
      // root.innerHTML+="<div class='cardh'><div class='cardhead' align='center'>United States GP 2022</div><div class='row cardw' align='center'><img src='pics/f1.png' height='80px'></img></div><div align='center' class='results'>Starts 24th Oct</div></div>";
       }
   
   
   
 
   
   
      function Loadleft(){
       axios.get("edata.json").then((res)=>{
         var p=res.data;
         console.log("Loadleft")
         console.log(p[0].title);
         fdta(p);
       })
          .catch(error => console.log(error))
     }
   
   
     function Loadleft2(){
       axios.get("eupm.json").then((res)=>{
         var p=res.data;
         fdta2(p);
       })
          .catch(error => console.log(error))
     }
   


  return(
      // <h1>inside f2</h1>
      // <div className='container'>
      <div class="row">

<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#scores" aria-expanded="false" aria-controls="scores" id="scorebtn">
  Scores
</button>

         <div className='col-lg-2 hh fi' id="scores">


          <div align="center">Latest Scores </div>
          <div id="sr">

            <Loadleft></Loadleft>
          </div>


          <div align="center">Upcoming Matches </div>
          <div id="sr2">
<Loadleft2></Loadleft2>

            </div>
 
 
         
         </div>











         <div className='col-lg-8 hh mid' align="center" id="newr">
          
          
          
          
        





<div id="carouselExampleIndicators" class="carousel slide slidecustom" data-bs-ride="true">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        
  <img class="d-block w-100 br" width="800" height="420" src="https://pic.sucaibar.com/m00/0f/27/ace3b03665443e6a3607d924c611f869.jpg"></img>
  <div class="carousel-caption d-none d-md-block">
      <h5>League of Legends World Championship</h5>
      <p>Register in advance to catch live action</p>
    </div>
      </div>
      <div class="carousel-item">
      <img class="d-block w-100 br" width="800" height="420" src="https://www.ginx.tv/uploads/24-esl-pro-league-teams.jpg"></img>
      <div class="carousel-caption d-none d-md-block">
      <h5>ESL Pro League : CSGO</h5>
      {/* <p>13th September , 21:00 IST <br></br>Don't miss the fun</p> */}
    </div>
      </div>
      <div class="carousel-item">
      <img class="d-block w-100 br" width="800" height="420" src="https://cdn0.gamesports.net/coverage_headers/29000/29550.jpg?1657020823"></img>
  
      </div>

      <div class="carousel-item">
      <img class="d-block w-100 br" width="800" height="420" src="https://deportesjuegos.com/wp-content/uploads/2022/08/PUBG-Mobile-Global-Championship-PMGC-2022-equipos-clasificados-hasta-ahora.jpg"></img>
      <div class="carousel-caption d-none d-md-block">
      <h5>PMGC 2022</h5>
      <p>Starts 1st November</p>
    </div>
      </div>
      <div class="carousel-item">
      <img class="d-block w-100 br" width="800" height="420" src="https://img.abiosgaming.com/events/Summer-Gauntlet-Valorant-small.png"></img>
      <div class="carousel-caption d-none d-md-block">
      {/* <h5>Valorant Invitational</h5>
      <p>Live</p> */}
    </div>
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

<br></br>


  {/* news */}

 

<br></br>


  







  <Orgs></Orgs>






         </div>












         <div className='col-lg-2 hh rs' >


    

<div id="id01" class="modal">
  
  <form class="modal-content animate" name="fc1" action='#'>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" id="uname" required></input>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="ps" required></input>
        
      {/* <button id="bb" onClick={login}>Login</button> &nbsp; */}
      <label>
        <input type="checkbox"  name="remember"></input> Remember me
      </label>
<br></br><br></br>
      <button type="button" class="cancelbtn" onClick={login}>LOGIN</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
      <button type="button" class="cancelbtn" onClick={cls}>Close</button>
    </div>
    
  </form>
 
</div>



<Ql></Ql>

          {/* <div class="cardhead2" align="center">Quick Links</div>
         <div id="disch" ><a>
<div id="dis" align="center"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16">
<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
</svg>
</div>
Discord<br></br>
<button class="btn btn-danger">Join Our server</button>
</a>

          </div>
         {/* <button id="b1">Dark Mode</button> */}


         {/* <div >
<a><button id="fb" align="center"><img src="pics/fb.png" height="30"></img>acebook
</button></a>


          </div>


         <div >
<a><button id="rd" align="center"><img src="pics/rd.png" height="30"></img>&nbsp;Reddit
</button></a>


          </div>


          <div >
<a><button id="rd" align="center"><img src="pics/ig.png" height="20"></img>&nbsp;Instagram
</button></a>


          </div>


          <div >
<a><button id="rd" align="center"><img src="pics/tw.png" height="20"></img>&nbsp;Twitter
</button></a>


          </div>  */}







         
       
         </div>

        

      </div>

     // </div>
  )
}



