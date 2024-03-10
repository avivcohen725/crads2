import { useNavigate } from "react-router-dom";
import { api } from "./apiService";


export const loginUser = (userEmail, userPassword) => {
    return api.post("users/login",
    {
        email: userEmail,
        password: userPassword,
    })
    .then((response) => {
        localStorage.setItem("token", response.data);
        return{
            success: true,
            message: "User logged in successfully",
        };
    })
    .catch((error) => {
        localStorage.setItem("token", null);
        console.error(error);
        return {
            success: false,
            message: error.response.data,
        };
    });
};

export const registerUser = (userObj) => {
    return api.post("users",userObj).then((response) => {
        return{
            success: true,
            message: response.data,
        }; 
    }).catch((error) => {
        console.error(error);
        return {
            success: false,
            message: error.response.data,
        };
    });
};

export const getProfile = (token) => {
    // Decode the token to extract the user ID
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const userId = decodedToken._id;
    console.log(token);
    console.log("users/"+userId);

    // Send the user ID to the API to fetch the profile data
    return api.get(`users/${userId}`).then((response) => {
            // Return the profile data received from the API
            return {
                success: true,
                message: response.data,
            }; 
        }).catch((error) => {
            console.error(error);
            localStorage.setItem("token", null);
            return {
                success: false,
                error: error.response.data,
                
            };
        });
};
