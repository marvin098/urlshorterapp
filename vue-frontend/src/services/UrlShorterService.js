export async function sendFullUrlLink(data) {
  const response = await fetch(`/api/url/shorten`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  return await response.json();
}