import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const ImagesList = () => {
  const itemData= [
    {
      img:"https://scontent-rtl.akamaized.net/GED/13090000/13090000/13090038_700x0.webp",
      title:"de bruyne"
    },
    {
      img:"https://scontent-rtl.akamaized.net/GED/13090000/13090000/13090038_700x0.webp",
      title:"de bruyne"
    },
    {
      img:"https://scontent-rtl.akamaized.net/GED/13090000/13090000/13090038_700x0.webp",
      title:"de bruyne"
    },
    {
      img:"https://scontent-rtl.akamaized.net/GED/13090000/13090000/13090038_700x0.webp",
      title:"de bruyne"
    },
    {
      img:"https://scontent-rtl.akamaized.net/GED/13090000/13090000/13090038_700x0.webp",
      title:"de bruyne"
    },
    {
      img:"https://scontent-rtl.akamaized.net/GED/13090000/13090000/13090038_700x0.webp",
      title:"de bruyne"
    },
    

  ]
  return (
    <ImageList cols={3} rowHeight={160}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
            <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
    </ImageList>
  )
}

export default ImagesList