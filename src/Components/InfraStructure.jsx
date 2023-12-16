import React from 'react'
import { Row,Col } from 'react-bootstrap'

function InfraStructure() {
  return (
    <div>


<div style={{paddingBottom:"100px",paddingTop:"100px"}}>


        <Row>
            <Col sm={6} md={6} lg={6}>
            <div className='mt-5' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "160px" }}>
          <div className='mb-2 me-1' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
          <h6 style={{ color: "Black",fontWeight:"bold",fontSize:"22px" }}>AI INFRASTRUCTURE INSPECTION</h6>



        </div>
<div style={{marginLeft:"150px"}}>
<h1 style={{fontSize:"60px"}}>Enhances Efficiency,</h1>
        <h1   style={{fontSize:"60px"}}>Safety, and Cost-</h1>
        <h1 style={{fontSize:"60px"}}>Effectiveness</h1>

        <ul className='mt-4'>
            <li>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>Cutting-Edge Solution:  </span> <span style={{fontSize:"28px"}}> Ombrulla leverages AI, drones, and IoT technologies to transform infrastructure inspection.</span>
            </li>

            <li className='mt-4'>
            <span  style={{fontWeight:"bold",fontSize:"25px"}}>Real-Time Insights:  </span> <span style={{fontSize:"28px"}}> Real-time insights enhance inspection efficiency, safety, and reduce conventional challenges.</span>
            </li>


            <li className='mt-4'>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>Longevity and Cost-Effectiveness:  </span> <span style={{fontSize:"28px"}}> Ombrulla ensures the longevity and safety of critical infrastructure while offering a cost-effective solution.</span>
            </li>

            <li className='mt-4'>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>Responsive Maintenance:  </span> <span style={{fontSize:"28px"}}> Enhances infrastructure management, increasing reliability and responsiveness, and reducing risks..</span>
            </li>

        </ul>
</div>


 
<div style={{ display: "flex", alignItems: "center" }}>
  <h5 className='rounded-pill p-3 me-5 text-center text-white' style={{ marginLeft: "110px", border: "1px solid white", fontFamily: "bold", backgroundColor: "#1D4ED8", width: "25%" }}>Schedule Call</h5>
  <h5 style={{ flex: "1" }}>Read more  <i style={{color:"blue"}}  class='fa-solid fa-arrow-up-right-from-square'></i>
</h5>
</div>

            </Col>
            <Col>
            <img className='rounded me-5' style={{width:"100%"}} src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp" alt="image"  />
            </Col>
        </Row>





    </div>




    </div>
  )
}

export default InfraStructure