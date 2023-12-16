import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Petran() {
  return (
    <div style={{backgroundColor:"#1D4ED8" ,paddingTop:"200px",paddingBottom:"200px"}}>

<Row>
    <Col  >
 <img style={{width:"20%",marginLeft:"180px"}} src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp" alt="" />    
 <h5 className='mt-1' style={{color:"white",marginLeft:"180px"}}>PErformance - TRacking - ANalytics</h5>
 <h1  style={{color:"white",marginLeft:"180px"}}>AI & IoT Enabled</h1>
 <h1 style={{color:"white",marginLeft:"180px",marginTop:"-15px"}}>Asset Performance</h1>
 <h1  style={{color:"white",marginLeft:"180px",marginTop:"-15px"}}>Management</h1>
 <p style={{marginLeft:"180px",color:"white",fontSize:"27px"}}>Petran offers an Asset Performance Management (APM) system that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable proactive maintenance strategies.</p>


 <div style={{display:"flex",alignItems:"center",justifyContent:"flex-start",color:"white",marginTop:"100px",marginLeft:"180px "}}>
 
 <h5 className='rounded-pill p-3 me-5' style={{border:"1px solid white",fontFamily:"bold"}}>Schedule Call</h5>
 

 <i className='rounded-circle p-4 me-5 fa-solid fa-play fa-2xl' style={{ color: "#f5f5f5", fontSize: "50px", border: "1px solid white", borderRadius: "50% !important" }}></i>



 <p style={{fontFamily:"bold",fontSize:"28px"}}>Watch Video</p>

 </div>
  
    </Col>
    <Col>
    <img style={{width:"70%",marginLeft:"200px"}} src='https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp'/>
    </Col>
</Row>

    </div>
  )
}

export default Petran