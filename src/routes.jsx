import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from './pages/main'
import { MyPlaylist } from './pages/myPlaylist'
import { CategoryOne } from './pages/compilation'
import { Registration } from './pages/registration'
import { Authorization } from './pages/authorization'
import { NotFound } from './pages/NotFound'
import { ProtectedRoute } from './component/protectedRoute'
import { useState } from 'react'
import { UserContext } from './context/user'

export const AppRoutes = () => {

  const token = localStorage.getItem('token')

  const getInitialState = () => {
    const userLocal = localStorage.getItem("user")
    if (userLocal) return JSON.parse(userLocal)
    return null
  }


  const [user, setUser] = useState(getInitialState())


  return (

    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>

          <Route element={
            <ProtectedRoute isAllowed={token} />
          }>
            <Route
              path="/"
              element={
                <Container />
              }
            />
            <Route
              path="/favorites"
              element={
                <MyPlaylist />
              }
            />
            <Route
              path="/category/:id"
              element={
                <CategoryOne />
              }
            />
          </Route>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
