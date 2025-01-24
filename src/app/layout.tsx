import * as React from 'react'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeWrapper } from '@/providers/provider-theme'
import StoreProvider from '@/providers/provider-store'
import '@/styles/globals.sass'

export const metadata: Metadata = {
  title: 'KEEP AND TIGHT CARETAKERS',
  description: 'KEEP AND TIGHT CARETAKERS'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeWrapper>{children}</ThemeWrapper>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
