import React from 'react';
import ImageSlider from './ImageSlider'; // Import the ImageSlider component

function Customers() {
  return (
    <div style={{ marginTop: "200px" ,paddingBottom:"200px" }}>
      <div className='' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className='mb-2 me-2' style={{ backgroundColor: 'blue', padding: '8px', borderRadius: "5px" }}></div>
        <h6 className='me-3 ms-3'> OUR CUSTOMERS</h6>
        <div className='mb-2 ms-2' style={{ backgroundColor: 'blue', padding: '8px', borderRadius: "5px" }}></div>
      </div>

      <h1 className='mt-2 mb-4' style={{ textAlign: "center", fontSize: "60px" }}>They Trust Us</h1>

      {/* Add the ImageSlider component */}
      <ImageSlider />
    </div>
  );
}

export default Customers;
