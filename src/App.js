import { Box } from "@mui/material"
import { Stack } from "@mui/system"
import Feed from "./components/Feed"
import NavBar from "./components/NavBar"
import RightBar from "./components/RightBar"
import SideBar from "./components/SideBar"

const App = () => {
  return (
    <Box>
      <NavBar/>
      <Stack  direction= "row">
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </Box>
  )
}

export default App