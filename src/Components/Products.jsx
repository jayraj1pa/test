import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Products() {
  return (
    <div style={{marginTop:"100px"}}>


<Row>

<Col>
<div className='mt-5 mb-5' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "160px" }}>
          <div className='mb-2 me-2' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
          <h5 className='' style={{ color: "Black" }}>PRODUCTS</h5>
        </div>



        <h1 className='' style={{marginLeft:"160px",fontSize:"70px"}}>Our HR Tools</h1>
        <p className='mt-5 fs-5' style={{marginLeft:"160px",color:"#707280"}}>
        Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.
        </p>


</Col>

<Col xs={3} className='card ms-5 p-5 me-5' style={{backgroundColor:"#EFF1F5"}}>
  
<h3>

Job Grading and Evaluation
</h3>

<p className='mt-3' style={{color:"#6B7280",fontSize:"26px"}}>Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for compensation and structuring purposes.</p>

<img className='mt-3' src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp" alt="" srcset="" />


<h5 className='mt-5'>Free Trial <i style={{color:"blue"}}  class='fa-solid fa-arrow-up-right-from-square'></i>
</h5>


</Col>



<Col xs={3} className='card me-5 p-5' style={{backgroundColor:"#EFF1F5"}}>


<h3>

Compensation Management</h3>

<p className='mt-3' style={{color:"#6B7280",fontSize:"26px"}}>Compensation management software automates salary planning, budget management, and equity analysis, ensuring fair and competitive pay practices.</p>

<img className='mt-3' src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp" alt="" srcset="" />


<h5 className='mt-5 me-5'>Book For Demo
 <i style={{color:"blue"}}  class='fa-solid fa-arrow-up-right-from-square'></i>
</h5>

</Col>

</Row>


    </div>
  )
}

export default Products