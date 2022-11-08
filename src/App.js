import { Box } from "@mui/material"
import Feed from "./components/Feed"
import NavBar from "./components/NavBar"
import RightBar from "./components/RightBar"
import SideBar from "./components/SideBar"

const App = () => {
  return (
    <Box>
      {/* <NavBar/> */}
      <SideBar/>
      <Feed/>
      <RightBar/>
    </Box>
  )
}

export default App