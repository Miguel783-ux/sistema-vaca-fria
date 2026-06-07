import React from "react";
import diagramaContextoImg from '../assets/nivel0.png';

const DiagramaContexto = () => {
  return (
    <div >
       
        <img 
          src={diagramaContextoImg} 
          alt="Diagrama de Contexto Vaca Fría"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '4px'
            }}
        />
    </div>
  );
}

export default DiagramaContexto;