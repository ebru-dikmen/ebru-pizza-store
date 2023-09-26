import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Link } from 'react-router-dom';
import { Pencil, Trash } from 'phosphor-react';
import { getAllPizzas,deletePizza } from "../actions/pizzaActions";
import { useDispatch, useSelector } from "react-redux";
export default function Pizzaslist() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzas);
  const { pizzas, error, loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <div>
      <h2>Pizzas list</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table table-bordered" >
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {pizzas && pizzas.map(pizza=>{
          return <tr>
            <td>{pizza.name}</td>
            <td>
              Small:{pizza.prices[0]['small']} <br/>
              Medium:{pizza.prices[0]['medium']} <br/>
              Large:{pizza.prices[0]['large']}
            </td>
            <td>{pizza.category}</td>
            <td> 
            <Trash
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
											</Link>
            </td>
          </tr>
        })}
        </tbody>
      </table>

    </div>
  );
}
