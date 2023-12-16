import React from 'react';

function Brands() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className='' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className='mb-2 me-2' style={{ backgroundColor: 'blue', padding: '8px ', borderRadius: "5px" }}></div>
        <h6>BRANDS WE WORK WITH</h6>
        <div className='mb-2 ms-2' style={{ backgroundColor: 'blue', padding: '8px', borderRadius: "5px" }}></div>
      </div>
      <h1 className='mt-2 mb-4' style={{ textAlign: "center", fontSize: "60px" }}>Trusted by Thousands of Businesses</h1>

      <div className='container'>
        <div className='row'>
          {/* First Row */}
          <div className='col-md-4 mb-4'>
            <img className='img-fluid' src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="Image 1" />
          </div>
          <div className='col-md-4 mb-4'>
            <img className='img-fluid' src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="Image 2" />
          </div>
          <div className='col-md-4 mb-4'>
            <img className='img-fluid' src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" alt="Image 3" />
          </div>

          {/* Second Row */}
          <div className='col-md-4 mb-4'>
            <img className='img-fluid' src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="Image 4" />
          </div>
          <div className='col-md-4 mb-4'>
            <img className='img-fluid' src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="Image 5" />
          </div>
          <div className='col-md-4 mb-4'>
            <img className='img-fluid' src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" alt="Image 6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
