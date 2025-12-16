export default function TarjetaProducto({ producto, agregar }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      width: "250px"
    }}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p><b>Bs {producto.precio}</b></p>

      <button onClick={() => agregar(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}
