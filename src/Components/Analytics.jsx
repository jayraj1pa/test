import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Analytics() {
  return (
    <div style={{ paddingBottom: "5%", paddingTop: "5%" }}>

      <Row className="flex-column-reverse flex-md-row">

        <Col sm={12} md={6} lg={6}>
          <div className='mt-5' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "5%" }}>
            <div className='mb-2 me-1' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
            <h6 style={{ color: "Black", fontWeight: "bold", fontSize: "1.5rem" }}>AI DATA ANALYTICS</h6>
          </div>

          <div style={{ marginLeft: "5%" }}>
            <h1 style={{ fontSize: "2rem" }}>Empowers Businesses to</h1>
            <h1 style={{ fontSize: "2rem" }}>Make Insightful Decisions</h1>

            <ul className='mt-4' style={{ fontSize: "1rem" }}>
              <li>
                <span style={{ fontWeight: "bold" }}>Actionable Insights:</span> AI data analysis enhances decisions, personalizes customer experiences and improves operations.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Increased Customer Loyalty:</span> AI predictive analytics for personalized recommendations & increased customer loyalty.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Quality Assurance:</span> AI analytics identifies and mitigates potential issues, ensuring the quality and reliability of products and services.
              </li>

              <li className='mt-4'>
                <span style={{ fontWeight: "bold" }}>Efficiency and Responsiveness:</span> Customers benefit from increased efficiency, improved product quality, and more responsive interactions with businesses.
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h5 className='rounded-pill p-3 me-5 text-center text-white' style={{ marginLeft: "5%", marginTop: "1rem", border: "1px solid white", fontFamily: "bold", backgroundColor: "#1D4ED8", width: "80%" }}>Schedule Call</h5>
            <h5 style={{ marginTop: "1rem" }}>Read more  <i style={{ color: "blue" }} class='fa-solid fa-arrow-up-right-from-square'></i></h5>
          </div>
        </Col>

        <Col sm={12} md={6} lg={6}>
          <img className='rounded me-5 mt-5' style={{ width: "100%" }} src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp" alt="image" />
        </Col>

      </Row>

    </div>
  );
}

export default Analytics;
