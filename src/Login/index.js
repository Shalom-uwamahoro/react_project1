import "./index.css";
import { useState } from "react";
import { login } from "./utils";
import { Link, useNavigate} from 'react-router-dom';
    

const Login = () =>{

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const results = await login({username, password});
        navigate('./Users')

        console.log({results});
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input required placeholder="Enter username" type="text" onChange={(event)=>setUsername(event.target.value)}/>
            <br/>
            <input required placeholder="Enter password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
            <br/>
           <Link to="/Users"> <button type="submit">Login</button> </Link>

        </form>
    )
}


export default Login



