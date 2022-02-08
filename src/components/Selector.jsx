function Selector({ value, onChange, results }) {
  const isResults = results.length > 0
  return (
    <main className="main">
      <div className="selector-container">
        <h2>elige tu opción</h2>
        <label htmlFor="selector">Elegir uno de los siguientes nombres</label>
        <select
          name="selector"
          id="selector"
          className="selector"
          onChange={onChange}
          value={value}
        >
          {isResults ? (
            <>
              <option value="" disabled>
                -- Seleccionar --
              </option>
              {results.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </>
          ) : (
            <option value="" disabled>
              -- Seleccionar --
            </option>
          )}
        </select>
      </div>
      <div className="selection">
        {value ? (
          <p>
            Opción elegida: <span className="selected-item">{value}</span>
          </p>
        ) : (
          <p>Ningún nombre fue elegido aún</p>
        )}
      </div>
    </main>
  )
}

export default Selector
