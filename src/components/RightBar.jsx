import { Box, Typography } from '@mui/material'
import React from 'react'
import Avatars from './Avatars'

const RightBar = () => {
  return (
    <Box p={2} flex={2} sx= {{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed">
        <Typography variant= "h6" fontWeight={400}>Online friends</Typography>
        <Avatars/>
      </Box>
    </Box>
  )
}

export default RightBar