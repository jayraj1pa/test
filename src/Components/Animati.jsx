import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../Components/Animati.css'

function Animati() {
  return (
    <div style={{backgroundColor:"#D8E0FF",paddingBottom:"200px",paddingTop:"100px"}}>

<Row>

  <Col style={{marginLeft:"180px"}}>
<h1 style={{fontWeight:"bolder" , fontSize:"80px"}}>Manual</h1>
<h1  style={{fontWeight:"bolder" , fontSize:"80px",marginTop:"-30px"}} >Inspection is</h1>
<h1 style={{color:"blue" , fontSize:"80px",marginTop:"-30px"}}>Slow & Error-</h1>
<h1 style={{color:"blue" , fontSize:"80px",marginTop:"-30px"}}>Prone</h1>

<p  style={{color:"#6B7280",fontSize:"30px"}}>AI-driven computer vision transforms manufacturing quality inspection, boosting precision and cost-efficiency while upholding product excellence.</p>

<div style={{ display: "flex", alignItems: "center" }}>
  <h5 className='rounded-pill p-3  text-center text-white' style={{  border: "1px solid white", fontFamily: "bold", backgroundColor: "Blue", width: "25%" }}>Schedule Call</h5>


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
  marginLeft:"150px"
}}>
  <i className='p-4  fa-solid fa-play fa-2xl' style={{ color: 'white', position: 'absolute', transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}></i>
</div>


<h5 className='ms-5'>Watch  Video</h5>

  
</div>

  </Col>



  <Col >
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
  )
}

export default Animati