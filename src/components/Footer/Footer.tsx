'use client'
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { FC } from 'react'

const Footer: FC = () => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down(768))
  const isMobileP = useMediaQuery(theme.breakpoints.down(321))
  return (
    <Stack
      sx={{
        maxWidth: '1440px',
        height: 'fit-content',
        border: '1px solid white',
        m: '0 auto',
        width: '100%',
        padding: '60px 36px',
        gap: '30px',
        '@media (max-width: 1280px) and (min-width: 992px)': {
          padding: '60px 40px'
        },
        '@media (max-width: 992px) and (min-width: 768px)': {
          padding: '60px 16px'
        },
        '@media (max-width: 768px) and (min-width: 480px)': {
          padding: '40px 20px'
        },
        '@media (max-width: 480px) and (min-width: 320px)': {
          padding: '40px 16px',
          height: 'fit-content'
        },
        '@media (max-width: 320px)': {
          padding: '40px 10px',
          height: 'fit-content'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media (max-width: 480px) and (min-width: 320px)': {
            flexDirection: 'column',
            gap: '20px'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flex: '1 1 50%',

            '@media (max-width: 768px)': {
              flexDirection: 'column',
              gap: '20px'
            }
          }}
        >
          <Typography variant="subtitle2" color="primary.main">
            <a
              href="mailto:hello@topequipment.com"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              hello@topequipment.com
            </a>
          </Typography>
          <Typography variant="subtitle2" color="primary.main">
            <a href="tel:+359881234567" style={{ textDecoration: 'none', color: 'inherit' }}>
              +359 88 123 4567
            </a>
          </Typography>
        </Box>
        <Box
          sx={{
            flex: '1 1 50%'
          }}
        >
          <Typography
            variant="subtitle2"
            color="primary.main"
            sx={{
              textAlign: 'end',
              '@media (max-width: 992px) and (min-width: 768px)': {
                // maxWidth: '300px',
                pl: '50px'
              },
              '@media (max-width: 768px) and (min-width: 480px)': {
                maxWidth: '354px'
              },
              '@media (max-width: 480px) and (min-width: 320px)': {
                flexDirection: 'column',
                gap: '20px',

                maxWidth: '100%',
                textAlign: 'start'
              }
            }}
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=123+Coffee+Lane,+Kilimani,+Nairobi,+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              123 Coffee Lane, Kilimani, Nairobi, Kenya {isTablet ? '' : <br />} P.O. Box{' '}
              {isMobileP ? <br /> : ''}
              45678-00100
            </a>
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontSize: '174px',
          fontWeight: '400',
          lineHeight: 1,
          letterSpacing: -4,
          textAlign: 'center',
          color: 'primary.light',
          textTransform: 'uppercase',
          '@media (max-width: 1280px) and (min-width: 992px)': {
            fontSize: '154px'
          },
          '@media (max-width: 992px) and (min-width: 768px)': {
            fontSize: '124px'
          },
          '@media (max-width: 768px) and (min-width: 480px)': {
            fontSize: '94px'
          },
          '@media (max-width: 480px) and (min-width: 320px)': {
            fontSize: '63px'
          },
          '@media (max-width: 320px)': {
            fontSize: '53px'
          }
        }}
      >
        Keen and tight <br />
        caretakers
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media (max-width: 480px) and (min-width: 320px)': {
            flexDirection: 'column',
            gap: '20px'
          }
        }}
      >
        <Typography variant="body2" color="divider" sx={{ fontSize: { sm: '18px', xs: '16px' } }}>
          © 2024 KEEN AND TIGHT CARETAKERS
        </Typography>
        <Typography variant="body2" color="divider" sx={{ fontSize: { sm: '18px', xs: '16px' } }}>
          UIC/PIC 205756758
        </Typography>
      </Box>
    </Stack>
  )
}

export default Footer
