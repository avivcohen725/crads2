import CreateNewCard from "../components/CreateNewCard"
import Header from "../components/Header"

function CreateNewCardPage () {

return(

<div className="container">
<Header/>
    <div className="row justify-content-center">
        <div className="col-md-4"></div>
            <div className="col-md-4 text-center my-3">
            <h1>Create a card</h1>
            <p className="lead">can't wait see what you add</p>
            </div>
        <div className="col-md-4"></div>
    </div>
<CreateNewCard/>
</div>

)
}

export default CreateNewCardPage