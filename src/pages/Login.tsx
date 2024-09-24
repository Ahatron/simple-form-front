import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import auth from "../api/auth";

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    };

    function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    };

    function login() {
        auth.login(username, password).then((res) => {
            if (res) navigate('/expense')
        })
    };

    return (
        <>
            <div className="d-flex mb-5 flex-column flex-fill justify-content-center align-items-center">
                <h3 className="mb-3">Login</h3>
                <form onSubmit={(e) => e.preventDefault()} className="card mb-2 bg-primary-subtle py-4 px-3">
                    <input value={username} onChange={usernameChange} type="text" className="form-control mb-3" id="username" placeholder="Username"></input>
                    <input value={password} onChange={passwordChange} type="text" className="form-control mb-4" id="password" placeholder="Password"></input>
                    <button onClick={login} className="btn rounded align-self-end btn-primary" type="submit">Login</button>
                </form>
                <Link to={'/registration'}>No have an account? Register here.</Link>
            </div>
        </>
    )
}

export default Login