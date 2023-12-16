import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Petran() {
  return (
    <div style={{ backgroundColor: "#1D4ED8", paddingTop: "5%", paddingBottom: "5%" }}>

      <Row className="flex-column-reverse flex-md-row">
        <Col sm={12} md={6}>
          <img style={{ width: "100%", marginLeft: "5%" }} src='https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp' alt='' />
        </Col>
        <Col sm={12} md={6}>
          <img style={{ width: "60%", marginLeft: "5%" }} src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp" alt="" />
          <h5 className='mt-1' style={{ color: "white", marginLeft: "5%" }}>PErformance - TRacking - ANalytics</h5>
          <h1 style={{ color: "white", marginLeft: "5%" }}>AI & IoT Enabled</h1>
          <h1 style={{ color: "white", marginLeft: "5%", marginTop: "-15px" }}>Asset Performance</h1>
          <h1 style={{ color: "white", marginLeft: "5%", marginTop: "-15px" }}>Management</h1>
          <p style={{ marginLeft: "5%", color: "white", fontSize: "16px" }}>Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.</p>

          <div className="d-flex align-items-center justify-content-start mt-3 ms-5">
            <h5 className='rounded-pill p-3 me-3' style={{ border: "1px solid white", fontFamily: "bold" }}>Schedule Call</h5>
            <div className='rounded-circle p-4 me-3' style={{ backgroundColor: "#1D4ED8", border: "1px solid white", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon icon={faPlay} style={{ color: "white" }} />
            </div>
            <p style={{ fontFamily: "bold", fontSize: "16px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Watch Video</p>
          </div>
        </Col>
      </Row>

    </div>
  );
}

export default Petran;
