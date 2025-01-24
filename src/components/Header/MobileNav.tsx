import React, { FC, useEffect } from 'react'
import { Box, Drawer, Stack, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { closeNavReducer } from '@/store/slices/slice-navigation'
import Logo from '@/common/ui-kit/Logo'
import HeaderListMenu from './HeaderListMenu'
export interface IWindowProps {
  window?: () => Window
}

const drawerWidth = '100%'

export const MobileNav: FC<IWindowProps> = ({ window }) => {
  const dispatch = useAppDispatch()
  const showNav = useAppSelector((state) => state.navigation.showNav)

  const closeNavHandler = () => dispatch(closeNavReducer())

  useEffect(() => {
    if (showNav) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }
  }, [showNav])

  const drawer = (
    <Box
      position={'relative'}
      height={'100vh'}
      padding={'11.5px 20px'}
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Logo />
        <Box
          onClick={closeNavHandler}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'divider',
            ':hover': {
              color: '#da4e28',
              '& svg': {
                fill: '#da4e28' // Использует текущий цвет текста
              }
            }
          }}
        >
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="42px"
            height="42px"
            viewBox="0 0 42 42"
            fill="#FFFFFF"
            sx={{
              fill: 'divider',
              cursor: 'pointer'
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.1023 9.23229C33.6881 9.81807 33.6881 10.7678 33.1023 11.3536L11.182 33.2739C10.5962 33.8597 9.64645 33.8597 9.06066 33.2739C8.47487 32.6881 8.47487 31.7384 9.06066 31.1526L30.981 9.23229C31.5668 8.6465 32.5165 8.6465 33.1023 9.23229Z"
              fill="#505050"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.0608 9.06066C8.47501 9.64644 8.47501 10.5962 9.0608 11.182L30.9811 33.1023C31.5669 33.6881 32.5166 33.6881 33.1024 33.1023C33.6882 32.5165 33.6882 31.5668 33.1024 30.981L11.1821 9.06066C10.5963 8.47487 9.64658 8.47487 9.0608 9.06066Z"
              fill="#505050"
            />
          </Box>
        </Box>
      </Box>

      <Stack
        sx={{
          gap: '100px',
          alignItems: 'center',
          position: 'absolute',
          left: 0,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        <Stack
          sx={{
            gap: '30px'
          }}
        >
          <HeaderListMenu
            customStyles={{
              fontFamily: 'Roboto',
              fontSize: '38px',
              fontWeight: '500',
              textAlign: 'center',
              color: 'divider'
            }}
          />
        </Stack>
        <Box component={'a'} href="tel:+254201234567" sx={{ width: '100%', textAlign: 'center' }}>
          <Typography
            sx={{
              color: 'background.paper',
              fontFamily: 'Roboto',
              fontSize: '38px',
              fontWeight: '700',
              fontStyle: 'normal',
              lineHeight: '110%',
              textDecoration: 'none',
              cursor: 'pointer',
              '@media (max-width:320px)': { fontSize: '32px' }
            }}
          >
            +254 20 123 4567
          </Typography>
        </Box>
      </Stack>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={showNav}
        onClose={closeNavHandler}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { sm: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  )
}
