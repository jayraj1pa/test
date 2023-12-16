import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Visual() {
  return (
    <div style={{paddingBottom:"100px",paddingTop:"100px"}}>


    <Row>

    <Col>
        <img className='rounded ms-5' style={{width:"100%"}} src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp" alt="image"  />
        </Col>

        <Col sm={6} md={6} lg={6}>
        <div className='mt-5' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "160px" }}>
      <div className='mb-2 me-1' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
      <h6 style={{ color: "Black",fontWeight:"bold",fontSize:"22px" }}>AI VISUAL INSPECTION</h6>



    </div>
<div style={{marginLeft:"150px"}}>
<h1 style={{fontSize:"60px"}}>Improving Quality with 
</h1>
    <h1   style={{fontSize:"60px"}}>Greater Precision</h1>
    <ul className='mt-4'>
        <li>
        <span style={{fontWeight:"bold",fontSize:"25px"}}>Automated Defect Detection:  </span> <span style={{fontSize:"28px"}}>Automated visual inspection uses computer vision and machine learning to identify defects autonomously..</span>
        </li>

        <li className='mt-4'>
        <span  style={{fontWeight:"bold",fontSize:"25px"}}>Advanced Image Processing::  </span> <span style={{fontSize:"28px"}}>It captures and enhances digital images for relevant feature extraction.</span>
        </li>


        <li className='mt-4'>
        <span style={{fontWeight:"bold",fontSize:"25px"}}>Informed Decision-Making:  </span> <span style={{fontSize:"28px"}}>The system classifies defects, aiding manufacturers in quality control decisions..</span>
        </li>

        <li className='mt-4'>
        <span style={{fontWeight:"bold",fontSize:"25px"}}>Real-Time Quality Assurance:  </span> <span style={{fontSize:"28px"}}> Integration with manufacturing enables real-time quality control and reduces substandard product risks.</span>
        </li>

    </ul>
</div>



<div style={{ display: "flex", alignItems: "center" }}>
<h5 className='rounded-pill p-3 me-5 text-center text-white' style={{ marginLeft: "110px", border: "1px solid white", fontFamily: "bold", backgroundColor: "#1D4ED8", width: "25%" }}>Schedule Call</h5>
<h5 style={{ flex: "1" }}>Read more  <i style={{color:"blue"}}  class='fa-solid fa-arrow-up-right-from-square'></i>
</h5>
</div>

        </Col>
       
    </Row>





</div>
  )
}

export default Visual