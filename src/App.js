import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const App = () => {
  return (
    <Box sx= {{
      display: "flex", 
      height: "100vh", 
      justifyContent: "center", 
      alignItems: "center"
    }}>
      <Button 
        variant= "contained" 
        color= "mainColor" 
        size= "large"
        endIcon= {<ThumbUpIcon/>}
      >
        Click me
      </Button>
      <Typography variant="p">hello world !</Typography>
      <Button
        variant= "contained"
        sx= {{
          backgroundColor: "lightblue",
          color: "black",
          "&:hover": {
            backgroundColor: "skyblue"
          }
        }}
      >
        hello
      </Button>
    </Box>
  )
}

export default App