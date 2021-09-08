import React from "react";
import ReactDOM from "react-dom";
import Body from "./src/React/Body/body";
import Footer from "./src/React/Footer/footer";
import Header from "./src/React/Header/header";
//import './src/styles/base.css';

export default function App(){
  return(
    <>
       <Header></Header>
       <Body></Body>
       <Footer></Footer>
    
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);