import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component

function Customers() {
  return (
    <div style={{ marginTop: "100px", paddingBottom: "100px" }}>
      <Container>
        <Row className='mb-4'>
          <Col className='text-center'>
            <div className='mb-2 me-2' style={{ backgroundColor: 'blue', padding: '8px', borderRadius: "5px" }}></div>
            <h6 className='me-3 ms-3'>OUR CUSTOMERS</h6>
            <div className='mb-2 ms-2' style={{ backgroundColor: 'blue', padding: '8px', borderRadius: "5px" }}></div>
          </Col>
        </Row>

        <Row className='mb-4'>
          <Col className='text-center'>
            <h1 className='mt-2' style={{ fontSize: "40px" }}>They Trust Us</h1>
          </Col>
        </Row>

        {/* Add the ImageSlider component */}
        <ImageSlider />
      </Container>
    </div>
  );
}

export default Customers;
