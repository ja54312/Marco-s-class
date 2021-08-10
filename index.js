import React from "react";
import ReactDOM from "react-dom";
import './src/styles/base.css';

export default function App(){
  return(
    <>
      <div className = "container-titulo-principal">
      <h1 className="titulo-principal">Holi crayoli</h1>
      <p>holi </p>
      </div>
      <hr/>
    </>
  )
}

const entryPointMalta = document.getElementById("root");
ReactDOM.render(<App/>, entryPointMalta);