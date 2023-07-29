export async function getTodos() {
  const response = await fetch('https://painassasin.online/catalog/track/all/')
  const items = await response.json()
  return items
}




