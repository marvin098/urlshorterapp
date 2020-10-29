export async function sendFullUrlLink(data) {
  return await fetch(`/api/url/shorten`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  });
}