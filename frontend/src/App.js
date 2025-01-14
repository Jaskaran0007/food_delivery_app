// // import './App.css';
// // // import Navbar from './components/Navbar';
// // import Home from './screens/Home';
// // import Login from './screens/Login';
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route
// // } from 'react-router-dom';
// // import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// // import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// // import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// // import { SignUp } from './screens/SignUp.js';
// // import { CartProvider } from './components/ContextReducer.js';
// // import PrivateRoute from './services/ProtectedRoutes.js';

// // function App() {
// //   return (
// //     <CartProvider>
// //     <Router>
// //       <div>
// //         <Routes>
// //           <Route exact path='/login' element={<Login/>}/>
// //           <Route exact path='/createUser' element={<SignUp/>}/>
// //           <Route exact path='/' element={<PrivateRoute/>}/>
// //           <Route exact path='/' element={<Home/>}/>
// //         </Routes>
// //       </div>
// //     </Router>
// //     </CartProvider>
// //   );
// // }

// export default App;
// import './App.css';
// import Home from './screens/Home';
// import Login from './screens/Login';
// import { SignUp } from './screens/SignUp.js';
// import { CartProvider } from './components/ContextReducer.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import PrivateRoute from './services/ProtectedRoutes.js';

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div>
//           <Routes>
//             {/* Public Routes */}
//             <Route exact path="/login" element={<Login />} />
//             <Route exact path="/createUser" element={<SignUp />} />

//             {/* Protected Routes */}
//             <Route
//               exact
//               path="/"
//               element={
//                 <PrivateRoute>
//                   <Home />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;
import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'  //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './screens/Login';
import Signup from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/order" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;