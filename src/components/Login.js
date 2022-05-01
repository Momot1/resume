import { useEffect } from "react"

function Login(){

    useEffect(() => {
        fetch("https://markmomotbackend.herokuapp.com/birds")
        .then(r => r.json())
        .then(console.log)
    }, [])


    return (
        <div>
            <h1>Login</h1>
        </div>
    )
}

export default Login