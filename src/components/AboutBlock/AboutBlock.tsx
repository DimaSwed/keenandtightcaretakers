import React, { FC } from 'react'
import { Box } from '@mui/material'

const AboutBlock: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        maxWidth: '1440px',
        width: '100%',
        padding: '120px 36px',
        m: '0 auto'
      }}
    ></Box>
  )
}

export default AboutBlock
