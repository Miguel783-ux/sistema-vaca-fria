import React from "react";
import diagramaNivelesImg from '../assets/nivel0.png';
import diagramaNiveles1Img from '../assets/nivel1.png';
import diagramaNiveles2Img from '../assets/nivel2.png';

const DiagramaNiveles = () => {
  return (
    <div>
        <img
            src={diagramaNivelesImg}
            alt="Diagrama de Contexto Vaca Fría"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '4px',
                marginBottom: '20px'
            }}
        />
        <img
            src={diagramaNiveles1Img}
            alt="Diagrama de Nivel 1 Vaca Fría"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '4px',
                marginBottom: '20px'
            }}
        />
        <img
            src={diagramaNiveles2Img}
            alt="Diagrama de Nivel 2 Vaca Fría"
            style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '4px'
            }}
        />
    </div>
    );
}

export default DiagramaNiveles;