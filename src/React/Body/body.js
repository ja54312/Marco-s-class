import React from "react";
import './body.css';


export default function Body(){
    return(
      <>
       <body>
         <div className="container-body">
         <section className="section-main">
           <h2>Clases de Ingles en Linea</h2>
         </section>
         <section className="section-hero">
           <h2>Con maestro con certificación</h2>
         </section>
         <section className="section-horarios">
           <h3>Horarios</h3>
           <br></br>
           <div className="table-horarios">
           <tr>
             <td>lunes a viernes</td>
             <td>1 a 2 horas diarias</td>
           </tr>
           <tr>
             <td>de</td>
             <td>8:00 a 20:00</td>
           </tr>
          </div>
         </section>
         <h3 className="grupos-reducidos">*Grupos Reducidos*</h3>
         <br></br>
         <section className="section-costo">
           <div class="card">
            <h3>Pago Semanal</h3>
            <br></br>
            <div className="table-precios">
            <tr>
             <td>Clase Grupal</td>
             <td>$120</td>
           </tr>
           <tr>
             <td>Clase Personal</td>
             <td>$180</td>
           </tr>
           </div>
           </div>
           <div class="card">
           <h3>Pago Mensual</h3>
            <br></br>
            <div className="table-precios">
            <tr>
             <td>Clase Grupal</td>
             <td>$480</td>
           </tr>
           <tr>
             <td>Clase Personal</td>
             <td>$720</td>
           </tr>
           </div>
           </div>
         </section>
           <h3 className="grupos">Grupos de 2 a 6 personas</h3>
         <section className="section-extra">
           <div className="table-extra">
            <tr>
             <td>Regularizaciones </td>
             <td>$60 Hora</td>
            </tr>
            <tr>
             <td>Material</td>
             <td>$50 PDF</td>
            </tr>
           </div>
         </section>
         <section className="section-contacto">
          <h3>Contacto</h3>
          <div className="container-contacto">
            <div className="facebook-page">
              <a href="https://www.facebook.com/Marcos-Class-102399352162327" target="_blank" rel="noopener noreferrer">
                <img src="https://www.vectorlogo.zone/logos/facebook/facebook-tile.svg" alt="logo de facebook" className="img-contact"></img>
              </a>
            </div>
            <div className="mail-page">
               <a href="mailto:marcosclass.edu@gmail.com">
                   <img src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" alt="imagen correo"></img>
               </a>
            </div>
          </div>
         </section>  
         </div>  
       </body>
            
        
       
      </>
    )
  }