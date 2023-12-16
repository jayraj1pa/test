import React from 'react'

function Brands() {
  return (
    <div style={{marginTop:"200px"}}>

<div className='' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<div className=' mb-2 me-2' style={{backgroundColor: 'blue',padding: '8px ',borderRadius:"5px"}}>
</div>

<h6 >BRANDS WE WORK WITH</h6>

<div div className=' mb-2 ms-2' style={{backgroundColor: 'blue',  padding: '8px', borderRadius:"5px"}}>
</div>

</div>
<h1 className='mt-2 mb-4' style={{textAlign:"center",fontSize:"60px"}}>Trusted by Thousands of Businesses</h1>


<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* First Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px' }}>
        <img className='' src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="Image 1" style={{ width: '12%', height: 'auto',marginLeft:"200px" }} />
        <img className='' src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="Image 2" style={{ width: '12%', height: 'auto' }} />
        <img className='me-5' src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" alt="Image 3" style={{ width: '12%', height: 'auto' ,marginRight:"250px"}} />
      </div>

      {/* Second Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <img className='' src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="Image 4" style={{ width: '12%', height: 'auto' ,marginLeft:"200px"}} />
        <img src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="Image 5" style={{ width: '12%', height: 'auto' }} />
        <img className='me-5 mb-5 ' src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" alt="Image 6" style={{ width: '12%', height: 'auto',marginRight:"250px" }} />
      </div>
    </div>

<div style={{marginBottom:"200px"}}>

</div>
    </div>
  )
}

export default Brands