import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import './Sidebar.css'
import { Avatar,IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar src='https://z-p3-scontent.fmba2-1.fna.fbcdn.net/v/t1.0-9/67438298_155125745563945_6997783897475907584_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE53WlKHgYN3f8xoUdhzobZ9GaUaC81Ga70ZpRoLzUZrl654_ull2ZxY8iityg8i_uuuUG_wAzul1qafMyVbNgk&_nc_ohc=dtob3EKrGxMAX82kH3Y&_nc_ht=z-p3-scontent.fmba2-1.fna&oh=01f3d9518680c27f1b06204b24371a5d&oe=5FEBB93B'/>
            <div className='sidebar__headerRight'>
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOutlined/>
                <input placeholder='Search or staart new chat' type='text'/>
            </div>
        </div>
        <div className='sidebar__chats'>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>

        </div>
       
    )
}

export default Sidebar
