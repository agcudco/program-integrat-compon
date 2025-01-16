import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

interface Props {
    onLogin: (login: boolean) => void;
}


const Login: React.FC<Props> = ({onLogin}) => {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const credentials = [
        {username: "admin", password: "1234"},
        {username: "user", password: "1234"}
    ]

    const handleLogin = () => {
        const user = credentials.find(
            (cred)=>cred.username === username && cred.password === password
        );

        if(user){
            onLogin(true);
            navigate("/");
        }else{
            setError("Usuario y/o contraseña incorrectos");
        }

    }

    return (
        <div>
            <input
                type="text"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {error}
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default Login;