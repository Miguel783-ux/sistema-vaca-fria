import React from 'react';
import imagenInicio from '../assets/vacafria-grande.jpg';

export const Inicio = () => {
  return (
    <div className="inicio-layout fade-in">
      <div className="col-izquierda">
        <div className="historia-content">
          <h2 className="titulo-historia">Nuestra Historia</h2>
          
          {/* BLOQUE FLOTANTE (Imagen + Fundadoras) */}
          <div className="aside-izquierdo">
            <img src={imagenInicio} className="img-mini" alt="Local" />
            
            <div className="fundadoras-box">
              <h3>Fundadoras:</h3>
              <p>Marioly Ribera, Celia Camacho y Maria Martha Bravo</p>
            </div>
          </div>

          {/* TEXTO DE LA HISTORIA (Fluirá a la derecha del bloque anterior) */}
          <p>
            Empezamos el <strong>3 de Noviembre del 2011</strong>, inaugurando nuestra Central ubicada en el centro de la ciudad de Santa Cruz (calle Junín N.40). Casi al año, el 1 de Noviembre del 2012, inauguramos nuestra primera sucursal, ubicada en el Cine Center.
          </p>
          <p>
            Actualmente estamos presentes con 10 sucursales en distintas zonas de la ciudad, donde la gente podrá encontrar la misma calidad y buena atención.
          </p>
          <p>
            El helado que fabricamos se lo califica como Premium por contar con un nivel de cremosidad y textura únicos, que realzan la sensación del sabor al momento de probarlos; asimismo contamos con sabores originales y exclusivos como: la Crema Vacafría, y el Chocolate Suizo.
          </p>
        </div>
      </div>

      <div className="col-derecha">
        <h3>Síguenos</h3>
        <a href="https://facebook.com/..." className="btn-facebook">Visítanos en Facebook</a>
      </div>
    </div>
  );
};