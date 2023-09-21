
import React, { useState } from "react";
import { Button } from '@chakra-ui/react';
import {useDispatch, useSelector} from "react-redux"
import {loginUser} from '../actions/userActions'

export default function Loginscreen() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();

  function login(){
   
    const user = {email, password};
    dispatch(login(user));
  }

  return (
    <div>
            <div className="col-md-5 mt-5">
        <div>
          <h2 style={{ fontWeight: "bold" }}>Login</h2>
          
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
      
          <Button className="btn mt-5" onClick={login}>LOGIN</Button>
        </div>
      </div>
    </div>
  )
}
