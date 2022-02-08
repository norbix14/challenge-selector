import { useEffect, useState } from 'react'

import Selector from './components/Selector'
import { fetchData } from './helpers/fetch'
import { useHandlerChangeSelect } from './hooks/useHandlerChangeSelect'

function App() {
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [value, handleChange] = useHandlerChangeSelect('')

  useEffect(() => {
    const fetchInfo = async (url) => {
      let names, data, response, status
      try {
        response = await fetchData(url)
        status = response?.status || 500
        if (status !== 200) {
          return alert(`Ha ocurrido un error. Error: ${status}`)
        }
        data = await response.json()
        names = data.map((user) => ({ id: user.id, name: user.name }))
        setResults(names)
      } catch (error) {
        return alert(`Ha ocurrido un error con la petición. Error: ${status}`)
      } finally {
        setIsLoading(false)
      }
    }
    fetchInfo('https://jsonplaceholder.typicode.com/users')
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
        <Selector value={value} onChange={handleChange} results={results} />
      )}
    </div>
  )
}

export default App
