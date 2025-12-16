import { useState } from "react";
import Header from "./componentes/Header";
import TarjetaProducto from "./componentes/TarjetaProducto";
import { productos } from "./datos/productos";

export default function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [carrito, setCarrito] = useState([]);

  const categorias = [...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoria === "Todas" || p.categoria === categoria)
  );

  function agregar(producto) {
    setCarrito([...carrito, producto]);
  }

  return (
    <div>
      <Header
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoria={categoria}
        setCategoria={setCategoria}
        categorias={categorias}
      />

      <h2 style={{ padding: "20px" }}>Productos</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        flexWrap: "wrap"
      }}>
        {productosFiltrados.map(p => (
          <TarjetaProducto
            key={p.id}
            producto={p}
            agregar={agregar}
          />
        ))}
      </div>

      <div style={{ padding: "20px" }}>
        <h3>Carrito ({carrito.length})</h3>
      </div>
    </div>
  );
}
