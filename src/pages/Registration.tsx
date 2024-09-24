import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import auth from "../api/auth";

function Registration() {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    function usernameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    };

    function passwordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    };

    function register() {
        if (username.length < 3 || password.length < 8) {
            console.error('validation error')
            return
        }

        auth.register(username, password).then((res) => {
            if (res) navigate('/expense')
        })

    };

    return (
        <>
            <div className="d-flex mb-5 flex-column flex-fill justify-content-center align-items-center">
                <h3 className="mb-3">Registration</h3>
                <form onSubmit={(e) => e.preventDefault()} className="card bg-primary-subtle py-4 px-3 mb-2">
                    <input value={username} onChange={usernameChange} type="text" className="form-control " id="username" placeholder="Username"></input>
                    <div className="form-text mb-3 ms-1">no less than 3</div>
                    <input value={password} onChange={passwordChange} type="text" className="form-control " id="password" placeholder="Password"></input>
                    <div className="form-text mb-4 ms-1">no less than 8</div>
                    <button onClick={register} className="btn rounded align-self-end btn-primary" type="submit">Create</button>
                </form>
                <Link to={'/login'}>Already have an account? Login here.</Link>
            </div>
        </>
    )
}

export default Registration