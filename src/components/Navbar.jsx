import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'

const Navbar = () => {
  const { token, logout } = useContext(SessionContext)

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {token ? (
          <>
            <li>
              <Link to='/books/new'>Create new book</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <button type='button' onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </>
        )}
        <li>
          <Link to='/books'>All books</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
