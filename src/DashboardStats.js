import React from 'react'
import "./DashboardStats.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
function DashboardStats() {
    return (
        <div className='dashboardstats'>
            <div className='stat1'>
                <div className='stat'>
                    <p className='heading'>Sale</p>
                    <span className='dashboardicon'><MoreVertIcon />
                    </span>
                </div>
                <hr></hr>
                <img src="https://i.ibb.co/5KPXKrs/Screenshot-2024-01-05-020708.png" alt="Screenshot-2024-01-05-020708" border="0"></img>
                <div className="saleinfo">
                    <p className='current_week'>Current Week</p>
                    <p className='current_week'>2000</p>
                </div>
                <div className="saleinfo">
                    <p>Last Week</p>
                    <p>1500</p>
                </div>
            </div>
            <div className='stat2'>
                <div className='stat'>
                    <p className='heading'>Weekly Sales Stats</p>
                    <span className='dashboardicon'><MoreVertIcon />
                    </span>
                </div>
                <hr></hr>
                <img src="https://i.ibb.co/tKnRWXg/Screenshot-2024-01-05-021224.png" alt="Screenshot-2024-01-05-021224" border="0"></img>
            </div>
            <div className='stat3'>
                <div className='stat'>
                    <p className='heading'>Student Queries</p>
                    <span className='dashboardicon'><MoreVertIcon />
                    </span>
                </div>
                <hr></hr>
                {/* Student queries */}
                <img src="https://i.ibb.co/tPdGRD5/Screenshot-2024-01-05-030138.png" alt="Screenshot-2024-01-05-030138" border="0"></img>
            </div>
        </div>
    )
}

export default DashboardStats