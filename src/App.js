import { Routes , Route, Link} from 'react-router-dom'
import Login from "./Login";
import Users from "./Users";

export const Introduction = () =>{ //we can write export before the function/component name or we write it at the end of component
  return(
    <h2>What is React?</h2>
  );
  // return <h2>What is React?</h2>; this would work too
};


const App = () =>{
  return(
    <div>
    {/* <Login/> */}
    <h1>My app</h1>
    <nav>
      <Link to="/login">Login</Link>
    </nav>
    {/* <Users/> */}
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/users' element={<Users/>}/>
    </Routes>
    
    </div>
  )
}

export default App;                   //we use default on the major component

                                      //we can export a minor component inside a major one; however the reverse is wrong