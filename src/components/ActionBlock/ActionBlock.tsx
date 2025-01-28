'use client'
import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import ColoredButton from '@/common/ui-kit/ColoredButton'

const ActionBlock: FC = () => {
  return (
    <Box
      sx={{
        padding: '120px 36px',
        '@media (max-width: 1280px)': {
          padding: '120px 40px'
        },
        '@media (max-width: 992px)': {
          padding: '20px 16px'
        },
        '@media (max-width: 768px)': {
          padding: '80px 20px'
        },
        '@media (max-width: 480px)': {
          padding: '60px 16px'
        },
        '@media (max-width: 320px)': {
          padding: '60px 10px'
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1368px',
          width: '100%',
          borderRadius: '20px',
          padding: '82px 100px',
          backgroundImage: 'url("./action-bg.png")',
          backgroundSize: 'cover', // Можно добавить для заполнения контейнера
          backgroundPosition: 'center', // Центрирование изображения
          m: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          '@media (max-width: 1280px) and (min-width: 993px)': {
            padding: '80px 107px'
          },
          '@media (max-width: 992px) and (min-width: 769px)': {
            padding: '133px 72px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            padding: '112px 10px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            padding: '58px 10px',
            gap: '20px'
          },
          '@media (max-width: 320px) ': {
            padding: '40px 10px',
            gap: '20px'
          }
        }}
      >
        <Box sx={{ zIndex: 1, textAlign: 'center', width: '100%' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: '74px',
              fontWeight: '400',
              color: 'primary.light',
              maxWidth: '1167px',
              width: '100%',

              '@media (max-width: 1280px) and (min-width: 993px)': {
                maxWidth: '990px',
                fontSize: '68px'
              },
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '815px',
                fontSize: '74px'
              },
              '@media (max-width: 768px) and (min-width: 481px)': {
                fontSize: '68px'
              },
              '@media (max-width: 480px) and (min-width: 321px)': {
                fontSize: '36px'
              },
              '@media (max-width: 320px) ': {
                fontSize: '28px'
              }
            }}
          >
            Enhance Your Production with Our Advanced Equipment Solutions
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '650px', width: '100%' }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Helvetica Neue',
              fontWeight: '500',
              textAlign: 'center',
              color: 'primary.light',
              '@media (max-width: 768px) and (min-width: 321px)': {
                fontSize: '22px'
              },
              '@media (max-width: 320px) ': {
                fontSize: '18px'
              }
            }}
          >
            Partner with us to access state-of-the-art machinery designed to optimize your
            operations. Our equipment ensures efficiency, reliability, and superior performance,
            empowering your business to achieve new heights.
          </Typography>
        </Box>

        <Box
          component="a"
          href="#form-section"
          sx={{
            textDecoration: 'none',
            '@media (max-width: 768px)': {
              width: '100%'
            }
          }}
        >
          <ColoredButton
            type="button"
            variant="contained"
            sx={{
              maxWidth: { md: '533px', xs: '100%' },
              width: '100%',
              height: '58px',
              fontFamily: 'Poppins',
              fontSize: '24px',
              fontWeight: 400,
              padding: { md: '16px 71.5px', sm: 0, xs: '16px 54px' },
              margin: '0 auto',
              '@media (max-width: 411px) and (min-width: 321px) ': {
                minHeight: '110px'
              },
              '@media (max-width: 320px) ': {
                height: '110px'
              }
            }}
          >
            {'Request a Personalized Quote'}
          </ColoredButton>
        </Box>
      </Box>
    </Box>
  )
}

export default ActionBlock
