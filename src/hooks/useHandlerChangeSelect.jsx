import { useState } from 'react'

/**
 * Custom hook.
 *
 * Manage the `onChange` event in `select` HTML elements.
 *
 * @param {string} initialState - initial state.
 * @returns {array} an array.
 *
 * @example
 * const [value, handleChange] = useHandlerChangeSelect('')
 *
 */
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
