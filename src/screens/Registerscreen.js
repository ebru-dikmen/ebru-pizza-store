import React, { useState } from "react";
import { Button } from '@chakra-ui/react';
import {useDispatch, useSelector} from "react-redux"
import { registerUser } from "../actions/userActions";


export default function Registerscreen() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const dispatch = useDispatch()
  function registeruser(){
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
      const user={
        name:{ name},
          email:email,
        }
        debugger;
        dispatch(registerUser(user));
  }
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5">
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
          <Button className="btn mt-5" onClick={registeruser}>REGISTER</Button>
        </div>
      </div>
    </div>
  );
}
