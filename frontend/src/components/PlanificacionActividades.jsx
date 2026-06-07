import React from 'react';
// Asegúrate de ajustar la ruta según dónde guardes la imagen en tu proyecto
import imagenCronograma from '../assets/conograma.png'; 

const PlanificacionActividades = () => {
  return (
    <div className="section-container" style={{ padding: '20px' }}>
      <h2>1.8 Planificación de Actividades</h2>
      <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
        El desarrollo del proyecto está estructurado en un plan de 6 semanas (desde el 27 de abril hasta el 7 de junio de 2026). Comprende desde el levantamiento inicial de requerimientos y el modelado estructurado (DFD, DER), hasta el diseño detallado orientado a objetos (UML) y la publicación web incremental del sistema de gestión.
      </p>
      
      {/* Contenedor responsivo para que la imagen se adapte correctamente en pantallas pequeñas */}
      <div className="cronograma-img-container" style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
        <img 
          src={imagenCronograma} 
          alt="Cronograma de Actividades Heladería Vaca Fría" 
          style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            borderRadius: '8px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
          }} 
        />
      </div>
    </div>
  );
};

export default PlanificacionActividades;