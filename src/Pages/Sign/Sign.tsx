import React, { useState, ChangeEvent, FormEvent } from 'react';
import { auth } from '../../Config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Sign.css'

function Sign() {
  const [firstname, setFirstName] = useState<string>('');
  const [lastname, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmpassword, setConfirmPassword] = useState<string>('');


  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to another page or do whatever you want
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='for-sign'>
      <form onSubmit={handleSubmit} className="for-signup">
        <h4 className='form-title'>Sign Up</h4>
        <p className='form-para'>Please fill in this form to create an account!</p>
        <input className='sign' type="text" value={firstname} onChange={handleFirstNameChange} placeholder="First Name" required/>
        <input className='sign' type="text" value={lastname} onChange={handleLastNameChange} placeholder="Last Name" required/>
        <input className='sign' type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
        <input className='sign' type="password" value={password} onChange={handlePasswordChange} placeholder="Password" required />
        <input className='sign' type="password" value={confirmpassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password" required />
        <button type="submit">Sign up</button>
        <div className='checkbox'>
        <input id='accept' className="check" type="checkbox"/><label htmlFor='accept' className='terms'>I accept the <span>Terms of use & Privacy Policy</span></label>
        </div>
      </form>
      
    </div>
  );
}

export default Sign;
