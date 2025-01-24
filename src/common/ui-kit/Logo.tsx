import { FC } from 'react'
import { Box } from '@mui/material'

const Logo: FC = () => {
  return (
    <Box
      component="img"
      sx={{
        height: '45px',
        width: '300px',
        cursor: 'pointer',

        '@media (max-width:480px)': { height: '42px', width: '215px' },
        '@media (max-width:320px)': { height: '24px', width: '150px' }
      }}
      alt="Logo"
      src="./brand.svg"
    />
  )
}

export default Logo
