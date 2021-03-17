import React from 'react';
import { datos } from '../data/datos'

export const Objetos = () => {
     const { texts, boards, imgs } = datos;
     const keysTextos = Object.keys(texts);
     const keysBoards = Object.keys(boards);
     const keysImgs = Object.keys(imgs);
     // console.log(keysImgs.length, boards, imgs);

     const setHandleObject = (event)=>{
        console.log(event.target.innerHTML)
          // alert(target)
     }
     return (
          <div className="fondoObjetos grid-izquierda">
               <h2>Contenido</h2>
               <div className="objetos select">
               {keysTextos.length} Textos 
               </div>
               {
                    keysTextos.map((texto) =>
                         <div
                              onClick={text=>setHandleObject(text) }
                              key={Math.random()}
                              className="objetos ">
                              {texto}
                         </div>
                    )
               }

               <div className="objetos select">
               {keysBoards.length}  Tablas 
               </div>
               {
                    keysBoards.map((texto) =>
                         <div
                              key={Math.random()}
                              className="objetos ">
                              {texto}
                         </div>
                    )
               }
               <div className="objetos select">
               {keysImgs.length}  Imagenes
               </div>
               {
                    keysImgs.map((texto) =>
                         <div
                              key={Math.random()}
                              className="objetos ">
                              {texto}
                         </div>
                    )
               }
          </div>
     )
}
