export const fetchData = (endpoint, data = {}, method = 'GET') => {
  if (method === 'GET') {
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
