import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Blogs() {
  return (
    <div style={{ marginTop: "80px", paddingBottom: "80px" }}>
      <div className='mt-5' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className='mb-2 me-2' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
        <h6>BLOG UPDATES</h6>
        <div className='mb-2 ms-2' style={{ backgroundColor: 'blue', padding: '8px', borderRadius: "5px" }}></div>
      </div>
      <h1 className='mt-2 mb-4' style={{ textAlign: "center", fontSize: "40px" }}>To Read</h1>
      <hr />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
        <Row>

          <Col xs={12} md={6} lg={4}>
            <img className='rounded mb-3' src="https://www.ombrulla.com/_astro/blog-1.311eedd5_wt4eW.webp" alt="description_of_image_1" style={{ width: "100%" }} />
            <h3 className='ms-3 mt-3' style={{ fontSize: "22px" }}>Privacy and security concerns with Artificial Intelligence</h3>
            <h3 className='ms-3 mt-3' style={{ fontSize: "18px", color: "#6B7280", fontWeight: "lighter" }}>Privacy and security are significant concerns when it comes to AI. AI systems often require access to large amounts of personal data, which can be ...</h3>
            <div className='ms-3' style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp"
                alt="Author's Avatar"
                style={{ borderRadius: '50%', width: '30px', marginRight: '10px' }}
              />
              <div>
                <h5>Zara Elizabeth</h5>
                <p style={{ fontSize: "14px" }}>Mar 16, 2020 • 6 min read</p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <img className='rounded mb-3' src="https://www.ombrulla.com/_astro/blog-2.c3cc33af_ZkLCIU.webp" alt="description_of_image_2" style={{ width: "100%" }} />
            <h3 className='ms-3 mt-3' style={{ fontSize: "22px" }}>The impact of AI on jobs and the workforce</h3>
            <h3 className='ms-3 mt-3' style={{ fontSize: "18px", color: "#6B7280", fontWeight: "lighter" }}>The impact of AI on jobs and the workforce is a topic of much debate and speculation. While some argue that AI will create new job opportunities...</h3>
            <div className='ms-3' style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp"
                alt="Author's Avatar"
                style={{ borderRadius: '50%', width: '30px', marginRight: '10px' }}
              />
              <div>
                <h5>Zara Elizabeth</h5>
                <p style={{ fontSize: "14px" }}>Mar 10, 2020 • 4 min read</p>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <img className='rounded mb-3' src="https://www.ombrulla.com/_astro/blog-3.fee62469_Z3YRpV.webp" alt="description_of_image_3" style={{ width: "100%" }} />
            <h3 className='ms-3 mt-3' style={{ fontSize: "22px" }}>Bias and fairness in Artificial Intelligence</h3>
            <h3 className='ms-3 mt-3' style={{ fontSize: "18px", color: "#6B7280", fontWeight: "lighter" }}>Bias and fairness are important considerations in AI, as they can significantly impact the accuracy and effectiveness of AI systems, as well as the social and ethical implications of their use...</h3>
            <div className='ms-3' style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp"
                alt="Author's Avatar"
                style={{ borderRadius: '50%', width: '30px', marginRight: '10px' }}
              />
              <div>
                <h5>Zara Elizabeth</h5>
                <p style={{ fontSize: "14px" }}>Mar 12, 2020 • 11 min read</p>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    </div>
  );
}

export default Blogs;
