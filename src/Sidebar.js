import React from 'react'
import './Slidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Sidebaroption from './Sidebaroption';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="Sidebar"> 
         
        {/* Twitter Icon  */}
        
        <TwitterIcon className ="twitter_icon"/> 

        <Sidebaroption active Icon={HomeIcon} text="Home"/>

        <Sidebaroption Icon={SearchIcon} text="Explore"/>
 
        <Sidebaroption Icon={NotificationsNoneIcon} text="Notifications"/>

        <Sidebaroption Icon={MailOutlineIcon} text="Message"/>

        <Sidebaroption Icon={BookmarksIcon} text="Bookmark"/>

        <Sidebaroption Icon={ListAltIcon} text="List"/>

        <Sidebaroption Icon={PermIdentityIcon} text="Profile"/>

        <Sidebaroption Icon={MoreHorizIcon} text="More"/>

        
        

        <Button variant="outlined" className="tweet" fullWidth >  Tweet </Button>
         
         {/* Button ->tweet */}
        </div>
    )
}

export default Sidebar
