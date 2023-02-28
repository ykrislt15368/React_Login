import { useRef, useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


const LOGIN_URL = 'http://localhost:8000/v1/api/login';

const Login = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMessage('');
    }, [])

    var profileData = {
        "username": username,
        "password": password,
        "email": email
    }
    const login=(event)=> {

        event.preventDefault();
      // alert(`The name you entered was: ${username} ${password} ${email}`);
        
        fetch(LOGIN_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(profileData)
        }).then(response => {
            //alert(`${response}`);
            if (response.ok){
                //alert(`The name you entered was: ${response.ok}`);
            console.log('sucess');
            navigate("/home");
            }else{
               // alert(`unauthorized`);
                console.log('unauthorized');
                navigate("/notfound");
            }
        }).catch((error) => {
            alert(`error`);
            console.log(error);
            setErrorMessage(error)
            navigate('/notfound');
        })
    }
    
    // const loginv=(event)=>{
    //     event.preventDefault();
    //     alert(`The name you entered was: ${username}`)
    // }
    
    return (
                <div>
                    <div>
                        <p  ref={errRef} className={errorMessage ? "errmsg" :
                            "offscreen"} > {errorMessage} </p>
                    </div>

                    <h1> Sign In </h1>
                    <form onSubmit={login}>
                        <label htmlFor='username'> Username: </label>
                        <input type="text"
                            id="username"
                            ref={userRef}
                             autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <label htmlFor='password'> Password: </label>
                        <input type="password"
                            id="password"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <label htmlFor='email'> Email: </label>
                        <input type="text"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                </div>
            )}

export default Login