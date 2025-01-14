// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation for client-side
//     if (!credentials.name || !credentials.email || !credentials.password || !credentials.location) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/create/user", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: credentials.name,
//           email: credentials.email,
//           password: credentials.password,
//           location: credentials.location // Include location
//         })
//       });

//       const json = await response.json();
//       console.log(json);

//       if (response.ok) {
//         // Save the auth token to local storage and redirect
//         localStorage.setItem('token', json.authToken);
//         navigate("/login");
//       } else {
//         // Handle validation errors
//         alert("Error: " + (json.message || "Enter valid credentials"));
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div style={{ 
//       backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
//       backgroundSize: 'cover', 
//       height: '100vh' 
//     }}>
//       <Navbar />
//       <div className='container'>
//         <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
//           <div className="m-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input 
//               type="text" 
//               className="form-control" 
//               name='name' 
//               value={credentials.name} 
//               onChange={onChange} 
//               aria-describedby="nameHelp" 
//               required 
//             />
//           </div>
//           <div className="m-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input 
//               type="email" 
//               className="form-control" 
//               name='email' 
//               value={credentials.email} 
//               onChange={onChange} 
//               aria-describedby="emailHelp" 
//               required 
//             />
//           </div>
//           <div className="m-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input 
//               type="password" 
//               className="form-control" 
//               value={credentials.password} 
//               onChange={onChange} 
//               name='password' 
//               required 
//             />
//           </div>
//           <div className="m-3">
//             <label htmlFor="location" className="form-label">Location</label>
//             <input 
//               type="text" 
//               className="form-control" 
//               name='location' 
//               value={credentials.location} 
//               onChange={onChange} 
//               required 
//             />
//           </div>
//           <button type="submit" className="m-3 btn btn-success">Submit</button>
//           <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!credentials.name || !credentials.email || !credentials.password || !credentials.location) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/create/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.location,
        }),
      });

      const json = await response.json();

      if (response.ok) {
        // Save token and redirect
        localStorage.setItem('token', json.authToken);
        navigate('/login');
      } else {
        alert(`Error: ${json.message || 'Enter valid credentials'}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <Navbar />
      <div className="container">
        <form
          className="w-50 m-auto mt-5 border bg-dark border-success rounded p-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-white">Sign Up</h2>
          <div className="m-3">
            <label htmlFor="name" className="form-label text-white">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
            />
          </div>
          <div className="m-3">
            <label htmlFor="location" className="form-label text-white">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={credentials.location}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">
            Already a user?
          </Link>
        </form>
      </div>
    </div>
  );
}
