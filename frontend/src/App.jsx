import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar'; 
import { Inicio } from './components/Inicio';
import { Footer } from './components/Footer';

// Componentes del contenido de Marcos Teóricos
import Introduccion from './components/Introduccion';
import ArbolProblema from './components/ArbolProblema';
import FormulacionProblema from './components/FormulacionProblema';
import Antecedentes from './components/Antecedentes';
import Metodologia from './components/Metodologia';
import PropositoEstudio from './components/PropositoEstudio';
import PlanificacionActividades from './components/PlanificacionActividades';
import OrientadaObjetos from './components/OrientadaObjetos';
import DiagramaContexto from './components/diagramaContexto';
import ListaAcontecimientos from './components/ListaAcontecimientos';
import DeclaracionPropositos from './components/DeclaracionPropositos';
import DiagramaNiveles from './components/DiagramaNiveles';
import DiagramaER from './components/DiagramaER';
import DiagramaUSO from './components/DiagramaUSO';
function App() {
  const [seccion, setSeccion] = useState('inicio'); 

  // Agrupamos todas las subsecciones que pertenecen a Marcos Teóricos
  const esMarcoTeorico = [
    'marco teorico', 'introduccion', 'antecedentes', 'planteamiento del problema', 
    'arbol del problema', 'formulacion del problema', 'proposito del estudio', 
    'metodologia', 'planificacion de actividades'
  ].includes(seccion);

  const esModeloAmbiental = [
    'modelo ambiental', 'declaracion de propositos', 'diagrama de contexto', 'lista de acontecimientos'
  ].includes(seccion);

  
  const esModeloComportamiento = [
    'modelo de comportamiento', 'DFD por niveles', 'DER'
  ].includes(seccion);

  return (
    <div className="main-container">
      {/* El Navbar maneja internamente la barra de navegación y el Header con la imagen encima */}
      <Navbar seccion={seccion} setSeccion={setSeccion} />

      <main style={{ padding: '20px' }}>
        {seccion === 'inicio' && <Inicio />}
        
        {/* VISTA CONTINUA PARA MARCOS TEÓRICOS */}
        {esMarcoTeorico && (
          <div className="documento-continuo">
            
            <section id="introduccion">
              <Introduccion />
            </section>

            <section id="antecedentes">
              <Antecedentes />
            </section>

            <section id="planteamiento-del-problema">
              <h2>1.3 Planteamiento del Problema</h2>
              <p>
                La heladería “Vaca Fría” arrastra fallas logísticas debido a la falta de integración entre sus áreas operativas. 
                El problema crítico radica en la <strong>desconexión entre las ventas y el inventario</strong>: el personal desconoce 
                la disponibilidad real de insumos al facturar, provocando quiebres de stock, retrasos concurrentes en horas pico 
                y procesos de verificación que dependen enteramente de la revisión humana manual. Esta dispersión de información 
                impide una planificación de compras eficiente y limita el crecimiento competitivo del negocio.
              </p>
            </section>

            <section id="arbol-del-problema">
              <ArbolProblema />
            </section>

            <section id="formulacion-del-problema">
              <FormulacionProblema />
            </section>

            <section id="proposito-del-estudio">
              <PropositoEstudio />
            </section>

            <section id="metodologia">
              <Metodologia />
            </section>

            <section id="planificacion-de-actividades">
              <PlanificacionActividades />
            </section>

          </div>
        )}
        
        {/* VISTA CONTINUA: MODELO AMBIENTAL (Solo muestra A, B y C) */}
        {esModeloAmbiental && (
          <div className="documento-continuo">
            <section id="declaracion-de-propositos">
              <DeclaracionPropositos />
            </section>

            <section id="diagrama-de-contexto" style={{ margin: '40px 0', textAlign: 'center', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
              <h2> Diagrama de Contexto</h2>
              <DiagramaContexto />
            </section>

            <section id="lista-de-acontecimientos">
              <ListaAcontecimientos />
            </section>
          </div>
        )}

        {/* VISTA CONTINUA: MODELO DE COMPORTAMIENTO (Solo muestra DFD y DER) */}
        {esModeloComportamiento && (
          <div className="documento-continuo">
            <section id="dfd-por-niveles" style={{ margin: '20px 0', textAlign: 'center', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
              <h2>DFD por Niveles (Nivel0, Nivel 1 y Nivel 2)</h2>
              <DiagramaNiveles /> 
            </section>

            <section id="der" style={{ margin: '40px 0', textAlign: 'center', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
              <h2>DER (Diagrama Entidad Relación)</h2>
              <DiagramaER /> 
            </section> 
          </div>
        )}
        {seccion === 'diagramaUSO' && <DiagramaUSO />}
        {seccion === 'orientada a objetos' && <OrientadaObjetos />}
        {seccion === 'videos' && <div><h2>VIDEOS</h2><p>Contenido de videos relacionado con el proyecto.</p></div>}
      </main>
      <Footer />
    </div>
  );
}

export default App;