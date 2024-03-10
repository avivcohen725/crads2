import EditProfile from "../components/EditProfile"
import Header from "../components/Header"

function EditProfilePage () {

return(

<div className="container">
<Header/>
    <div className="row justify-content-center">
        <div className="col-md-4"></div>
            <div className="col-md-4 text-center my-3">
            <h1>Edit profile</h1>
            </div>
        <div className="col-md-4"></div>
    </div>
<EditProfile/>
</div>

)
}

export default EditProfilePage