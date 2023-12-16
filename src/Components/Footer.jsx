import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{ backgroundColor: "#04102A", marginTop: "80px", paddingTop: "40px", paddingBottom: "40px" }}>
      <Row>
        <Col xs={12} sm={6} md={3} lg={3}>
          <h2 className='ms-3' style={{ color: "white", marginLeft: "20px", marginTop: "20px" }}>About US</h2>
          <p className='mt-2 p-3' style={{ color: "#8A99B4", marginLeft: "15px", wordSpacing: '4px' }}>
            Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.
          </p>

          <div className='mb-5' style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
            <i className="fa-brands fa-facebook" style={{ margin: '0 10px', fontSize: '24px' }}></i>
            <i className="fa-brands fa-instagram" style={{ margin: '0 10px', fontSize: '24px' }}></i>
            <i className="fa-brands fa-twitter" style={{ margin: '0 10px', fontSize: '24px' }}></i>
            <i className="fa-brands fa-linkedin" style={{ margin: '0 10px', fontSize: '24px' }}></i>
            <i className="fa-brands fa-youtube" style={{ margin: '0 10px', fontSize: '24px' }}></i>
          </div>
        </Col>

        <Col xs={12} sm={6} md={3} lg={3}>
          <h2 className='' style={{ color: "white", marginLeft: "20px", marginTop: "20px" }}>Our Services</h2>
          <p className='mt-1 p-2 ' style={{ color: "#8A99B4", marginLeft: "15px" }}>AI Infrastructure Inspection</p>
          <p className='mt-1 ' style={{ color: "#8A99B4", marginLeft: "23px" }}>AI Visual Inspection</p>
          <p className='mt-1' style={{ color: "#8A99B4", marginLeft: "23px" }}>AI Data Analytics</p>
          <p className='mt-1 ' style={{ color: "#8A99B4", marginLeft: "23px" }}>AI People Tracking</p>
        </Col>

        <Col xs={12} sm={6} md={3} lg={3}>
          <h2 className='' style={{ color: "white", marginLeft: "50px", marginTop: "20px" }}>Our Solutions</h2>
          <p className='mt-1 p-2 ' style={{ color: "#8A99B4", marginLeft: "50px" }}>Asset Performance Management</p>
          <p className='mt-1 ' style={{ color: "#8A99B4", marginLeft: "60px" }}>Job Grading & Evaluation</p>
          <p className='mt-1' style={{ color: "#8A99B4", marginLeft: "60px" }}>Compensation Management</p>
        </Col>

        <Col xs={12} sm={6} md={3} lg={3}>
          <h2 className='' style={{ color: "white", marginLeft: "150px", marginTop: "20px" }}>Reach US</h2>
          <p className='mt-1 p-2 ' style={{ color: "#8A99B4", marginLeft: "140px" }}>
            <span>United Kingdom, 53 Denton close Redhill, Surrey, RH1 5LB +44 787 999 3892</span>
          </p>
          <p className='mt-1 p-2 ' style={{ color: "#8A99B4", marginLeft: "140px" }}>
            <span>Germany, Schützenstraße 51A Lübeck, 23558 +49 179 512 5812</span>
          </p>
          <p className='mt-1 p-2 ' style={{ color: "#8A99B4", marginLeft: "140px" }}>
            <span>India, No. 154/20, Royal Space Third Floor TI, HSR Layout, Bangalore, Karnataka 560102 +91 85900 56435 </span>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
