'use client'
import { useState } from 'react'
import ShowMoreProducts from '@/components/ProductsBlock/ShowMoreProducts'
import TitleName from '@/common/ui-kit/TittleName'
import { Box, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'
import { productsData } from '@/common/ProductsData'

const ProductsBlock: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <Box
      id="products-section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        maxWidth: '1368px',
        width: '100%',
        padding: '120px 0px',
        m: '0 auto',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '120px 40px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '158px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          padding: '80px 20px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '60px 16px',
          height: 'fit-content'
        },
        '@media (max-width: 320px)': {
          padding: '60px 10px',
          height: 'fit-content'
        }
      }}
    >
      <Stack sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            mb: '40px',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              gap: '20px',
              mb: '30px'
            },
            '@media (max-width: 320px)': {
              mb: '20px'
            }
          }}
        >
          <Box
            sx={{
              // border: '1px solid red',
              display: 'flex',
              maxWidth: '416px',
              width: '100%',
              // flex: '1 1 50%',
              alignItems: 'center',
              justifyContent: 'space-between',
              '@media (max-width: 992px) and (min-width: 769px)': {
                maxWidth: '300px'
              },
              '@media (max-width: 768px)': {
                maxWidth: '100%'
              }
              // '@media (max-width: 480px) and (min-width: 320px)': {
              //   pr: '0px',
              //   flexDirection: 'column',
              //   gap: '20px',
              //   alignItems: 'flex-start',
              //   mb: '20px'
              // }
            }}
          >
            <TitleName
              title="Products"
              sx={{
                '@media (max-width: 480px) and (min-width: 321px)': {
                  height: 'auto'
                }
              }}
            />
          </Box>
          <Box sx={{ flex: '1 1 80%', display: 'flex', alignItems: 'flex-end' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'background.paper',
                fontWeight: 500,
                maxWidth: '952px',
                width: '100%',
                textIndent: '270px',
                // textWrap: 'balance'
                '@media (max-width:1280px)': { maxWidth: '840px', textIndent: '190px' },
                '@media (max-width:992px)': { maxWidth: '660px', textIndent: '180px' },
                '@media (max-width:768px)': { maxWidth: '100%', textIndent: '200px' },
                '@media (max-width:480px)': { maxWidth: '100%', textIndent: '0px' }
                // '@media (max-width:480px)': { fontSize: '28px' }
              }}
            >
              We collaborate with the world’s leading brands to bring you state-of-the-art coffee
              processing and roasting equipment. From roasting machines to sorting technologies, our
              partners offer a wide range of solutions tailored to every stage of coffee production.
              Explore the trusted names behind the equipment that powers the global coffee industry.
            </Typography>
          </Box>
        </Box>

        <Stack sx={{ gap: '20px' }}>
          {productsData.map((product, index) => (
            <Box
              key={product.id}
              sx={{
                display: 'flex',
                borderTop: '1px solid #c6c6c6',
                backgroundColor: expandedIndex === index ? 'background.paper' : 'transparent',
                borderRadius: expandedIndex === index ? '20px' : '0',
                transition: 'background-color 0.3s, border-radius 0.3s'
              }}
            >
              <ShowMoreProducts
                isExpanded={expandedIndex === index}
                onClick={() => handleToggle(index)}
                id={product.id}
                title={product.title}
                country={product.country}
                description={product.description}
                image={product.image}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}

export default ProductsBlock
