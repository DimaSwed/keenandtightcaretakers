'use client'
import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { BurgerButton } from './Burger'
import { MobileNav } from './MobileNav'
import Link from 'next/link'
import Logo from '@/common/ui-kit/Logo'
import HeaderListMenu from './HeaderListMenu'

const Header: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '85px',
          backgroundColor: 'background.default',
          boxShadow: 'none',
          '@media (max-width:768px)': { height: '65px' }
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            margin: '0 auto',
            maxWidth: '1440px',
            width: '100%',
            position: 'relative',
            padding: '0px 40px',
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
          <Link href="/" passHref>
            <Logo />
          </Link>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
              '@media (max-width:992px)': { gap: '10px' },
              '@media (max-width:768px)': { display: 'none' }
            }}
          >
            <HeaderListMenu />
          </Box>

          <Box
            display="flex"
            sx={{
              '@media (max-width:768px)': { display: 'none' }
            }}
          >
            <MobileNav />

            <a href="tel:+254201234567">
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'text.primary',
                  fontFamily: 'Poppins',
                  textDecoration: 'none',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'color 0.2s ease-in-out',
                  '&:hover': {
                    color: 'background.paper'
                  }
                }}
              >
                +254 20 123 4567
              </Typography>
            </a>
          </Box>
          <BurgerButton />
        </Box>
      </Box>
    </>
  )
}

export default Header
