import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Visual() {
  return (
    <div style={{ paddingBottom: "5%", paddingTop: "5%" }}>

      <Row className="flex-column-reverse flex-md-row">

        <Col sm={12} md={6} lg={6}>
          <div className='mt-5' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "5%" }}>
            <div className='mb-2 me-1' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
            <h6 style={{ color: "Black", fontWeight: "bold", fontSize: "1.5rem" }}>AI VISUAL INSPECTION</h6>
          </div>

          <div style={{ marginLeft: "5%" }}>
            <h1 style={{ fontSize: "2rem" }}>Improving Quality with </h1>
            <h1 style={{ fontSize: "2rem" }}>Greater Precision</h1>

            <ul className='mt-4' style={{ fontSize: "1rem" }}>
              <li>
                <span style={{ fontWeight: "bold" }}>Automated Defect Detection:</span> Automated visual inspection uses computer vision and machine learning to identify defects autonomously.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Advanced Image Processing:</span> It captures and enhances digital images for relevant feature extraction.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Informed Decision-Making:</span> The system classifies defects, aiding manufacturers in quality control decisions.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Real-Time Quality Assurance:</span> Integration with manufacturing enables real-time quality control and reduces substandard product risks.
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h5 className='rounded-pill p-3 me-5 text-center text-white' style={{ marginLeft: "5%", marginTop: "1rem", border: "1px solid white", fontFamily: "bold", backgroundColor: "#1D4ED8", width: "80%" }}>Schedule Call</h5>
            <h5 style={{ marginTop: "1rem" }}>Read more  <i style={{ color: "blue" }} class='fa-solid fa-arrow-up-right-from-square'></i></h5>
          </div>
        </Col>

        {/* Conditionally render the image for larger screens */}
        <Col sm={12} md={6} lg={6} className='d-none d-lg-block'>
          <img className='rounded ms-5 mt-5' style={{ width: "100%" }} src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp" alt="image" />
        </Col>

      </Row>

    </div>
  );
}

export default Visual;
