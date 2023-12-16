import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Analytics() {
  return (
    <div style={{paddingBottom:"100px",paddingTop:"100px"}}>


        <Row>
            <Col sm={6} md={6} lg={6}>
            <div className='mt-5' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "160px" }}>
          <div className='mb-2 me-1' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
          <h6 style={{ color: "Black",fontWeight:"bold",fontSize:"22px" }}>AI DATA ANALYTICS</h6>



        </div>
<div style={{marginLeft:"150px"}}>
<h1 style={{fontSize:"60px"}}>Empowers Businesses to</h1>
        <h1   style={{fontSize:"60px"}}>Make Insightful Decisions</h1>
        <ul className='mt-4'>
            <li>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>Actionable Insights:  </span> <span style={{fontSize:"28px"}}>AI data analysis enhances decisions, personalizes customer experiences and improve operations.</span>
            </li>

            <li className='mt-4'>
            <span  style={{fontWeight:"bold",fontSize:"25px"}}>Increased Customer Loyalty:  </span> <span style={{fontSize:"28px"}}>AI predictive analytics for personalized recommendations & increased customer loyalty.</span>
            </li>


            <li className='mt-4'>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>Quality Assurance:  </span> <span style={{fontSize:"28px"}}>AI analytics identifies and mitigates potential issues, ensuring the quality and reliability of products and services.</span>
            </li>

            <li className='mt-4'>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>Efficiency and Responsiveness:  </span> <span style={{fontSize:"28px"}}> Customers benefit from increased efficiency, improved product quality, and more responsive interactions with businesses.</span>
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
            <img className='rounded me-5' style={{width:"100%"}} src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp" alt="image"  />
            </Col>
        </Row>





    </div>
  )
}

export default Analytics