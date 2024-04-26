import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import AllBooksPage from './pages/AllBooksPage'
import NewBookPage from './pages/NewBookPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path='/books' element={<AllBooksPage />} />
        <Route
          path='/books/new'
          element={
            <PrivateRoute>
              <NewBookPage />
            </PrivateRoute>
          }
        />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App
