import React, { useState } from 'react'; // Corrected import
import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from 'react-router-dom'; // Correct imports from react-router-dom
import Cart from '../screens/Cart';
import Model from '../Model';
import { useCart } from './ContextReducer';

const Navbar = () => {
    let data = useCart();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [cartView, setCartView] = useState(false); // Correct useState usage
    // const username = localStorage.getItem("username");
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        // localStorage.removeItem("username");
        alert("Logout Success");
        navigate("/login");
    };

    return (
        <div className='bg-black'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">
                        GoFood
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            {token && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/order">My Orders</Link>
                                </li>
                            )}
                        </ul>
                        <div>
                            {!token && (
                                <div className='d-flex'>
                                    <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                    <Link className="btn bg-white text-success mx-1" to="/createUser">SignUp</Link>
                                </div>
                            )}
                            {token && (
                                <>
                                    <div className='btn bg-white text-success mx-2' onClick={() => { setCartView(true); }}>
                                        My Cart {" "}
                                        <Badge pill bg="danger">{data.length}</Badge>
                                    </div>
                                    {cartView ? <Model onClose={() => setCartView(false)}><Cart /></Model> : null}
                                    <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                                        Logout
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
