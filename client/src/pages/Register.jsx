import { Alert, Button, Form, Row, Col, Stack } from 'react-bootstrap'

const Register = () => {
  return (
    <>
      <Form>
        <Row style={{ height: '100vh', justifyContent: 'center', paddingTop: '10%' }}>
          <Col xs={3}>
            <Stack gap={3}>
              <h3 style={{ textAlign: "center" }}>Register</h3>
              <Form.Control type="text" placeholder="Name" />
              <Form.Control type="email" placeholder="email" />
              <Form.Control type="password" placeholder="password" />
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
