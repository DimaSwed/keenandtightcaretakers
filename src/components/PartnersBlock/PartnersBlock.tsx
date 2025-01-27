import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

import PartnersBrandsSwiper from './PartnersBrandsSwiper'
const PartnersBlock: FC = () => {
  return (
    <>
      <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
        <Box
          sx={{
            maxWidth: '1368px',
            zIndex: 1,
            textAlign: 'center',
            width: '100%',
            borderRadius: '20px',
            pt: '82px',
            pb: '62px',
            backgroundColor: 'background.default',
            m: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '@media (max-width: 1280px) and (min-width: 768px)': {
              pt: '120px',
              pb: '60px'
            },
            '@media (max-width: 768px)': {
              pt: '80px',
              pb: '60px',
              px: '20px'
            }
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: '400',
              color: 'background.paper',
              width: '100%',
              '@media (max-width: 1280px) and (min-width: 992px)': {
                maxWidth: '1100px'
              },
              '@media (max-width: 768px)': {
                fontSize: '58px'
              }
            }}
          >
            Trusted by Industry Leaders Worldwide
          </Typography>
        </Box>
      </Box>
      <PartnersBrandsSwiper />
    </>
  )
}

export default PartnersBlock
