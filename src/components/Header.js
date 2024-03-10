import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isBusiness, setIsBusiness] = useState(false);
    const [hasFavorites, setHasFavorites] = useState(false);
    const navigate = useNavigate();

    const handleLogOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setLoggedIn(false);
        setIsBusiness(false);
        setHasFavorites(false);
        navigate("/");
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                setIsBusiness(decodedToken.isBusiness === true);
                setLoggedIn(true);
                setHasFavorites(true); // Simulate fetching favorites
            } catch (error) {
                // Handle decoding error
                console.error("Error decoding token:", error);
                localStorage.removeItem('token'); // Remove invalid token
            }
        }
    }, []);

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">BCard</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    {isBusiness && <Nav.Link href="/business">Business</Nav.Link>}
                    {loggedIn && hasFavorites && <Nav.Link href="/favorites">Favorites</Nav.Link>}
                </Nav>
                <Form className="d-flex align-items-center">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-person-circle"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            {loggedIn ? (
                                <>
                                    <li><a className="dropdown-item" href="/edit">Edit Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" onClick={handleLogOut}>Logout</a></li>
                                </>
                            ) : (
                                <>
                                    <li><span className="dropdown-item">Hello Guest</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/signin">Sign in</a></li>
                                    <li><a className="dropdown-item" href="/register">Sign up</a></li>
                                </>
                            )}
                        </ul>
                    </div>
                </Form>
            </Container>
        </Navbar>
    );
};

export default Header;
