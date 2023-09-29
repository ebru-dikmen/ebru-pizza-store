
import React, { useEffect, useState } from "react";
import { Button } from '@chakra-ui/react';
import {useDispatch, useSelector} from "react-redux"
import {loginUser} from '../actions/userActions'
import Loading from "../components/Loading";
import Error from "../components/Error"
export default function Loginscreen() {

  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const loginstate= useSelector(state=>state.loginUser)
  const {loading,error}=loginstate

  const dispatch = useDispatch();
  useEffect(()=>{

    if(localStorage.getItem('currentUser')){
      window.location.href='/'
    }
  },[])
  function login(){
   
    const user = {name,password};
    dispatch(loginUser(user));
  }

  return (
    <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5">
        <div>
          <h2 style={{ fontWeight: "bold" }}>Login</h2>
          
          {loading && (<Loading/>)}
          {error && (<Error error='Invalid Credentials'/>)}
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
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
         
          <Button className="btn mt-5" onClick={login}>LOGIN</Button>
          <br/>
          <a style={{color:'black'}} href="/register">Click here to register</a>
        </div>
      </div>
    </div>
  )
}
