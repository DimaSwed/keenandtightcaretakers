import Header from '@/components/Header/Header'
import TechBlock from '@/components/TechBlock/TechBlock'
import AboutBlock from '@/components/AboutBlock/AboutBlock'
import Form from '@/components/FormBlock/FormBlock'
import Footer from '@/components/Footer/Footer'
import { Box, Stack } from '@mui/material'

export const metadata = {
  title: 'KEEP AND TIGHT CARETAKERS',
  description: 'KEEP AND TIGHT CARETAKERS',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function Home() {
  return (
    <Stack
      component="main"
      sx={{
        backgroundColor: 'background.default',
        overflow: 'hidden',
        fontFamily: 'Helvetica Neue'
      }}
    >
      <Header />
      <TechBlock />
      <AboutBlock />
      <Box sx={{ backgroundColor: 'background.paper' }}>
        <Form />
      </Box>
      <Box sx={{ backgroundColor: 'text.primary' }}>
        <Footer />
      </Box>
    </Stack>
  )
}
