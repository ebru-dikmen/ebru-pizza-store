import React, { useEffect } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../actions/orderActions";
import {Text} from '@chakra-ui/react';
export default function Orderslist() {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getAllOrders);
  const { error, loading ,orders } = orderstate;
  useEffect(()=>{
    dispatch(getAllOrders())
  },[])
  return (
    <div>
    <h2>Orders list</h2>
    {loading && <Loading />}
    {error && <Error error="Something went wrong" />}
    <table className="table table-bordered" >
      <thead className="thead-dark">
        <tr>
        <th>Order id</th>
          <th>Name</th>
          <th>email</th>
          <th>userid</th>
          <th>shippingAddress</th>
          <th>orderAmount</th>
          <th>isDelivered</th>
        </tr>
      </thead>
      <tbody>
      {orders && orders.map(order=>{
        return <tr>
          <td>{order.orderId}</td>
          <td>{order.name}</td>
          <td>{order.email}</td>
          <td>{order.userid}</td>
          <td>{order.shippingAddress}</td>
          <td>{order.orderAmount}</td>
          <Text fontSize='1xl'>
						Order Status :{' '}
						<span>
							<Text
								color={
									order.isDelivered ? 'green' : 'red'
								}
							>
								{order.isDelivered ? (
									<Text fontWeight='semibold'>DELIVERED</Text>
								) : (
									<Text fontWeight='semibold'>
										NOT DELIVERED
									</Text>
								)}
								{order.isDelivered
									? localStorage.removeItem('cartItems')
									: null}
							</Text>
						</span>
					</Text>
        </tr>
      })}
      </tbody>
    </table>

  </div>
  )
}
