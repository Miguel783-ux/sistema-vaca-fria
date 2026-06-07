import React from 'react';
import Header from './Header';

const Navbar = ({ seccion, setSeccion }) => {

  const irASubseccion = (nombreSeccion, idElemento) => {
    setSeccion(nombreSeccion);
    setTimeout(() => {
      const elemento = document.getElementById(idElemento);
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <>
      <Header />

      <nav className="navbar">
        <ul className="flex-menu">
          <li onClick={() => setSeccion('inicio')} className={seccion === 'inicio' ? 'active' : ''}>INICIO</li>
          
          {/* MARCOS TEÓRICOS */}
          <li className={`has-submenu ${seccion === 'marco teorico' ? 'active' : ''}`}>
            <span onClick={() => irASubseccion('marco teorico', 'introduccion')}>MARCOS TEÓRICOS</span>
            <ul className="submenu">
              <li onClick={() => irASubseccion('introduccion', 'introduccion')}>INTRODUCCIÓN</li>
              <li onClick={() => irASubseccion('antecedentes', 'antecedentes')}>ANTECEDENTES</li>
              <li onClick={() => irASubseccion('planteamiento del problema', 'planteamiento-del-problema')}>PLANTEAMIENTO DEL PROBLEMA</li>
              <li onClick={() => irASubseccion('arbol del problema', 'arbol-del-problema')}>ÁRBOL DEL PROBLEMA</li>
              <li onClick={() => irASubseccion('formulacion del problema', 'formulacion-del-problema')}>FORMULACIÓN DEL PROBLEMA</li>
              <li onClick={() => irASubseccion('proposito del estudio', 'proposito-del-estudio')}>PROPÓSITO DEL ESTUDIO</li>
              <li onClick={() => irASubseccion('metodologia', 'metodologia')}>METODOLOGÍA</li>
              <li onClick={() => irASubseccion('planificacion de actividades', 'planificacion-de-actividades')}>PLANIFICACIÓN DE ACTIVIDADES</li>
            </ul>
          </li>

          {/* ANÁLISIS ESTRUCTURADO (SEPARADO POR MODELOS CONTINUOS) */}
          <li className={`has-submenu ${['modelo ambiental', 'declaracion de propositos', 'diagrama de contexto', 'lista de acontecimientos', 'modelo de comportamiento', 'DFD por niveles', 'DER'].includes(seccion) ? 'active' : ''}`}>
            <span>ANÁLISIS ESTRUCTURADO</span>
            <ul className="submenu">
              
              {/* SUBMENÚ: MODELO AMBIENTAL */}
              <li className="has-inner-submenu">
                <span onClick={() => irASubseccion('modelo ambiental', 'declaracion-de-propositos')}>MODELO AMBIENTAL</span>
                <ul className="inner-submenu">
                  <li onClick={() => irASubseccion('declaracion de propositos', 'declaracion-de-propositos')}>A) DECLARACIÓN DE PROPÓSITOS</li>
                  <li onClick={() => irASubseccion('diagrama de contexto', 'diagrama-de-contexto')}>B) DIAGRAMA DE CONTEXTO</li>
                  <li onClick={() => irASubseccion('lista de acontecimientos', 'lista-de-acontecimientos')}>C) LISTA DE ACONTECIMIENTOS</li>
                </ul>
              </li>
              
              {/* SUBMENÚ: MODELO DE COMPORTAMIENTO */}
              <li className="has-inner-submenu">
                <span onClick={() => irASubseccion('modelo de comportamiento', 'dfd-por-niveles')}>MODELO DE COMPORTAMIENTO</span>
                <ul className="inner-submenu">
                  <li onClick={() => irASubseccion('DFD por niveles', 'dfd-por-niveles')}>DFD POR NIVELES</li>
                  <li onClick={() => irASubseccion('DER', 'der')}>DER</li>
                </ul>
              </li>

              <li onClick={() => irASubseccion('diagramaUSO', 'diagramaUSO')}>DIAGRAMAs </li>

            </ul>
          </li>

          <li onClick={() => setSeccion('orientada a objetos')} className={seccion === 'orientada a objetos' ? 'active' : ''}>ORIENTADA A OBJETOS</li>
          <li onClick={() => setSeccion('videos')} className={seccion === 'videos' ? 'active' : ''}>VIDEOS</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;