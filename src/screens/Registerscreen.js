import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";

export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUser);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();
  function registeruser() {
    // if(password!==cpassword){
    //   alert('Passwords are not matched');

    // }else{
    //   const user={
    //     name:name,
    //     email:email,
    //     password:password
    //   }
    //   console.log(user)
    //   dispatch(registerUser)
    // }
    const user = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(registerUser(user));
  }
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
        {loading && <Loading />}
        {success && <Success success="User registered successfully" />}
        {error && <Error error="Email already registered " />}
        <div>
          <h2 style={{ fontWeight: "bold" }}>Register</h2>
          <input
            required
            type="text"
            placeholder="name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="confirm password"
            className="form-control"
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />
          <Button className="btn mt-5" onClick={registeruser}>
            REGISTER
          </Button>
          <br />
          <a style={{ color: "black" }} href="/login">
            Click here to login
          </a>
        </div>
      </div>
    </div>
  );
}
