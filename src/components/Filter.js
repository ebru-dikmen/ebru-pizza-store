import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {


    const [searchkey, setsearchkey]=useState('');
    const [category,setcategory]= useState('all')
    const dispatch = useDispatch();
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-3 w-10'>
                <input type='text' onChange={(e)=>setsearchkey(e.target.value)}
                 value={searchkey} className='form-control' placeholder='search pizza'/>

            </div>
            <div className='col-md-3 w-20'>
                <select className='form-control' value={category} onChange={(e)=>setcategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="veg">Vegan</option>
                    <option value="nonveg">Non Vegan</option>
                </select>

            </div>
            <div className='col-md-3 w-20'>
                <button className='btn' onClick={()=>{dispatch(filterPizzas(searchkey,category))}}>FILTER</button>
            </div>
        </div>
    </div>
  )
}
