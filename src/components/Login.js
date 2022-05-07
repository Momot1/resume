import { Link } from "react-router-dom"

function Login(){

    function onLogin(e){
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                <label>Username: </label>
                <input type="text" /><br/>
                <label>Password: </label>
                <input type="password" />
                <button type="submit" >Login</button>
                <Link to="/signup">Don't have an account? Sign Up</Link>
            </form>
        </div>
    )
}

export default Login