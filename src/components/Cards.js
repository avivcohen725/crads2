import { useEffect, useState } from "react";
import { getAllCards } from "../services/cardsService";
import Card from "./Card";

const Cards = () => {
  // State to store the list of cards
  const [cards, setCards] = useState([]);

  // Fetch all cards from the server when the component mounts
  useEffect(() => {
    // Function to fetch cards and update state
    async function fetchCards() {
      try {
        const response = await getAllCards();
        // Check if the response was successful
        if (response.success) {
          // Update cards state with the list of cards
          setCards(response.message);
        } else {
          console.error("Error fetching cards:", response.message);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    }

    // Call the fetchCards function
    fetchCards();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Function to get the user ID from the token stored in localStorage
  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Decode the token and extract the user ID
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken._id;
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    }
    return null;
  };

  return (
    <div className="container justify-content-center align-items-center">
      <div className="row">
        {/* Map over the list of cards and render a Card component for each */}
        {cards.map((card) => (
          <div key={card._id} className="col-md-4 mb-4">
            {/* Pass card data and user ID to the Card component */}
            <Card card={card} userId={getUserIdFromToken()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
