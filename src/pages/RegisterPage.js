import Header from "../components/Header"
import Register from "../components/Register"

function RegisterPage () {

return(

<div className="container">
<Header/>
    <div className="row justify-content-center">
        <div className="col-md-4"></div>
            <div className="col-md-4 text-center my-3">
            <h1>Registration</h1>
            <p className="lead">Getting Started</p>
            </div>
        <div className="col-md-4"></div>
    </div>
<Register/>
</div>

)
}

export default RegisterPage