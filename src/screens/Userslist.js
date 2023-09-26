
import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from 'react-router-dom';
import { Pencil, Trash } from 'phosphor-react';
import { getAllUsers } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
export default function Userslist() {
  const dispatch = useDispatch();

  const usersstate = useSelector((state) => state.getAllUsers);
  const { users, error, loading } = usersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Users list</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table table-bordered" >
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users && users.map(user=>{
          return <tr>
            <td>{user.name}</td>
       
            
            <td>{user.email}</td>
            <td> 
            {/* <Trash
												onClick={() => {
													dispatch(
														deletePizza(pizza._id),
													);
												}}
												size={22}
												color='#bc2037'
											/>
											<Link
												to={`/admin/editpizza/${pizza._id}`}
											>
												<Pencil
													size={22}
													color='#19e672'
												/>
											</Link> */}
            </td>
          </tr>
        })}
        </tbody>
      </table>

    </div>
  );
}
