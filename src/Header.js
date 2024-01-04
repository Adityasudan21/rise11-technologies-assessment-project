import React from 'react'
import "./Header.css";
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import TimelineSharpIcon from '@mui/icons-material/TimelineSharp';
function Header({isNavOpen,Toggle}) {
  return (
    <div className="header">
    <div className="salutations">
        <button onClick={Toggle} className={"" + (!isNavOpen ? 'button-clicked' : 'button-not-clicked')}>
            <TocOutlinedIcon fontSize='small' />
        </button>
        <p>Hello Aditya ✋</p>
    </div>
    <div className="search_upload">
        <div className="searchbox">
            <SearchIcon fontSize='small' />
            <input type="search" placeholder='Search here'>
            </input>
        </div>
        <div className="button">
            <FileUploadOutlinedIcon />
            <p>New Upload</p>
        </div>
    </div>
    <div className="icons_avatar">
        <div className='Icon'>
            <NotificationsNoneOutlinedIcon />
        </div>
        <div className='Icon'>
            <MapsUgcOutlinedIcon />
        </div>
        <div className='Icon'>
            <TimelineSharpIcon />
        </div>
        <div className="profile">
            <div className="designation">
                <h6 className='name'>Aditya</h6>
                <h6 className='job'>Designer</h6>
            </div>
            <img src="https://i.ibb.co/ZzQQw4w/Whats-App-Image-2023-12-30-at-17-35-34-f3784fb5.jpg" alt="Display-Pic" border="0"></img>
        </div>
    </div>
</div>
  )
}

export default Header