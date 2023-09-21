import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {BrowserRouter, Route, Link, Switch, Routes} from 'react-router-dom';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
    <Route path='/' exact Component={Homescreen}></Route>
    <Route path='/cart' exact Component={Cartscreen}> </Route>
    <Route path='/register' exact Component={Registerscreen}> </Route>
    <Route path='/login' exact Component={Loginscreen}> </Route>
    </Routes>
    </BrowserRouter>
    <Homescreen/>
    </div>
  );
}

export default App;
