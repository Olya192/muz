export async function getTodos() {
  const response = await fetch('https://painassasin.online/catalog/track/all/')
  if (!response.ok) {
    throw new Error ('Ошибка сервера')
  }
  const items = await response.json()
  return items
}




