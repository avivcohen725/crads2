import Header from "../components/Header"
import Login from "../components/Login"

function LoginPage () {

return(

<div className="container">
<Header/>
    <div className="row justify-content-center">
        <div className="col-md-4"></div>
            <div className="col-md-4 text-center my-3">
            <h1>Sign In</h1>
            <p className="lead">We missed you</p>
            </div>
        <div className="col-md-4"></div>
    </div>
<Login/>
</div>

)
}

export default LoginPage