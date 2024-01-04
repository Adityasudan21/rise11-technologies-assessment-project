import React from 'react'
import "./Trending_bar.css";
function Trending_Bar() {
  return (
    <div className="trending_bar">
    <div className="trending trending_1">
        < div className='trending_write'>
            <h6>Impressions</h6>
            <h6 className='number'>910</h6>
        </ div>
        <img src="https://i.ibb.co/9qC1Rhj/Screenshot-2024-01-04-135712.png" alt='No'></img>
    </div>
    <div className="trending trending_2">
        < div className='trending_write'>
            <h6>Total Audience</h6>
            <h6 className='number'>1210</h6>
        </ div>
        <img src="https://i.ibb.co/9qC1Rhj/Screenshot-2024-01-04-135712.png" alt='No'></img>
    </div>
    <div className="trending trending_3">
        < div className='trending_write'>
            <h6>Engagements</h6>
            <h6 className='number'>609</h6>
        </ div>
        <img src="https://i.ibb.co/9qC1Rhj/Screenshot-2024-01-04-135712.png" alt='No'></img>
    </div>
    <div className="trending trending_4">
        < div className='trending_write'>
            <h6>Audience</h6>
            <h6 className='number'>820</h6>
        </ div>
        <img src="https://i.ibb.co/9qC1Rhj/Screenshot-2024-01-04-135712.png" alt='No'></img>
    </div>
</div>
  )
}

export default Trending_Bar