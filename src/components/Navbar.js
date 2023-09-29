import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, loginUser } from "../actions/userActions";

export default function Navbar() {
  const cartState = useSelector((state) => state.cart);
  const userState = useSelector((state) => state.loginUser);
  const { currentUser } = userState;
  console.log(userState);
  const x = localStorage.getItem("currentUser");
  var y = JSON.parse(x);

  function logoutUser() {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("currentUser");
    window.location.replace("/");
  }
  const dispatch = useDispatch();
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
        <select className="collapse navbar-collapse" id="navbarNav">
       
            {y ? (
              <div className="dropdown show">
                <div
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {y.name}
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">Something else here</a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <option>Logout</option>
                  </a>
                </div>
              </div>
            ) : (
              <option className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </option>
            )}

            <option className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartState.cartItems.length}
              </a>
            </option>
      
        </select>
      </nav>
    </div>
  );
}
