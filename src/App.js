
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './components/Main/main';
import Home from './components/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/*<Main></Main> */}
       <Route path= '/signup' element = {<Signup />}></Route>
       <Route path= '/login' element = {<Login />}></Route>
       <Route path= '/' element = {<Home/>}></Route>
       <Route path= '/main' element = {<Main/>}></Route>
      </Routes>
      </BrowserRouter>
      
  
  );
}

export default App;
