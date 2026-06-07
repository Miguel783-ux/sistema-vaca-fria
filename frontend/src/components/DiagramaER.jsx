import React from "react";
import diagramaNivelesImg from '../assets/DER.png';
import diagramaNiveles1Img from '../assets/DER1.png';

const DiagramaER = () => {
  return (
    <div >
        
        <img
            src={diagramaNivelesImg}
            alt="Diagrama de Contexto Vaca Fría"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '4px'
            }}
        />
        <img
            src={diagramaNiveles1Img}
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

export default DiagramaER;