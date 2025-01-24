import { Box } from '@mui/material'
import React from 'react'

const SubmittedText = () => {
  return (
    <Box
      component="h2"
      sx={{
        maxWidth: '660px',
        // height: '192px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'primary.light',
        textTransform: 'uppercase'
      }}
    >
      Thank you! <br /> Your submission <br /> has been received!
    </Box>
  )
}

export default SubmittedText
