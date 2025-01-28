'use client'
import React, { FC } from 'react'
import BlackButton from '@/common/ui-kit/ButtonBlack'
import { Box, Stack, Typography } from '@mui/material'

const TechBlock: FC = () => {
  return (
    <Box
      sx={{
        '@media (max-width: 1440px)': {
          padding: '0px 36px'
        },
        '@media (max-width: 1280px)': {
          padding: '0px 40px'
        },
        '@media (max-width: 992px)': {
          padding: '0px 16px'
        },
        '@media (max-width: 768px)': {
          padding: '0px 20px'
        },
        '@media (max-width: 480px)': {
          padding: '0px 16px'
        },
        '@media (max-width: 320px)': {
          padding: '0px 10px'
        }
      }}
    >
      <Box
        sx={{
          maxWidth: '1368px',
          width: '100%',
          borderRadius: '20px',
          padding: '60px 20px',
          backgroundColor: 'background.paper',
          m: '0 auto',
          // height: `calc(100vh - 85px)`,
          height: '808px',
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',

          '@media (max-width: 992px) and (min-width: 769px)': {
            padding: '20px 12px'
          },
          '@media (max-width: 768px) and (min-width: 481px)': {
            padding: '30px 10px',
            justifyContent: 'space-between',
            height: '808px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            height: 'fit-content',
            padding: '30px 8px',
            gap: '0px'
          },
          '@media (max-width: 320px) ': {
            padding: '20px 10px',
            justifyContent: 'space-between',
            maxHeight: 'fit-content'
          }
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
              '@media (max-width:768px) and (min-width:481px)': {
                width: '100%'
              },
              '@media (max-width:480px)': {
                textAlign: 'start',
                mr: '0px'
                // maxWidth: '424px',
                // width: '100%'
                // width: 'auto',
                // textWrap: 'nowrap'
              }
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
                bottom: '-175px',
                maxWidth: '872px',
                width: '100%',
                height: '627px',
                '@media (max-width: 1280px) and (min-width: 993px)': {
                  maxWidth: '760px',
                  height: '546px',
                  bottom: '-105px'
                },
                '@media (max-width: 992px) and (min-width: 769px)': {
                  maxWidth: '610px',
                  height: '438px',
                  bottom: '-70px'
                },
                '@media (max-width: 768px) and (min-width: 481px)': {
                  maxWidth: '617px',
                  height: '443px',
                  left: '5%',
                  bottom: '0px',
                  pr: '50px'
                },
                '@media (max-width: 480px)': {
                  maxWidth: '447px',
                  height: '321px',
                  bottom: '0px',
                  pr: '0px',
                  left: '0px',
                  mt: '-40px',
                  position: 'relative'
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
                gap: '20px',
                alignSelf: 'flex-end'
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
                '@media (max-width: 1280px) and (min-width: 993px)': {
                  maxWidth: '520px'
                },
                '@media (max-width: 992px) and (min-width: 769px)': {
                  maxWidth: '500px'
                },
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
            <Box component="a" href="#form-section" sx={{ textDecoration: 'none' }}>
              <BlackButton
                type="button"
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
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default TechBlock
