import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Blogs() {
  return (
    <div style={{ marginTop: "280px", marginLeft: "0", marginRight: "auto" }}>

      <div className='mt-5' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className=' mb-2 me-2' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>

        <h6 style={{ fontSize: "16px" }}>BLOG UPDATES</h6>

        <div div className=' mb-2 ms-2' style={{ backgroundColor: 'blue', padding: '8px', borderRadius: "5px" }}></div>
      </div>

      <h1 className='mt-2 mb-4' style={{ textAlign: "center", fontSize: "40px", marginLeft: "0" }}>To Read</h1>

      <hr />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
        <Row>

          <Col style={{ textAlign: 'center', marginBottom: '40px' }}>
            <img className='rounded' src="https://www.ombrulla.com/_astro/blog-1.311eedd5_wt4eW.webp" alt="description_of_image_1" style={{ width: "80%", marginLeft: "80px" }} />
            <h3 className='ms-5 mt-3 ' style={{ fontSize: "24px" }}>Privacy and security concerns with Artificial Intelligence</h3>
            <h3 className='ms-5 mt-3 ' style={{ fontSize: "20px", color: "#6B7280", fontWeight: "lighter" }}>Privacy and security are significant concerns when it comes to AI. AI systems often require access to large amounts of personal data, which can be ...</h3>
            <div className='ms-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp"
                alt="Author's Avatar"
                style={{ borderRadius: '50%', width: '50px', marginRight: '10px' }}
              />
              <div>
                <h5>Zara Elizabeth</h5>
                <p style={{ fontSize: "16px" }}>Mar 16, 2020 • 6 min read</p>
              </div>
            </div>

          </Col>
          <Col style={{ textAlign: 'center', marginBottom: '40px' }}>
            <img className='rounded' src="https://www.ombrulla.com/_astro/blog-2.c3cc33af_ZkLCIU.webp" alt="description_of_image_2" style={{ width: "80%", marginLeft: "80px" }} />
            <h3 className='ms-5 mt-3 ' style={{ fontSize: "24px" }}>The impact of AI on jobs and the workforce</h3>
            <h3 className='ms-5 mt-3 ' style={{ fontSize: "20px", color: "#6B7280", fontWeight: "lighter" }}>The impact of AI on jobs and the workforce is a topic of much debate and speculation. While some argue that AI will create new job opportunities...</h3>
            <div className='ms-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp"
                alt="Author's Avatar"
                style={{ borderRadius: '50%', width: '50px', marginRight: '10px' }}
              />
              <div>
                <h5>Zara Elizabeth</h5>
                <p style={{ fontSize: "16px" }}>Mar 10, 2020 • 4 min read</p>
              </div>
            </div>

          </Col>
          <Col style={{ textAlign: 'center', marginBottom: '40px' }}>
            <img className='rounded' src="https://www.ombrulla.com/_astro/blog-3.fee62469_Z3YRpV.webp" alt="description_of_image_3" style={{ width: "80%", marginLeft: "80px" }} />
            <h3 className='ms-5 mt-3 ' style={{ fontSize: "24px" }}>Bias and fairness in Artificial Intelligence</h3>
            <h3 className='ms-5 mt-3 ' style={{ fontSize: "20px", color: "#6B7280", fontWeight: "lighter" }}>Bias and fairness are important considerations in AI, as they can significantly impact the accuracy and effectiveness of AI systems, as well as the social and ethical implications of their use...</h3>
            <div className='ms-5' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="https://www.ombrulla.com/_astro/zara-elizabeth.f546c493_wXvHD.webp"
                alt="Author's Avatar"
                style={{ borderRadius: '50%', width: '50px', marginRight: '10px' }}
              />
              <div>
                <h5>Zara Elizabeth</h5>
                <p style={{ fontSize: "16px" }}>Mar 12, 2020 • 11 min read</p>
              </div>
            </div>

          </Col>

        </Row>
      </div>

    </div>
  );
}

export default Blogs;
