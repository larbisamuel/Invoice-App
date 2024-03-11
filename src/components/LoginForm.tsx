// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// interface LoginFormProps {
//   //  onSubmit function  implementation
// }

// const LoginForm: React.FC<LoginFormProps> = () => {
//   // const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   return (
//     <Form>
//       {/* <Form.Group controlId="formBasicUsername">
//         <Form.Label>Username</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </Form.Group> */}

//       <Form.Group controlId="formBasicPassword">
//         <Form.Label>Staff ID</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Enter Staff Id"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Form.Group>
//       <Button variant="secondary" >
//         Login
//       </Button>
//     </Form>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './login.css'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <div className="login-container">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginForm;
