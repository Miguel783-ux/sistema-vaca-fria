import React from 'react';

const Videos = () => {
  return (
    <div id="videos" className="seccion-videos" style={{ padding: '40px 20px', backgroundColor: '#1b263b', color: '#fff', minHeight: '80vh' }}>
      <div className="contenedor-videos" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        
        <h2 style={{ color: '#e0a96d', fontSize: '28px', marginBottom: '10px' }}>
          PRESENTACIÓN DEL PROYECTO
        </h2>
        <p style={{ color: '#ccc', marginBottom: '30px' }}>
          Exposición del Sistema de Información para la gestión de ventas, inventario y producción de la Heladería Vaca Fría.
        </p>

        {/* Contenedor responsivo para el video */}
        <div className="video-responsive" style={{
          position: 'relative',
          paddingBottom: '56.25%', /* Relación de aspecto 16:9 */
          height: 0,
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)',
          marginBottom: '20px'
        }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            src="https://www.youtube.com/embed/nynN4WEMVoo"
            title="Proyecto Heladeria VacaFría"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div style={{ marginTop: '20px', backgroundColor: '#0d1b2a', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #e0a96d' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#aaa', textAlign: 'left' }}>
            este video solo esplica donde esta cada diagrama y cada parte del informe
          </p>
          <a 
            href="https://youtu.be/nynN4WEMVoo" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-block', marginTop: '10px', color: '#e0a96d', textDecoration: 'underline', fontSize: '14px' }}
          >
            Ver directamente en YouTube
          </a>
        </div>

      </div>
    </div>
  );
};

export default Videos;
