import { useState } from "react";
import { loginUser } from "../services/usersService";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    
    const [formData, setFormData] = useState({
        email: "ellvis@email.com",
        password: "Abc!123Abc",
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }))};
    
    const handleSumbit = async (e) => {
        e.preventDefault();
            console.log("Form submitted!");
        
        const response = await loginUser(formData.email, formData.password);
        console.log(response);

        if (response.success) {
            setError(null);
            navigate("/");
        } else {
            setError(response.message);
        }}


        return (
            <div className="container justify-content-center align-items-center mt-5 ">
                    <form onSubmit={handleSumbit}>
                        <div className="mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                name="email"
                            />
                        </div>
    
                        <div className="mb-3">
                            <input type="password"
                                className="form-control"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                name="password"
                            />
                        </div>
    
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    {error && <p className="text-danger mt-3">{error}</p>}
                </div>
        );
    };

export default Login;