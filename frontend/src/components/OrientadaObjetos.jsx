import React from 'react';
import diagramaClasesImg from '../assets/OrientdaObjetos.png'; 

const OrientadaObjetos = () => {
  return (
    <div >
      <h2 >Diagrama de Clases</h2>
      
      <img 
        src={diagramaClasesImg} 
        alt="Diagrama de Clases Vaca Fría"
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          borderRadius: '4px' 
        }}
      />
    </div>
  );
};

export default OrientadaObjetos;
