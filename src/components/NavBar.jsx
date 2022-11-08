import { AppBar, Toolbar, Typography, Search, InputBase, Badge, Avatar } from "@mui/material"
import { Box, flexbox } from "@mui/system"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';

const NavBar = () => {
  return (
    <AppBar position="sticky" mb= {4}>
        <Toolbar sx= {{display: "flex", justifyContent: "space-between"}}>
            <Typography variant="h6" sx={{cursor: "pointer"}}>Logo</Typography>
            <Box sx= {{
                backgroundColor: "white", 
                width: "200px", 
                height: "30px", 
                borderRadius: "10px"
            }}>
                <InputBase placeholder="search ..." sx={{padding:"0 10px"}}/>
            </Box>
            <Box sx= {{display: "flex", gap: "20px", alignItems: "center" }}>
                <Badge badgeContent={4} color="error" sx= {{cursor: "pointer"}}>
                    <MailIcon/>
                </Badge>
                <Badge badgeContent={4} color="error" sx= {{cursor: "pointer"}}>
                    <ShoppingCartIcon />
                </Badge>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar