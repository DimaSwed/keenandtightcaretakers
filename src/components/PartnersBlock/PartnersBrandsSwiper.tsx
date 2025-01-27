'use client'
import React, { FC } from 'react'
import { Box } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const PartnersBrandsSwiper: FC = () => {
  const brands: string[] = [
    '/logos/logo1.png',
    '/logos/logo2.png',
    '/logos/logo3.png',
    '/logos/logo4.png',
    '/logos/logo5.png',
    '/logos/logo6.png'
  ]
  return (
    <Box
      sx={{
        width: '100%',
        mb: '120px',
        display: { sm: 'block', xs: 'none' },
        '@media (max-width: 768px) and (min-width: 480px)': {
          mb: '74px',
          maxHeight: '80px'
        }
      }}
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 5, spaceBetween: 40 }
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100px'
            }}
          >
            <Box
              component="img"
              src={brand}
              alt={`Brand ${index + 1}`}
              sx={{
                maxWidth: '100%',
                maxHeight: '80px',
                margin: '0 auto'
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default PartnersBrandsSwiper
