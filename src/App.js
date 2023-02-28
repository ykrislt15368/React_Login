import './App.css';
import Login from './Login';
import Rout from './Rout';
import { BrowserRouter} from 'react-router-dom';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Rout/> 
        <Login/>
      </BrowserRouter>
      {/* <Test/> */}
      
    </div>
  );
}

export default App;
