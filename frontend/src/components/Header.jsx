import React from 'react';
// IMPORTANTE: Asegúrate de que la ruta coincida con el lugar donde guardaste tu imagen
import bannerImg from '../assets/VacaFria.png'; 

const Header = () => {
  return (
    <div className="project-banner-header" style={{
      width: '100%',
      height: '220px', // Altura ideal para que luzca el collage sin comerse la pantalla
      backgroundImage: `url(${bannerImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderBottom: '4px solid #f0a500', // Mantiene la línea dorada decorativa de separación
      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* 
        Dejamos el contenedor interno listo por si en el futuro deseas poner un pequeño 
        efecto encima o mantenerlo completamente limpio para que solo se aprecie el collage.
      */}
    </div>
  );
};

export default Header;