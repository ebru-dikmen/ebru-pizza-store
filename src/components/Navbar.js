import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser,loginUser } from "../actions/userActions";

export default function Navbar() {
  const cartState = useSelector(state => state.cart);
  const userState = useSelector(state => state.loginUser);
  const { currentUser } = userState
  const dispatch= useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          Ebru Pizza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto " style={{ marginLeft: 0 }} >

            {currentUser ? (<div className="dropdown mt-2">
              <div className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {currentUser.name}
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Orders</a>
                <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}} ><li>Logout</li></a>
           
              </div>
            </div>) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
