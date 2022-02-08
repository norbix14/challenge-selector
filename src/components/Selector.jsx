function Selector({ value, onChange, results }) {
  const isResults = results.length > 0
  const EmptyOption = (
    <option value="" disabled>
      -- Seleccionar --
    </option>
  )
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
              {EmptyOption}
              {results.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </>
          ) : (
            { EmptyOption }
          )}
        </select>
      </div>
    </main>
  )
}

export default Selector
