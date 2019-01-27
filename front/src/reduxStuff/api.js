const API_URL = 'http://localhost:3001/'

export const apiCall = (request, requestType) => body =>
  fetch(`${API_URL}${request}`, {
    method: requestType.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

export const api = {
  addPhrases: apiCall('addPhrases', 'POST'),
  fetchPhrasesToRevise: apiCall('fetchPhrasesToRevise', 'GET'),
}
