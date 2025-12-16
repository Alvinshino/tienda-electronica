export default function Header({ busqueda, setBusqueda, categoria, setCategoria, categorias }) {
  return (
    <header style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <h1>Tienda Electrónica</h1>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: "8px", width: "60%", marginRight: "10px" }}
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="Todas">Todas</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
