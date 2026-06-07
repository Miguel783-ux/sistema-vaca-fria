import React from 'react';
import webimagenes from '../assets/buttons.png';
import webimagenes2 from '../assets/google.png';
import webimagenes3 from '../assets/comentarios.png';

export const Footer = () => {

  // 1. Estilo base para cada contenedor de ícono cortado por CSS
  const baseSpriteStyle = {
    backgroundImage: `url(${webimagenes})`,
    backgroundSize: '240px auto', // Reajusta este ancho total aproximado para escalar la tira completa
    height: '40px',               // Alto de un solo ícono
    width: '40px',                // Ancho de un solo ícono
    margin: '0 8px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'transform 0.2s ease, filter 0.2s ease',
    display: 'inline-block'
  };

  // Efecto visual al pasar el mouse por encima (hover)
  const alternarHover = (e, activar) => {
    e.currentTarget.style.transform = activar ? 'scale(1.15)' : 'scale(1)';
    e.currentTarget.style.filter = activar ? 'brightness(1.2)' : 'brightness(1)';
  };

  return (
    <footer style={{
      textAlign: 'center',
      padding: '30px 20px',
      marginTop: '50px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      fontSize: '13px'
    }}>
        <div className="footer-content" style={{ marginBottom: '25px', lineHeight: '1.6' }}>
          <p style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '500', color: '#fff' }}>
            Proyecto de Análisis de Sistemas — Heladería "Vaca Fría"
          </p>
          <p style={{ margin: '0', color: '#888', fontSize: '13px' }}>
            Una solución integral para la gestión de ventas, producción e inventarios.
          </p>
        </div>

        {/* CONTENEDOR DE BOTONES PARTIDOS */}
        <div className="footer-buttons-container" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '10px',
          marginBottom: '25px',
          flexWrap: 'wrap'
        }}>
          
          {/* BOTÓN 1: FACEBOOK */}
          <div 
            style={{ ...baseSpriteStyle, backgroundPosition: '0px 0px' }} 
            onMouseEnter={(e) => alternarHover(e, true)}
            onMouseLeave={(e) => alternarHover(e, false)}
            title="Facebook"
          />

          {/* BOTÓN 2: TWITTER / X */}
          <div 
            style={{ ...baseSpriteStyle, backgroundPosition: '-40px 0px' }} 
            onMouseEnter={(e) => alternarHover(e, true)}
            onMouseLeave={(e) => alternarHover(e, false)}
            title="Twitter"
          />

          {/* BOTÓN 3: CORREO */}
          <div 
            style={{ ...baseSpriteStyle, backgroundPosition: '-80px 0px' }} 
            onMouseEnter={(e) => alternarHover(e, true)}
            onMouseLeave={(e) => alternarHover(e, false)}
            title="Correo"
          />

          {/* BOTÓN 4: OPERA */}
          <div 
            style={{ ...baseSpriteStyle, backgroundPosition: '-120px 0px' }} 
            onMouseEnter={(e) => alternarHover(e, true)}
            onMouseLeave={(e) => alternarHover(e, false)}
            title="Opera"
          />

          {/* BOTÓN 5: PINTEREST */}
          <div 
            style={{ ...baseSpriteStyle, backgroundPosition: '-160px 0px' }} 
            onMouseEnter={(e) => alternarHover(e, true)}
            onMouseLeave={(e) => alternarHover(e, false)}
            title="Pinterest"
          />

          {/* BOTÓN 6: COMENTARIOS */}
          <div 
            style={{ ...baseSpriteStyle, backgroundPosition: '-200px 0px' }} 
            onMouseEnter={(e) => alternarHover(e, true)}
            onMouseLeave={(e) => alternarHover(e, false)}
            title="Comentarios"
          />
        </div>

        <p style={{ margin: '0 0 5px 0', color: '#666' }}>
          © {new Date().getFullYear()} Helados Vaca Fría - Todos los derechos reservados
            69998850 (sucursal Arce)
            62345309 (sucursal Camacho)
        </p>
        <p style={{ margin: '0', fontStyle: 'italic', color: '#b5c0d0', letterSpacing: '0.5px' }}>
          "El sabor que te refresca"
        </p>
    </footer>
  );
};