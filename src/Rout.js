import Test from './Test';
import Login from './Login';
 import Home from './Home';
// import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import NoPage from './NoPage';


const Rout = ()=> {

   return(
    <div>
    <Routes>
      <Route path="/" exact component={<Home/>}/>
      <Route path="/login" exact component={<Login/>}/>
      <Route exact path="home" element={<Test/>}/>
      <Route exact path="notfound" element={<NoPage/>}/>
    </Routes>
    </div>
   );
  
  }

  export default Rout
  
  
  