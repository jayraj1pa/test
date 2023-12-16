import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Animati() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const containerStyle = {
    backgroundColor: "#D8E0FF",
    paddingBottom: isMobile ? "50px" : "200px",
    paddingTop: isMobile ? "50px" : "100px",
    minHeight: isMobile ? "auto" : "100vh",
    overflow: "hidden", // Add overflow: hidden to fix potential issues with the background color
  };

  const colStyle = isMobile ? { marginLeft: "20px", textAlign: 'center' } : { marginLeft: "180px" };
  const h1Style = isMobile ? { fontSize: '36px', marginBottom: '10px' } : { fontSize: '80px' };
  const pStyle = isMobile ? { fontSize: '16px' } : { fontSize: '30px' };

  return (
    <div style={containerStyle}>

      <Row>

        <Col style={colStyle}>
          <h1 style={{ ...h1Style, fontWeight: "bolder" }}>Manual</h1>
          <h1 style={{ ...h1Style, fontWeight: "bolder" }}>Inspection is</h1>
          <h1 style={{ ...h1Style, color: "blue" }}>Slow & Error-</h1>
          <h1 style={{ ...h1Style, color: "blue" }}>Prone</h1>

          <p style={{ ...pStyle, color: "#6B7280" }}>AI-driven computer vision transforms manufacturing quality inspection, boosting precision and cost-efficiency while upholding product excellence.</p>

          <div style={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'center' : 'flex-start' }}>
            <h5 className='rounded-pill p-3  text-center text-white' style={{ border: "1px solid white", fontFamily: "bold", backgroundColor: "Blue", width: isMobile ? "100%" : "25%", marginBottom: isMobile ? '10px' : '0' }}>Schedule Call</h5>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '1px solid transparent',
              backgroundColor: 'blue',
              position: 'relative',
              marginLeft: isMobile ? "0" : "20px",
            }}>
              <i className='p-4  fa-solid fa-play fa-2xl' style={{ color: 'white', position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}></i>
            </div>

            <h5 className={isMobile ? 'mt-3' : 'ms-5'}>Watch Video</h5>
          </div>

        </Col>

        <Col>
          <div>
            <div className="xl:w-1/2 relative">
              {/* First oval line */}
              <div
                className="border-2 absolute top-[50px] left-[50px] sliderShape border-blue-600 rounded-full overflow-hidden hidden md:block animate-bounce"
              ></div>

              {/* Second oval line */}
              <div
                className="border-2 absolute top-[50px] left-[270px] border-white-600 rounded-full overflow-hidden hidden md:block animate-bounce"
              ></div>

              {/* Image with mask */}
              <img
                src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
                alt="Your Image"
                className="w-full h-auto absolute top-[100px] left-[870px]"
                style={{
                  mask: 'url("https://www.ombrulla.com/images/home/mask-banner.png") center / contain no-repeat',
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </Col>

      </Row>

    </div>
  );
}

export default Animati;
