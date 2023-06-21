import React, { useState, ChangeEvent, FormEvent } from 'react';
import { auth } from '../../Config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // The user is signed in
      // You can redirect to another page here, or do whatever you want
    } catch (error) {
      // Error occurred during the sign in, maybe the email or password is incorrect
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4 className='form-title login'>Login</h4>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
      <button type="submit">Log in</button>
      <div className='checkbox'>
        <div>
          <input id='accept' className="check" type="checkbox"/>
          <label htmlFor='accept' className='terms'>Remember</label>
        </div>
          <span className='reset'>Forgot password?</span>
      </div>
    </form>
  );
}

export default Login;
