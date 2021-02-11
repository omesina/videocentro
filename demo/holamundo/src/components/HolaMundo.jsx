import React from 'react';

//Componente presentacional
const HolaMundo = () => {
  // Esto es JavaScript:
  const claseCSSHolaMundo = 'container-red';
  const mensajeTextoHTML = '¡Hola, Mundo!';
  const isTrue = true;

  // Esto es JSX (HTML + JavaScript):
  return (
    <div className={claseCSSHolaMundo}>
      <h1>{mensajeTextoHTML}</h1>
      <h2>Curso de React JS</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />

      {isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5>}
      {isTrue && <h4>Soy verdadero</h4>}
    </div>
  );
}

export default HolaMundo;