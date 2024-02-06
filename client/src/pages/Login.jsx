import { useContext } from 'react'
import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const { loginUser,
        loginError,
        loginInfo,
        updateLoginInfo,
        isLoginLoading } = useContext(AuthContext)

  return (
    <>
      <Form onSubmit={loginUser}>
        <Row style={{ height: '100vh', justifyContent: 'center', paddingTop: '10%' }}>
          <Col xs={3}>
            <Stack gap={3}>
              <h3 style={{ textAlign: 'center' }}>Login</h3>
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) => updateLoginInfo({ ...loginInfo, email: e.target.value })}
              />
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => updateLoginInfo({ ...loginInfo, password: e.target.value })}
              />
              <Button type="submit" style={{ background: '#615d6e', borderStyle: 'none' }}>
                {isLoginLoading ? "Logging in ..." : "Login"}
              </Button>
              {loginError?.error && (
                <>
                  <Alert variant="danger">
                    <p>{loginError?.message}</p>
                  </Alert>
                </>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Login
