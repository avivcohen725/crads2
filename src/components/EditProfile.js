import { useEffect, useState } from "react";
import { getProfile, loginUser, registerUser } from "../services/usersService";

const EditProfile = () => {
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    getProfile(token)
        .then((response) => {
            if (response.success) {
                // Update the form data state with the received profile data
                setFormData(response.data);
            } else {
                setError(response.error);
            }
        })
        .catch((error) => {
            setError("Error fetching profile data");
            console.error(error);
        });
}, []);

    const [formData, setFormData] = useState({
            name: {
              first: "",
              middle: "",
              last: ""
            },
            phone: "",
            email: "",
            password: "",
            image: {
              url: "",
              alt: ""
            },
            address: {
              state: "",
              country: "",
              city: "",
              street: "",
              houseNumber: "",
              zip: ""
            },
            isBusiness: false,
            isAdmin: false
    });

    const [error, setError] = useState(null);



    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }))};

        const handleNameChange = (e) => {
            setFormData((prevFormData) => ({
                ...prevFormData,
                name: {
                    ...prevFormData.name,
                    [e.target.name]: e.target.value,
                },
            }))};

        const handleImageChange = (e) => {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    image: {
                        ...prevFormData.image,
                        [e.target.name]: e.target.value,
                    },
                }))};

        const handleAddressChange = (e) => {
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        address: {
                            ...prevFormData.address,
                            [e.target.name]: e.target.value,
                        },
                    }))};


        const handleCheckboxChange = (e) => {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    isBusiness: e.target.checked, // Update isBusiness value based on checkbox state
                    }));
                };
        
    
    const handleSubmit = async (e) => {
        e.preventDefault();
            console.log("Form submitted!");    
        /*const response = await editProfile(formData);
        console.log(response);

        if (response.success) {
            setError(null);

        } else {
            setError(response.message);
        }*/
        
    }
        
    return (

      <div className="container justify-content-center align-items-center">
            <div className="col">
          <form onSubmit={handleSubmit}>
          {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
            
            <div className="row mt-3">
                <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleInputChange}
                name="email"
              />
              </div>
              
            </div>
    
            <div className="row mt-3">
                <div>
                <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                />
                </div>
            </div>
    
    <div className="row mt-3">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={formData.name.first}
                onChange={handleNameChange}
                name="first"
              />
            </div>

            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Middle Name"
                value={formData.name.middle}
                onChange={handleNameChange}
                name="middle"
              />
            </div>

            <div className="col-4">
            <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={formData.name.last}
                onChange={handleNameChange}
                name="last"
              />
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Profile url picture"
                value={formData.image.url}
                onChange={handleImageChange}
                name="url"
              />
            </div>

            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="write a image description"
                value={formData.image.alt}
                onChange={handleImageChange}
                name="alt"
              />
            </div>
        </div>


        <div className="row mt-3">
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                placeholder="state"
                value={formData.address.state}
                onChange={handleAddressChange}
                name="state"
              />
            </div>
            
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                placeholder="country"
                value={formData.address.country}
                onChange={handleAddressChange}
                name="country"
              />
            </div>
            
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="city"
                value={formData.address.city}
                onChange={handleAddressChange}
                name="city"
              />
            </div>

            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="street"
                value={formData.address.street}
                onChange={handleAddressChange}
                name="street"
              />
            </div>

        </div>
        
        <div className="row mt-3">

            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="house number"
                value={formData.address.houseNumber}
                onChange={handleAddressChange}
                name="houseNumber"
              />
            </div>
            
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="zip code"
                value={formData.address.zip}
                onChange={handleAddressChange}
                name="zip"
              />
            </div>
            </div>


            <div className="row mt-3 mb-3">

            <div className="col-4">
              <input
                type="checkbox"
                className="form-check-input"
                id = "isBusinessCheckBox"
                checked={formData.isBusiness}
                onChange={handleCheckboxChange}
              />
              <label for="isBusinessCheckBox">Is it a business account?</label>
            </div>

            </div>
            <button type="submit"className="btn btn-primary w-100">Update</button>
          </form>
          </div>
        </div>
      );
    };

export default EditProfile;