'use client'
import { createTheme, ThemeOptions } from '@mui/material/styles'

const commonSettings: ThemeOptions = {
  breakpoints: { values: { xs: 320, sm: 480, md: 992, lg: 1280, xl: 1440 } }
}

const lightTheme = createTheme({
  ...commonSettings,
  typography: {
    fontFamily: '"Poppins", "Helvetica Neue", "SF Pro Display", "Roboto", sans-serif',
    body1: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 400,
      fontSize: '26px',
      lineHeight: '120%',
      transition: 'font-size 2s ease',
      '@media (max-width:768px)': { fontSize: '22px' }
      // '@media (max-width:720px)': { fontSize: '18px' },
      // '@media (max-width:500px)': { fontSize: '16px' }
    },
    body2: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '130%'
    },
    button: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '110%',
      textAlign: 'center',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '20px' },
      // '@media (max-width:720px)': { fontSize: '18px' },
      // '@media (max-width:500px)': { fontSize: '16px' }
    },
    subtitle1: {
      fontSize: '22px',
      fontWeight: '400',
      fontStyle: 'normal',
      lineHeight: '110%',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '15px' },
      // '@media (max-width:720px)': { fontSize: '14px' }
    },
    subtitle2: {
      fontFamily: 'Helvetica Neue',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '115%',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '13px' },
      // '@media (max-width:720px)': { fontSize: '12px' }
    },
    h1: {
      fontFamily: 'Poppins',
      fontSize: '94px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '100%',
      textTransform: 'none',
      transition: 'font-size 2s ease',
      '@media (max-width:1280px)': { fontSize: '82px' },
      '@media (max-width:768px)': { fontSize: '68px' },
      '@media (max-width:480px)': { fontSize: '48px', fontWeight: '400' },
      '@media (max-width:320px)': { fontSize: '31px' }
    },
    h2: {
      fontFamily: 'Poppins',
      fontSize: '58px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: '110%',
      textTransform: 'none',
      transition: 'font-size 2s ease',
      '@media (max-width: 480px)': {
        fontSize: '36px'
      }
    },
    h3: {
      fontFamily: 'Poppins',
      fontSize: '28px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '110%',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '35px' },
      // '@media (max-width:720px)': { fontSize: '28px' },
      // '@media (max-width:500px)': { fontSize: '24px' }
    },
    h4: {
      fontSize: '26px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '120%',
      textTransform: 'none',
      transition: 'font-size 2s ease'
      // '@media (max-width:1440px)': { fontSize: '24px', lineHeight: '130%' },
      // '@media (max-width:1230px)': { fontSize: '22px', lineHeight: '130%' },
      // '@media (max-width:720px)': { fontSize: '20px', lineHeight: '130%' },
      // '@media (max-width:500px)': { fontSize: '18px', lineHeight: '130%' }
    }
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#c6c6c6', // Светло-серый (light-grey) +
      light: '#fff' // Белый (white) +
    },
    secondary: {
      main: '#505050' // Серый (grey / dark-grey) +
    },
    background: {
      default: '#e5e2d9', // Фоновый цвет (bg) +
      paper: '#da4e28' // Оранжевый (red) +
    },
    text: {
      primary: '#312a27', // Текст основной (black) +
      secondary: '#6a91bf' // Синий (blue) +
    },
    success: {
      main: '#f2f2f2' // Серый (dark-gray) +
    },
    error: {
      main: '#FF0004' // Ошибка (red) +
    },
    divider: '#505050' // Линия темно-серый
  }
})

export { lightTheme }
