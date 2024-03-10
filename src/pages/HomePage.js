import Cards from "../components/Cards";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function HomePage() {

  return (
    <div className="container">
      <Header />
      <div className="row justify-content-center">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center my-3">
          <h1>Cards Gallery</h1>
          <p className="lead">Welcome to our cards gallery</p>
        </div>
        <div className="col-md-4"></div>
      </div>
      <Cards />
      
      <div className="fixed-bottom d-flex justify-content-end mb-4 me-4">
        <Link to="/newcard">
          <Button variant="primary" className="btn-lg rounded-circle">
            <i className="bi bi-plus"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
