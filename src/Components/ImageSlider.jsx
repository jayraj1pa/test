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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
    };

    const intervalId = setInterval(updateIndex, 3000);

    return () => clearInterval(intervalId);
  }, [imageLinks]);

  return (
    <Container fluid>
      <Row className="justify-content-center" style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
        {[0, 1, 2, 3, 4].map((index) => (
          <img
            key={index}
            src={imageLinks[(currentIndex + index) % imageLinks.length]}
            alt={`Image ${index + 1}`}
            style={{
              width: '200px',
              height: '150px',
              margin: '0 10px',
              transition: 'transform 0.5s',
              transform: `translateX(${index * 220}px)`, // Adjust the value for spacing between images
            }}
          />
        ))}
      </Row>
    </Container>
  );
}

export default ImageSlider;
