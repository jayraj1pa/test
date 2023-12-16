import React from 'react';

function Provider() {
  return (
    <div>
      <div className='card rounded' style={{ marginLeft: "5%", backgroundColor: "#E6EDFA", paddingBottom: "5%", paddingTop: "5%", marginTop: "5%" }}>

        <div className='mt-5' style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "5%" }}>
          <div className='mb-2 me-1' style={{ backgroundColor: 'blue', padding: '2%', borderRadius: "5px" }}></div>
          <h6 style={{ color: "Black", fontWeight: "bold", fontSize: "1.5rem" }}>The Best AI Service Provider</h6>
        </div>

        <h1 className='mt-3' style={{ marginLeft: "5%", fontSize: "3rem" }}>Crafting Tomorrow's World with  <span style={{ color: "blue" }}> AI Excellence</span> </h1>

        <p className="mt-3" style={{ marginLeft: "5%", fontSize: "1.2rem", color: "#6B7280" }}>The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assists clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line.</p>

        <div className="d-flex align-items-center justify-content-start mt-3 ms-5">

          <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
            width: '70px',
            height: '70px',
            backgroundColor: 'blue',
          }}>
            <i className='p-4 me-2 fa-solid fa-play fa-2xl' style={{ color: 'white' }}></i>
          </div>

          <h5 className='ms-3'>Watch Corporate Video</h5>
        </div>

      </div>
    </div>
  );
}

export default Provider;
