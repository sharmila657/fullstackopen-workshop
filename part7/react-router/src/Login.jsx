import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap"

const Login = (user) => {
// const [user, message] = useState([])
setUser(user)
setMessage(`welcome ${user}`)
setTimeout(() => {
  setMessage(null)
}, 10000)

    }

    return (

        <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
          />
          <Form.Label>password:</Form.Label>
          <Form.Control
            type="password"
          />
          <Button variant="primary" type="submit">
            login
          </Button>
        </Form.Group>
      </Form>

    )
    
}
export default Login;

