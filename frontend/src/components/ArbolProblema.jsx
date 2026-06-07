import React from 'react';
import arbolImage from '../assets/arbol.png'; 
import arbolImage2 from '../assets/arbol2.png';

const ArbolProblema = () => {
  return (
    <div className="arbol-problema">
      <h2>1.4 Árbol del Problema</h2>
      <div className="arbol-images">
        <img src={arbolImage} alt="Árbol del Problema" className="arbol-image" />
      </div>
      <h2>1.4.1 Árbol del Problema</h2>
      <div className="arbol-images">
        <img src={arbolImage2} alt="Árbol del Problema Detallado" className="arbol-image" />
      </div>
    </div>
  );
};

export default ArbolProblema;