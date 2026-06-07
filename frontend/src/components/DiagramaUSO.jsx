import React from "react";
import diagramaUsoImage from "../assets/diagramaPR.png";
import diagramaUsoImage2 from "../assets/diagramaSE.png";
import diagramaUsoImage3 from "../assets/diagramaSE1.png";
import diagramaUsoImage4 from "../assets/diagramaUSO.png";

const DiagramaUSO = () => {
    return (
        <div className="section-container" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
            
            <div className="diagrama-uso-images" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img src={diagramaUsoImage} alt="Diagrama de Uso - Parte 1" className="diagrama-uso-image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            
            <div className="diagrama-uso-images" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img src={diagramaUsoImage2} alt="Diagrama de Uso - Parte 2" className="diagrama-uso-image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            
            <div className="diagrama-uso-images" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img src={diagramaUsoImage3} alt="Diagrama de Uso - Parte 3" className="diagrama-uso-image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div> 
            
            {/* CORREGIDO: Ahora usa la misma clase contenedora y estilos que los anteriores */}
            <div className="diagrama-uso-images" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <img src={diagramaUsoImage4} alt="Diagrama de Uso - Parte 4" className="diagrama-uso-image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>
    );
};

export default DiagramaUSO;