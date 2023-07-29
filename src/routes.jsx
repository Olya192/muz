import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from './pages/main'
import { MyPlaylist } from './pages/myPlaylist'
import { CategoryOne } from './pages/compilation'
import { Registration } from './pages/registration'
import { Authorization } from './pages/authorization'
import { NotFound } from './pages/NotFound'
import { ProtectedRoute } from './component/protectedRoute'

export const AppRoutes = () => {
  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={token}>
              <Container />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute isAllowed={token}>
              <MyPlaylist />{' '}
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/:id"
          element={
            <ProtectedRoute isAllowed={token}>
              <CategoryOne />{' '}
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
