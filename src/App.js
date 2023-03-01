import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/counter';
import Home from './components/home/home';
import About from './components/about/about';
import Shop from './components/shop/shop';
import Navbar from './components/navbar/navbar';
import Details from './components/details/details';
import NotFound from './components/notFound/notFound';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return ( 
    <div >
     <Router>
        <Navbar></Navbar>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<About/>} path="/about"/>
          <Route element={<Shop/>} path="/shop"/>
          <Route element={<Counter/>} path="/counter"/>
          <Route element={<Details/>} path="/shop/:id"/>
          <Route element={<Login/>} path="/login"/>
          <Route element={<Register/>} path="/register"/>
          <Route element={<NotFound/>} path="*"/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;