'use client'
import React, { FC } from 'react'
import BlackButton from '@/common/ui-kit/ButtonBlack'
import { Box, Stack, Typography } from '@mui/material'

const TechBlock: FC = () => {
  return (
    <Box
      sx={{
        maxWidth: '1368px',
        width: '100%',
        borderRadius: '20px',
        padding: '60px 20px',
        backgroundColor: 'background.paper',
        m: '0 auto',
        height: `calc(100vh - 85px)`,
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        '@media (max-width: 992px) and (min-width: 768px)': {
          padding: '20px 12px'
        },
        '@media (max-width: 768px) and (min-width: 320px)': {
          padding: '30px 10px',
          justifyContent: 'space-between',
          height: '708px'
        },
        '@media (max-width: 320px) ': {
          padding: '20px 10px',
          justifyContent: 'space-between',
          height: '635px'
        }

        // '@media (min-width: 480px)': {
        //   padding: '0px 16px'
        // },
        // '@media (min-width: 768px)': {
        //   padding: '0px 20px'
        // },
        // '@media (min-width: 992px)': {
        //   padding: '0px 16px'
        // },
        // '@media (min-width: 1280px)': {
        //   padding: '0px 40px'
        // },
        // '@media (min-width: 1440px)': {
        //   padding: '0px 36px'
        // }
      }}
    >
      <Box sx={{ zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: '400',
            color: 'primary.light'
          }}
        >
          PrePrecision Technology for
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: '400',
            color: 'primary.light',
            textAlign: 'end',
            mr: '50px',
            '@media (max-width:480px)': { textAlign: 'start', mr: '0px' }
          }}
        >
          Coffee Excellence
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media (max-width: 768px)': {
            flexDirection: 'column'
          }
        }}
      >
        <Box sx={{ position: 'relative', maxWidth: '872px', width: '100%' }}>
          <Box
            component={'img'}
            src="./synchro-img.png"
            sx={{
              position: 'absolute',
              bottom: '-195px',
              maxWidth: '872px',
              width: '100%',
              height: '627px',
              '@media (max-width: 1280px) and (min-width: 992px)': {
                maxWidth: '760px',
                height: '546px',
                bottom: '-105px'
              },
              '@media (max-width: 992px) and (min-width: 768px)': {
                maxWidth: '610px',
                height: '438px',
                bottom: '0px'
              },
              '@media (max-width: 768px) and (min-width: 480px)': {
                maxWidth: '617px',
                height: '443px',
                left: '5%',
                bottom: '10%',
                pr: '50px'
              },
              '@media (max-width: 480px)': {
                maxWidth: '447px',
                height: '321px',
                bottom: '0'
              },
              '@media (max-width: 320px)': {
                maxWidth: '300px',
                height: '216px',
                bottom: '0'
              }
            }}
          />
        </Box>

        <Stack
          gap="30px"
          sx={{
            '@media (max-width: 480px)': {
              gap: '20px'
            }
          }}
        >
          <Typography
            variant="body1"
            sx={{
              maxWidth: '393px',
              width: '100%',
              fontWeight: '500',
              color: 'primary.light',
              '@media (max-width: 768px)': {
                maxWidth: '100%'
                // textWrap: 'balance'
              }
            }}
          >
            Empowering roasteries with state-of-the-art equipment designed for efficiency,
            consistency, and sustainability. From small batches to large-scale production, achieve
            perfect roasts every time.
          </Typography>
          <a href="#form-section" style={{ textDecoration: 'none' }}>
            <BlackButton
              type="button" // Измените на "button", чтобы предотвратить отправку формы
              variant="contained"
              sx={{
                maxWidth: '340px',
                width: '100%',
                height: '58px',
                '@media (max-width: 768px)': { maxWidth: '100%' }
              }}
            >
              {'Connect Us'}
            </BlackButton>
          </a>
        </Stack>
      </Box>
    </Box>
  )
}

export default TechBlock
