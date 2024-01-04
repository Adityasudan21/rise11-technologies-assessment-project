import React from 'react';
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Navbar_Options from './Navbar_Options';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
function Navbar({isNavOpen}) {
  return (
    <div className={""+(isNavOpen? 'navbar-closed':'navbar-open')}>
        <div className="admin">
        <PersonIcon fontSize='small'/>
    <h2>Skilify Admin</h2>
    </div>
    <div className="navbar_options">
<Navbar_Options Title='Dashboard' Icon={HomeIcon} Icon2={KeyboardArrowRightIcon}/>
<Navbar_Options Title='My Course' Icon={PlayCircleOutlineIcon} Icon2={KeyboardArrowRightIcon}/>
<Navbar_Options Title='Calender' Icon={CalendarTodayIcon} Icon2={KeyboardArrowRightIcon}/>
<Navbar_Options Title='Resource' Icon={ImportContactsOutlinedIcon} Icon2={KeyboardArrowRightIcon}/>
<Navbar_Options Title='Quiz' Icon={ExtensionOutlinedIcon} Icon2={KeyboardArrowRightIcon}/>
<Navbar_Options Title='Message' Icon={ChatBubbleOutlineOutlinedIcon} Icon2={KeyboardArrowRightIcon}/>
<Navbar_Options Title='My Status' Icon={TrendingUpOutlinedIcon} Icon2={KeyboardArrowRightIcon}/>
<Navbar_Options Title='Wallet' Icon={AccountBalanceWalletOutlinedIcon} Icon2={KeyboardArrowRightIcon}/>
<Navbar_Options Title='My Account' Icon={PersonAddAltOutlinedIcon} Icon2={KeyboardArrowRightIcon}/>
    </div>
    <div className="subscription_box">
    <img src="https://i.ibb.co/VLXfFj7/Screenshot-2024-01-02-173845.png" alt="flat-store-facade-grand-opening-illustration-596042-34" border="0" />
    <h5>Get Subscription</h5>
    </div>
    <div className="copyright_options">
        <p>Skilify Teacher Dashboard Admin</p>
        <h6>© 2020 All right reserved</h6>
    </div>
    </div>
  )
}

export default Navbar