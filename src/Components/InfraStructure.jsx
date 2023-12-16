import React from 'react';
import { Row, Col } from 'react-bootstrap';

function InfraStructure() {
  return (
    <div style={{ paddingBottom: "100px", paddingTop: "100px" }}>

      <Row>
        <Col xs={12} md={6} lg={6}>
          <div className='mt-5' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "5%" }}>
            <div className='mb-2 me-1' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
            <h6 style={{ color: "Black", fontWeight: "bold", fontSize: "1.5rem" }}>AI INFRASTRUCTURE INSPECTION</h6>
          </div>

          <div style={{ marginLeft: "5%" }}>
            <h1 style={{ fontSize: "2rem" }}>Enhances Efficiency,</h1>
            <h1 style={{ fontSize: "2rem" }}>Safety, and Cost-</h1>
            <h1 style={{ fontSize: "2rem" }}>Effectiveness</h1>

            <ul className='mt-4' style={{ fontSize: "1rem" }}>
              <li>
                <span style={{ fontWeight: "bold" }}>Cutting-Edge Solution:</span> Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Real-Time Insights:</span> Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Longevity and Cost-Effectiveness:</span> Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Responsive Maintenance:</span> Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks.
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h5 className='rounded-pill p-3 me-5 text-center text-white' style={{ marginLeft: "5%", marginTop: "1rem", border: "1px solid white", fontFamily: "bold", backgroundColor: "#1D4ED8", width: "80%" }}>Schedule Call</h5>
            <h5 style={{ marginTop: "1rem" }}>Read more  <i style={{ color: "blue" }} class='fa-solid fa-arrow-up-right-from-square'></i></h5>
          </div>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <img className='rounded me-5' style={{ width: "100%" }} src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp" alt="image" />
        </Col>
      </Row>

    </div>
  );
}

export default InfraStructure;
