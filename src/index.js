import React from 'react';
import ReactDOM from 'react-dom/client';
import FuncComp,{F,Nb} from './funccomp';
//while importing if we write function name in this{}, then only we can access a non default function
import ClassComp from './classcomp';
import Header from './header';
import HeadRend from './headrend';

var state={a:1};
const root = ReactDOM.createRoot(document.getElementById('root'));
// function Loadi(){
//   if(a==1){
//     console.log(state.a);
//   }
//   else{
//   console.log(state.a);}
// }


root.render(
  <React.StrictMode>
  {/* <h1>HELL0</h1> */}
 
{/* <FuncComp na ="naruto"></FuncComp>//default function
<F></F>//non default func

  <ClassComp name="hell"></ClassComp> */}




    {/* <div id="mode" align="right">
<button id="modbtn" onClick={Loadi}><input type="checkbox" id="toggle-two"></input></button>
    </div> */}
  {/* <Header></Header> */}
  {/* {a==1 && <Header></Header>}
  {a==0 && <h1>HELLO</h1>} */}

  <HeadRend></HeadRend>
  {/* <F></F> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

