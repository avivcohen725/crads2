import React from 'react';

const Card = ({ card, userId }) => {
  // Check if the user is the owner of the card
  const isOwner = card._id === userId;

  // Combine address fields into a single string
  const combineAddress = (address) => {
    const { country, state, city, street, houseNumber, zip } = address;
    return `${country} ${state}, ${city}, ${street}, ${houseNumber}, ${zip}`;
  };

  // Construct Google Maps link
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(combineAddress(card.address))}`;

  // Open Google Maps in a new tab
  const openGoogleMaps = () => {
    window.open(googleMapsLink, '_blank');
  };

  // Open website link in a new tab
  const openWeb = () => {
    let url = card.web;
    if (!/^https?:\/\//i.test(url)) {
      url = 'http://' + url;
    }
    window.open(url, '_blank');
  };

  const handleDelete = () => {

  };


  const handleLike = () => {

  };

  return (
    <div className="card h-100">
      {/* Display card image */}
      {card.image && (
        <div className="text-center">
          <img
            className="card-img-top"
            src={card.image.url}
            alt={card.image.alt}
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}
          />
        </div>
      )}

      <div className="card-body d-flex flex-column">
        {/* Card title */}
        <h5 className="card-title">{card.title}</h5>
        
        {/* Card subtitle */}
        <p className="card-text">{card.subtitle}</p>

        {/* Action buttons */}
        <div className="d-flex justify-content-between">
          {/* Google Maps button */}
          <button className="btn" onClick={openGoogleMaps}>
            <i className="bi bi-geo-alt"></i>
          </button>
          
          {/* Website button */}
          <button className="btn" onClick={openWeb}>
            <i className="bi bi-globe-americas"></i>
          </button>

          {/* Like button */}
          <button className="btn" onClick={handleLike}>
            <i className="bi bi-heart"></i>
          </button>

          {/* Delete button (visible only to the owner) */}
          {isOwner && (
            <button className="btn" onClick={handleDelete}>
              <i className="bi bi-trash"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
