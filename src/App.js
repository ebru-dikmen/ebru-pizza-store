import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter, Route, Link, Switch, Routes} from 'react-router-dom';
import CartScreen from './screens/Cartscreen';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact Component={Homescreen}></Route>
    <Route path='/cart' exact Component={CartScreen}> </Route>
    </Routes>
    </BrowserRouter>
    <Homescreen/>
    </div>
  );
}

export default App;
