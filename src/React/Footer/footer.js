import React from "react";
import './footer.css';


export default function Footer(){
    return(
      <>
       <footer>
       <span className="version"> v0.0.2</span>
       <p class="text-footer">Created with love ❤ by <a href="https://ja54312.com" target="_blank" rel="noopener noreferrer" alt="enlace a pagina JA54312">JA54312</a></p>
           <div className="container-correo">
               <a href="mailto:marcosclass.edu@gmail.com">
                   <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="imagen correo"></img>
               </a>
           </div>
       </footer>
            
        
       
      </>
    )
  }