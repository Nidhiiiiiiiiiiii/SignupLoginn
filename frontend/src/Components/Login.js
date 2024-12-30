// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const navigate = useNavigate(); // Use navigate hook

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');
//         setLoading(true);

//         try {
//             const response = await axios.post('http://localhost:4000/api/login', { email, password });
//             setSuccess(response.data.message);
//             setLoading(false);
            
//             // Redirect to dashboard on successful login
//             navigate('/dashboard');
//         } catch (error) {
//             setError(error.response?.data?.message || 'Error logging in');
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             {success && <p>{success}</p>}
//             {error && <p>{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
//             </form>
//         </div>
//     );
// };

// export default Login;




// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";
// import google from "../assets/google.png";
// const Login = () => {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");


//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//   };
//   const googleAuth = () => {
// 		window.open(`
// 			${process.env.REACT_APP_API_URL}/auth/google/callback,
// 			"_self"`
// 		);
// 	};


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "http://localhost:5000/api/auth/login"; // Correct endpoint
//       const { data: res } = await axios.post(url, data);
//       console.log("Token received:", res.token); // Log the token
//       localStorage.setItem("token", res.token); // Store token
//       console.log("Token stored, redirecting to home page");
//      // Redirect to home page
//     } catch (error) {
//       if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//         setError(error.response.data.message);
//       }
//       console.error("Login error:", error); // Log the error
//     }
//   };

//   return (
//     <div className={styles.login_container}>
//       <div className={styles.login_form_container}>
//         <div className={styles.left}>
//           <form className={styles.form_container} onSubmit={handleSubmit}>
//             <h1>Login to Your Account</h1>
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               value={data.email}
//               required
//               className={styles.input}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               value={data.password}
//               required
//               className={styles.input}
//             />
//             {error && <div className={styles.error_msg}>{error}</div>}
//             <Link to="/Dashboard">
//             <button type="submit" className={styles.green_btn}>
//               Sign In
//             </button>
//             </Link>

//           </form>
//           <p className={styles.text}>or</p>
//           <button className={styles.google_btn}>
// 						<img src={google} alt="google icon" onClick={googleAuth} />
// 						<span>Sign in with Google</span>
// 					</button>
//         </div>
//         <div className={styles.right}>
//           <h1>New Here?</h1>
//           <Link to="/signup">
//             <button type="button" className={styles.white_btn}>
//               Sign Up
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




