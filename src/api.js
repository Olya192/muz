export async function getTodos() {
  const response = await fetch('https://painassasin.online/catalog/track/all/')
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const items = await response.json()
  return items
}


export async function postRegist(email, password) {
  const response = await fetch('https://painassasin.online/user/signup/', {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  if (!response.ok) {
    const error = await response.json()
    if (error?.email) {
      throw new Error(error.email[0])
    }
    if (error?.password) {
      throw new Error(error.password[0])
    }
  }

  const user = await response.json()
  return user
}

export async function postAuth(email, password) {
  const response = await fetch("https://painassasin.online/user/login/", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
  if (!response.ok) {
    const error = await response.json()
    if (error?.detail) {
      throw new Error(error.detail)
    }
    console.log('кринж')
  }

  const user = await response.json()
  return user
}

export async function postToken() {
  return fetch("https://painassasin.online/user/token/", {
    method: "POST",
    body: JSON.stringify({
      email: "gleb@fokin.ru",
      password: "gleb@fokin.ru",
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json());

}


export async function getFavTrack(params) {
  const accessToken = localStorage.getItem("token");

return fetch("https://painassasin.online/catalog/track/favorite/all/", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
  .then((response) => response.json())
  
}


