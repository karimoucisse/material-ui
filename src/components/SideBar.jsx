import { InboxOutlined } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'

const SideBar = () => {
  const listItems = [
    {logo: <HomeIcon/>, text: "Home"},
    {logo: <AccountCircleIcon/>, text: "Profile"},
    {logo: <InboxOutlined/>, text: "Email"},
    {logo: <ShoppingCartIcon/>, text: "Cart"},
    {logo: <SettingsIcon/>, text: "Settings"},
    {logo: <InsertDriveFileIcon/>, text: "Pages"},
    {logo: <GroupIcon/>, text: "Groups"},
    {logo: <GroupAddIcon/>, text: "Friends"},
  ]
  return (
    <Box p={2} flex= {2} sx= {{display: {xs: "none", sm: "block"}}}>
      <List>
        {listItems.map(element => {
          return (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {element.logo}
                </ListItemIcon>
                <ListItemText primary= {element.text}/>
              </ListItemButton>
            </ListItem>
          )
        })}
        
      </List>
    </Box>
  )
}

export default SideBar