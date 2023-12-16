import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

function ImageSlider() {
  const imageLinks = [
    'https://www.ombrulla.com/best-western.webp',
    'https://www.ombrulla.com/dubai-festival-city.webp',
    'https://www.ombrulla.com/wild-leaf.webp',
    'https://www.ombrulla.com/emirates.webp',
    'https://www.ombrulla.com/burger-king.webp',
    'https://www.ombrulla.com/damac.webp',
    'https://www.ombrulla.com/planet-fitness.webp',
    'https://www.ombrulla.com/suja.webp',
    'https://www.ombrulla.com/azelit.webp',
  ];

  const [currentSet, setCurrentSet] = useState(imageLinks.slice(0, 5));

  useEffect(() => {
    // Function to update the set of images every 3 seconds
    const updateImages = () => {
      const startIndex = currentSet.length;
      const endIndex = startIndex + 4;
      const nextSet = imageLinks.slice(startIndex, endIndex);
      setCurrentSet(nextSet.length === 4 ? nextSet : imageLinks.slice(0, 5));
    };

    // Set up an interval to update images every 3 seconds
    const intervalId = setInterval(updateImages, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentSet, imageLinks]); // Remove currentSet from the dependency array

  return (
    <Container fluid>
      <Row className="justify-content-center" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {/* Display the current set of images */}
        {currentSet.map((image, index) => (
          <img
          className='ms-5 me-5'
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '200px', height: '150px', margin: '0 10px', transition: 'transform 0.5s' }}
          />
        ))}
      </Row>
    </Container>
  );
}

export default ImageSlider;
