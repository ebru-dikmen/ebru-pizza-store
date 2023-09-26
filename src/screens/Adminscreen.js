import { Switch, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Userslist from "./Userslist";
import Orderslist from "./Orderslist";
import Addpizza from "./Addpizza";
import Editpizza from './Editpizza'
import Pizzaslist from "./Pizzaslist";
import { Link } from "react-router-dom";
export default function Adminscreen() {
  const userState = useSelector((state) => state.loginUser);
  const { currentUser } = userState;
  const dispatch = useDispatch();
  useEffect(() => {

    if (!currentUser?.isAdmin) {
    //  window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>ADMIN PANEL</h2>

          <ul className="adminfunction">
            <li>
              <Link to={"/admin/userslist"}>	<Text
								color='white'
						
							>
								Users List
							</Text></Link>
            </li>
            <li>
              <Link to={"/admin/pizzaslist"}>	<Text
								color='white'
						
							>
								Pizzas List
							</Text></Link>
            </li>
            <li>
              <Link to={"/admin/addpizza"}>	<Text
								color='white'
							
							>
								Add pizza
							</Text></Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"}>	<Text
								color='white'
				
							>
								Orders List
							</Text></Link>
            </li>
          </ul>
          <Switch>
            <Routes>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/pizzaslist" component={Pizzaslist} exact />
            <Route path="/admin/addpizza" component={Addpizza} exact />
            <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact />
            </Routes>
      
          </Switch>
        </div>
      </div>
    </div>
  );
}
