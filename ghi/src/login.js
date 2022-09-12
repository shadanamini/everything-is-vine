import './App.css';
import React,{useState} from 'react';
import { useToken } from './auth';
import { useParams } from 'react-router-dom';
import './auth.css';


function Login() {
const [data,setData] = useState({
username:"",
password:""
})

const {username,password} = data;
const {id} = useParams()

const [,,login] = useToken();

const changeHandler = e => {
setData({...data,[e.target.name]:[e.target.value]});
}

console.log(data)

const submitHandler = e => {
e.preventDefault();
login(
    data.username[0], 
    data.password[0],
    id)
}

return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                </div>
                <form onSubmit={submitHandler}>
                    <input type="text" id="username" className="fadeIn second" name="username" placeholder="Enter Username" 
                    value={username} onChange={changeHandler}/>
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="Enter Password" 
                    value={password} onChange={changeHandler}/>
                    <input type="submit" className="fadeIn fourth" value="Sign In" />
                </form>
                <p className="forgot-password text-right">
                            Need to create an account? <a href={`/wineries/${id}/signup/`}>Sign Up</a>
                </p>
            </div>
        </div>
    
);
}

export default Login;
