import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
export default function Cartscreen() {
  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.cartItems;
  var subTotal= cartItems.reduce((x,item)=>x+item.price,0)  
  const dispatch = useDispatch()

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 style={{ fontSize: '40px' }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div  key={item._id+1} className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>{item.name}[{item.varient}]</h1>
                  <h1>Price: {item.quantity}*{item.prices[0][item.varient]}={item.price} </h1>
                  <h1 style={{display:'inline'}}>Quantity:</h1>
                  <i className="fa fa-plus"  aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity+1,item.varient))}}></i>
                  <b>{item.quantity}</b>
                  <i className="fa fa-minus" aria-hidden="true"  onClick={()=>{dispatch(addToCart(item, item.quantity-1,item.varient))}}></i>
                  <hr/>
                </div>

                <div className="m-1 w-100">
                <img src={item.image} style={{height:'80px' ,width:'80px'}}/>
                
                </div>

                <div className="m-1 w-100">
                <i className="fa fa-trash mt-2" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4">
          <h2 style={{fontWeight:"bold"}}>Subtotal:{subTotal}/-</h2>
        </div>
      </div>
    </div>
  );
}
