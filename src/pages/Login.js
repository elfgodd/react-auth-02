import { React, useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e: SyntheticEvent) => {
      e.preventDefault();

      await fetch('https://localhost:8000/api/login', {
        method: 'POST',
        // to get the cookie from the backend server
        credentials: 'include',

        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email, password
        })
      });

    }
    return (
        <form onSubmit={submit}>
        <img className="mb-4" src="" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        
        <input type="email" className="form-control" placeholder="name@example.com" required
            onChange={e => setEmail(e.target.value)}
         />
        
        <input type="password" className="form-control" placeholder="Password" required 
            onChange={e => setPassword(e.target.value)}
        />
      
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    );
};

export default Login;