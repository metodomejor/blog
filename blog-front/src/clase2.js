import React from 'react'
//rafce - shortcut
const clase2 = () => {
  return (
    <div>
      <header>
        <p> esto es un header </p>
      </header>
      <div id="id1">
        <h1>{titulo}</h1>
        
        <p>este es el div con id unico "1"</p>
        <p>a vale: {a} </p>
        <p> b vale: {b} </p>
        <p>suma: {suma}</p>
    
      </div>

      <div className='contenedor'>
         este es el contenedor
         acceso a objeto 1 usando sus laves:
         {objeto1.color}
      </div>
      <footer>
        este es el footer
      </footer>
    </div>
  )
}

export default clase2
