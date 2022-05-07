import { Link } from "react-router-dom"

function Signup(){
    function onSignup(e){
        e.preventDefault()
    }


    return (
        <div>
            <form onSubmit={onSignup}>
                <label>Name: </label>
                <input type="text" placeholder="Full Name"/><br/>
                <label>Username: </label>
                <input type="text" placeholder="Username"/><br/>
                <label>Email: </label>
                <input type="email" placeholder="Email"/><br/>
                <label>Birthday: </label>
                <input type="date" placeholder="Birthday"/><br/>
                <label>Password: </label>
                <input type="password" placeholder="Password"/><br/>
                <label>Confirm Password: </label>
                <input type="password" placeholder="Confirm Password"/><br/>
                <button type="submit">Sign Up</button>
                <Link to="/login">Already have an account? Login</Link>
            </form>
        </div>
    )
}

export default Signup