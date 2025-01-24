import Form from '@/components/FormBlock/FormBlock'
import Header from '@/components/Header/Header'
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

      <Box sx={{ backgroundColor: 'background.paper' }}>
        <Form />
      </Box>
    </Stack>
  )
}
