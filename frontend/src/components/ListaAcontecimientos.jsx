import React from 'react';

const ListaAcontecimientos = () => {
  const acontecimientos = [
    { id: 1, proceso: '1. Gestión de Ventas', descripcion: 'Cliente solicita un pedido o consulta el catálogo de helados.', tipo: 'Externo' },
    { id: 2, proceso: '1. Gestión de Ventas', descripcion: 'Sistema consulta la disponibilidad y stock real en Productos e Inventario.', tipo: 'Interno' },
    { id: 3, proceso: '1. Gestión de Ventas', descripcion: 'Cajero ingresa el pago y confirma la transacción en la interfaz.', tipo: 'Externo' },
    { id: 4, proceso: '1. Gestión de Ventas', descripcion: 'Sistema descuenta insumos del almacén y archiva el historial de venta.', tipo: 'Interno' },
    { id: 5, proceso: '1. Gestión de Ventas', descripcion: 'Sistema emite y despacha el recibo impreso/digital al Cliente y Cajero.', tipo: 'Salida' },
    { id: 6, proceso: '2. Control Inventario', descripcion: 'Sistema gatilla una alerta de faltantes al Cajero al bajar del stock mínimo.', tipo: 'Temporal' },
    { id: 7, proceso: '3. Gestión Producción', descripcion: 'Proveedor realiza la entrega física de mercadería e insumos al almacén.', tipo: 'Externo' },
    { id: 8, proceso: '3. Gestión Production', descripcion: 'Sistema emite una orden de compra automatizada hacia el Proveedor.', tipo: 'Salida' },
    { id: 9, proceso: '3. Gestión Producción', descripcion: 'Encargado de Producción registra el plan de lotes y consumo de materia prima.', tipo: 'Externo' },
    { id: 10, proceso: '4. Pedidos Especiales', descripcion: 'Encargado de Producción añade requerimientos especiales del cliente al sistema.', tipo: 'Externo' },
    { id: 11, proceso: '4. Pedidos Especiales', descripcion: 'Sistema procesa la cola de fabricación y confirma la fecha estimada de entrega.', tipo: 'Salida' },
    { id: 12, proceso: '5. Reportes', descripcion: 'Sistema exporta resúmenes periódicos de auditoría operativa para el Gerente.', tipo: 'Salida' },
  ];

  return (
    <div >
      <h2 >
        Lista de Acontecimientos (Estímulos y Respuestas)
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', fontSize: '0.9rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#0f2c59', color: '#fff', textAlign: 'left' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Proceso Asociado</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Descripción del Acontecimiento</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {acontecimientos.map((ac) => (
            <tr key={ac.id} style={{ backgroundColor: ac.id % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd', fontWeight: 'bold' }}>{ac.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', color: '#0f2c59', fontWeight: '500' }}>{ac.proceso}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{ac.descripcion}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <span style={{
                  padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold',
                  backgroundColor: ac.tipo === 'Externo' ? '#e0f2fe' : ac.tipo === 'Interno' ? '#dcfce7' : '#fef3c7',
                  color: ac.tipo === 'Externo' ? '#0369a1' : ac.tipo === 'Interno' ? '#15803d' : '#b45309'
                }}>{ac.tipo}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaAcontecimientos;