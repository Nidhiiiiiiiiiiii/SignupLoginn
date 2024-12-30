
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css'; 

// const Signup = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');
//         setLoading(true);

//         try {
//             const response = await axios.post('http://localhost:4000/api/register', { name, email, password });
//             setSuccess(response.data.message);
//             setLoading(false);
//         } catch (error) {
//             setError(error.response?.data?.message || 'Error registering user');
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             {success && <p>{success}</p>}
//             {error && <p>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit" disabled={loading}>{loading ? 'Signing up...' : 'Signup'}</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
    setMessage('');
    setError('');
  };

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/api/login', { email, password });
      setMessage(response.data.message);
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Error logging in');
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4000/api/register', { name, email, password });
      setMessage(response.data.message);
      setLoading(false);
      // navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Error signing up');
      setLoading(false);
    }
  };

  return (
    <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
      <div className="form sign-in">
        <h2>Welcome</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <label>
          <span>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <p className="forgot-pass">Forgot password?</p>
        <button type="button" className="submit" onClick={handleSignIn} disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>
      <div className="sub-cont">
        <div className="img">
          <div className="img__text m--up">
            <h3>Don't have an account? Please Sign up!</h3>
          </div>
          <div className="img__text m--in">
            <h3>If you already have an account, just sign in.</h3>
          </div>
          <div className="img__btn" onClick={handleToggle}>
            <span className="m--up">Sign Up</span>
            <span className="m--in">Sign In</span>
          </div>
        </div>
        <div className="form sign-up">
          <h2>Create your Account</h2>
          {error && <p className="error">{error}</p>}
          {message && <p className="message">{message}</p>}
          <label>
            <span>Name</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <span>Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="button" className="submit" onClick={handleSignUp} disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
