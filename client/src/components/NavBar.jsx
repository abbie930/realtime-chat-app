import { useContext } from 'react'
import { Container, Nav, Navbar, Stack } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
  
  const { user, logoutUser } = useContext(AuthContext)

  return (
    <Navbar className="mb-4" style={{ background: '#4b4856', height: '3.75rem' }}>
      <Container>
        <h2>
          <Link to="/" className="link-light text-decoration-none">
            Chat app
          </Link>
        </h2>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            {user && (
              <>
                <span style={{ color: '#fac2a7' }}>Logged in as {user?.name}</span>
              </>
            )}

            {user && (
              <>
                <Link onClick={() => logoutUser()} to="/login" className="link-light text-decoration-none">
                  Logout
                </Link>
              </>
            )}
            {!user && (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  Login
                </Link>
                <Link to="/register" className="link-light text-decoration-none">
                  Register
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
