import { useContext } from 'react'
import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap'
import { AuthContext } from '../context/AuthContext'

const Register = () => {
  const { registerInfo, updateRegisterInfo } = useContext(AuthContext)
  return (
    <>
      <Form>
        <Row style={{ height: '100vh', justifyContent: 'center', paddingTop: '10%' }}>
          <Col xs={3}>
            <Stack gap={3}>
              <h3 style={{ textAlign: 'center' }}>Register</h3>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => updateRegisterInfo({ ...registerInfo, name: e.target.value })}
              />
              <Form.Control
                type="email"
                placeholder="email"
                onChange={(e) => updateRegisterInfo({ ...registerInfo, email: e.target.value })}
              />
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => updateRegisterInfo({ ...registerInfo, password: e.target.value })}
              />
              <Button type="submit" style={{ background: '#615d6e', borderStyle: 'none' }}>
                Register
              </Button>

              <Alert variant="danger">
                <p>Error</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Register
