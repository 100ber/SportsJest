import React,{useState,useEffect} from 'react'
import { F } from './funccomp'
import axios from 'axios';

export default function Test() {

  const [ad,setad]=useState([])
  function Gett(){
    console.log("Loop entered")
    useEffect(() => {
    axios.get("data.json").then((res)=>{setad(res.data);console.log(res.data)})
    .catch(error => console.log(error))
  },[]);
  //console.log(ad);
  }
 



  return (<>
  {/* <Gett/> */}
    <F ></F></>
  )
}
