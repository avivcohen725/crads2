import { useState } from "react";
import { createNewCard } from "../services/usersService";

const CreateNewCard = () => {
    
    
    const [formData, setFormData] = useState(
        {
            title: "",
            subtitle: "",
            description: "",
            phone: "",
            email: "",
            web: "",
            image: {
              url: "",
              alt: ""
            },
            address: {
              state: "",
              country: "",
              city: "",
              street: "",
              houseNumber:"" ,
              zip: ""
            }
          }
    
    );

    const [error, setError] = useState(null);


    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
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

                    const handleSubmit = async (e) => {
                        e.preventDefault();
                        console.log("Form submitted!");

                        const response = await createNewCard(formData);
                        console.log(response);
                    }
        
    return (
      <div className="container justify-content-center align-items-center mt">
          <form onSubmit={handleSubmit}>
          {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
            
            <div className="row mt-3">
                <div className="col">
                <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                value={formData.title}
                onChange={handleInputChange}
                name="title"
                />
              </div>

              <div className="col">
                <input
                type="text"
                className="form-control"
                placeholder="Enter subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                name="subtitle"
                />
              </div>

            </div>

            <div className="row mt-3">
                <div className="col">
                <input
                type="text"
                className="form-control"
                placeholder="Enter description"
                value={formData.description}
                onChange={handleInputChange}
                name="description"
                />
              </div>
            </div>
    
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
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter website url"
                value={formData.web}
                onChange={handleInputChange}
                name="web"
              />
            </div>

            <div className="col-6">
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
                placeholder="Enter Card url picture"
                value={formData.image.url}
                onChange={handleImageChange}
                name="url"
              />
            </div>

            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Description card picture"
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
        
        <div className="row mt-3 mb-3">

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


            <button type="submit"className="btn btn-primary w-100">Create a Card</button>
          </form>
          </div>
      );
      
    };

export default CreateNewCard;