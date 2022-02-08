import { useEffect, useState } from 'react'

import Selector from './components/Selector'
import { fetchData } from './helpers/fetch'
import { useHandlerChangeSelect } from './hooks/useHandlerChangeSelect'

function App() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [value, handleChange] = useHandlerChangeSelect('')

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetchData(
          'https://jsonplaceholder.typicode.com/users'
        )
        let names, data
        const { status } = response
        if (status !== 200) {
          return alert('Ha ocurrido un error')
        }
        data = await response.json()
        names = data.map((user) => ({ id: user.id, name: user.name }))
        setResults(names)
      } catch (error) {
        return alert('Ha ocurrido un error con la petición')
      } finally {
        setIsLoading(false)
      }
    }
    fetchInfo()
  }, [])

  return (
    <div className="container">
      <header className="header">
        <h1>Challenge Selector</h1>
      </header>
      {isLoading ? (
        <div className="loader">
          <p>cargando usuarios...</p>
        </div>
      ) : (
        <>
          <Selector value={value} onChange={handleChange} results={results} />
          <div className="selection">
            {value ? (
              <p>
                Opción elegida: <span className="selected-item">{value}</span>
              </p>
            ) : (
              <p>Ningún nombre fue elegido aún</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default App
