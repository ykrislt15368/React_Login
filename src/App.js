import './App.css';
import Test from './Test';
import Login from './Login';
import Home from './Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { NoPage } from './NoPage';


function App() {

  <BrowserRouter>
  <Routes>
    <Route path="/" exact component={Home}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/home" exact component={Test}/>
    <Route path="/notfound" exact component={NoPage}/>
  </Routes>
</BrowserRouter>
  return (

    <div className="App">
      <Login/>
      {/* <Test/> */}
    </div>
  );
}

export default App;
