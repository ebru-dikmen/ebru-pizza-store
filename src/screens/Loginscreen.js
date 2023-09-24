
import React, { useEffect, useState } from "react";
import { Button } from '@chakra-ui/react';
import {useDispatch, useSelector} from "react-redux"
import {loginUser} from '../actions/userActions'

export default function Loginscreen() {

  const [name, setname] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{

    if(localStorage.getItem('currentUser')){
      window.location.href='/'
    }
  },[])
  function login(){
   
    const user = {name};
    dispatch(loginUser(user));
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
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
         
          <Button className="btn mt-5" onClick={login}>LOGIN</Button>
        </div>
      </div>
    </div>
  )
}
