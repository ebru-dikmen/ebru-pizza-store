
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Adminscreen from "./screens/Adminscreen";
import Addpizza from "./screens/Addpizza";
import Userslist from "./screens/Userslist";
import Orderslist from "./screens/Orderslist";
import Pizzaslist from "./screens/Pizzaslist";
import Editpizza from "./screens/Editpizza";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/admin" element={<Adminscreen />} />
					<Route path='/admin/addpizza' element={<Addpizza />} />
          <Route path='/admin/editpizza/:pizzaid' element={<Editpizza />} />
					<Route path='/admin/userslist' element={<Userslist />} />
					<Route path='/admin/orderslist' element={<Orderslist />} />
					<Route path='/admin/pizzaslist' element={<Pizzaslist />} />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
