import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap'

const Login = () => {
  return (
    <>
      <Form>
        <Row style={{ height: '100vh', justifyContent: 'center', paddingTop: '10%' }}>
          <Col xs={3}>
            <Stack gap={3}>
              <h3 style={{ textAlign: 'center' }}>Login</h3>
              <Form.Control type="email" placeholder="email" />
              <Form.Control type="password" placeholder="password" />
              <Button type="submit" style={{ background: '#615d6e', borderStyle: 'none' }}>
                Login
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

export default Login
