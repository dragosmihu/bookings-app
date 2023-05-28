import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(0);

  useEffect(() => {
    fetch(`/api/show/${showId}`)
      .then(response => response.json())
      .then(data => {
        setShow(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching show details.');
        setLoading(false);
      });
  }, [showId]);

  const handleNumberChange = event => {
    setSelectedNumber(event.target.value);
  };

  const handleButtonClick = () => {
    // Logic to handle the button click event
    // You can perform any necessary actions here based on the selectedNumber value
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {show && (
        <div className="detailsContainer">
          <div className="detailsContent">
            <img className="detailsImg" src="../img/poza.png" alt="image" />
            <div>
              <h2>{show.name}</h2>
              <p>Pretul este: {show.price}</p>
            </div>
          </div>
          <div className="detailsFooter">
          <div className="selectorContainer">
              <select
                className="detailsSelector"
                value={selectedNumber}
                onChange={handleNumberChange}
              >
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div className="buttonContainer">
              <button className="detailsButton" onClick={handleButtonClick}>
                Cumpara bilet
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
