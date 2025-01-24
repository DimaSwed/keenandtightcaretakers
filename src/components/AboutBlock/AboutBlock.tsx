'use client'
import React, { FC } from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Stack } from '@mui/system'

const AboutBlock: FC = () => {
  const theme = useTheme()
  const isMobileL = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        maxWidth: '1368px',
        width: '100%',
        padding: '120px 0px',
        m: '0 auto',
        '@media (max-width: 1280px) and (min-width: 992px)': {
          padding: '120px 40px'
        },
        '@media (max-width: 992px) and (min-width: 768px)': {
          padding: '120px 16px'
        },
        '@media (max-width: 768px) and (min-width: 480px)': {
          padding: '80px 20px'
        },
        '@media (max-width: 480px) and (min-width: 320px)': {
          padding: '60px 16px',
          height: 'fit-content'
        },
        '@media (max-width: 320px)': {
          padding: '60px 10px',
          height: 'fit-content'
        }
      }}
    >
      <Stack sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            '@media (max-width: 480px) and (min-width: 320px)': {
              flexDirection: 'column'
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 50%',
              alignItems: 'center',
              justifyContent: 'space-between',
              pr: '98px',
              '@media (max-width: 992px) and (min-width: 768px)': {
                pr: '18px'
              },
              '@media (max-width: 768px) and (min-width: 480px)': {
                pr: '20px'
              },
              '@media (max-width: 480px) and (min-width: 320px)': {
                pr: '0px',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'flex-start',
                mb: '20px'
              }
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'divider',
                height: '100%',
                '@media (max-width: 480px) and (min-width: 320px)': {
                  height: 'auto'
                }
              }}
            >
              About Us
            </Typography>
            <Box
              component="img"
              src={isMobileL ? './coffee-production-wide.png' : './coffee-production.png'}
              sx={{
                maxWidth: '170px',
                height: 'auto',
                width: '100%',
                '@media (max-width: 768px) and (min-width: 480px)': {
                  width: '162px',
                  height: '189px'
                },
                '@media (max-width: 480px) and (min-width: 320px)': {
                  maxWidth: '448px',
                  height: '180px'
                }
              }}
            />
          </Box>
          <Box sx={{ flex: '1 1 50%', display: 'flex', alignItems: 'flex-end' }}>
            <Typography
              variant="h2"
              sx={{
                color: 'background.paper',
                textTransform: 'uppercase',
                maxWidth: '684px',
                '@media (max-width:992px)': { fontSize: '48px' },
                '@media (max-width:768px)': { fontSize: '36px' },
                '@media (max-width:480px)': { fontSize: '28px' }
              }}
            >
              Empowering coffee producers worldwide with cutting-edge technology that delivers
              precision,
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: { md: '20px', sm: '10px', xs: '10px' } }}>
          <Typography
            variant="h2"
            sx={{
              color: 'background.paper',
              textTransform: 'uppercase',
              '@media (max-width:992px)': { fontSize: '48px' },
              '@media (max-width:768px)': { fontSize: '36px' },
              '@media (max-width:480px)': { fontSize: '28px' }
            }}
          >
            efficiency, and unmatched quality
          </Typography>
        </Box>
        <Box display="flex" justifyContent={'flex-end'}>
          <Typography
            variant="body2"
            sx={{
              color: 'divider',
              width: '684px',
              height: '115px',
              alignSelf: 'flex-end',
              '@media (max-width: 1280px) and (min-width: 992px)': {
                width: '600px',
                height: '138px'
              },
              '@media (max-width: 992px) and (min-width: 768px)': {
                width: '480px',
                height: '161px'
              },
              '@media (max-width: 768px) and (min-width: 480px)': {
                maxWidth: '728px',
                width: '100%',
                height: 'auto'
              },
              '@media (max-width: 480px) and (min-width: 320px)': {
                height: '100%'
              }
            }}
          >
            Our mission is to transform the coffee production process by providing advanced
            equipment tailored to the needs of roasteries and large-scale producers alike. We
            combine innovation with reliability, ensuring that every coffee bean reaches its full
            potential. With a global vision and a dedication to excellence, we are your trusted
            partner in creating exceptional coffee experiences.
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}

export default AboutBlock
