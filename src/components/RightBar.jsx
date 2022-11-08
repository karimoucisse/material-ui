import { Box, Typography } from '@mui/material'
import React from 'react'
import Avatars from './Avatars'
import ImagesList from './ImagesList'

const RightBar = () => {
  return (
    <Box p={2} flex={2} sx= {{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed">
        <Box>
          <Typography variant= "h6" fontWeight={400} sx= {{margin: "10px 0"}}>Online friends</Typography>
          <Avatars/>
        </Box>
        <Box>
          <Typography variant= "h6" fontWeight={400} sx= {{margin: "10px 0"}}>Latest photo</Typography>
          <ImagesList/>
        </Box>
      </Box>
    </Box>
  )
}

export default RightBar