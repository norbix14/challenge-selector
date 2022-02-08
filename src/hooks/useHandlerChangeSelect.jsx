import { useState } from 'react'

export const useHandlerChangeSelect = (initialState) => {
  const [state, setState] = useState(initialState)
  const handleChange = (e) => {
    const {
      target: { value },
    } = e
    setState(value)
  }
  return [state, handleChange]
}
