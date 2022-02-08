/**
 * Fetch data from a resource using the native FETCH API.
 *
 * @param {string} endpoint - URL of a resource.
 * @param {string} method - HTTP method.
 * @param {object} data - data to send.
 * @returns a promise.
 *
 * @example
 * const fetchInfo = async (url) => {
 *  let status, response, data
 *  response = await fetchData(url)
 *  status = response?.status || 500
 *  if (status !== 200) {
 *    console.log('Error')
 *    return
 *  }
 *  data = await response.json()
 *  console.log(data)
 * }
 * fetchInfo('https://somedomain.com')
 *
 */
export const fetchData = (endpoint, method = 'GET', data = {}) => {
  if (method.toLowerCase() === 'get') {
    return fetch(endpoint)
  }
  return fetch(endpoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
