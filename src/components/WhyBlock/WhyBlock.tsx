'use client'
import { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TitleName from '@/common/ui-kit/TittleName'

const WhyBlock: FC = () => {
  return (
    <Stack
      gap={'30px'}
      sx={{
        padding: '120px 36px',
        '@media (max-width: 1280px)': {
          padding: '120px 40px'
        },
        '@media (max-width: 992px)': {
          padding: '20px 16px'
        },
        '@media (max-width: 768px)': {
          padding: '80px 20px'
        },
        '@media (max-width: 480px)': {
          padding: '60px 16px'
        },
        '@media (max-width: 320px)': {
          padding: '60px 10px'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: '20px'
          },
          '@media (max-width: 480px) and (min-width: 321px)': {
            mb: '67px'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 13%',
            alignItems: 'center',
            justifyContent: 'space-between',
            '@media (max-width: 992px) and (min-width: 768px)': {
              flex: '1 1 10%'
            }
          }}
        >
          <TitleName title="Why we" />
        </Box>
        <Stack sx={{ flex: '1 1 50%', gap: '20px' }}>
          <Typography
            variant="h2"
            sx={{
              color: 'background.paper',
              textTransform: 'uppercase',
              maxWidth: '930px',
              width: '100%',
              textIndent: '270px',
              '@media (max-width:992px)': { textIndent: '170px' },
              '@media (max-width:768px)': { fontSize: '36px', textIndent: '190px' },
              '@media (max-width:480px)': { fontSize: '28px', textIndent: '0px' }
            }}
          >
            Why Leading Businesses Choose Us for Coffee Equipment
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '500',
              color: 'divider'
            }}
          >
            Our mission is to empower your coffee production with innovative, reliable, and
            efficient equipment. By combining cutting-edge technology with a deep understanding of
            the industry, we deliver solutions that help you streamline operations, reduce costs,
            and ensure consistent quality. Join the ranks of top producers who trust us for their
            equipment needs.
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          maxWidth: '1368px',
          width: '100%',
          borderRadius: '20px',
          backgroundImage: 'url("./why-bg.png")',
          height: '590px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          m: '0 auto',
          '@media (max-width:992px)': { height: '400px' },
          '@media (max-width: 480px)': {
            height: '260px'
          }
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',

          '@media (max-width:768px)': { flexDirection: 'column', gap: '30px' }
        }}
      >
        <Stack
          sx={{
            maxWidth: '416px',
            width: '100%',
            gap: '10px',
            '@media (max-width: 1280px)': {
              maxWidth: '360px'
            },
            '@media (max-width: 992px)': {
              maxWidth: '305px'
            },
            '@media (max-width:768px)': { maxWidth: '100%' }
          }}
        >
          <Typography variant="h4" sx={{ color: 'background.paper', fontWeight: '500' }}>
            {'// 1'}
          </Typography>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', color: 'text.primary' }}>
            Innovative Technology for Maximum Efficiency
          </Typography>
          <Typography variant="body2" sx={{ color: 'divider' }}>
            Leverage state-of-the-art machinery that optimizes every stage of production, from
            roasting to packaging. Reduce downtime and increase output with our advanced equipment
            solutions.
          </Typography>
        </Stack>

        <Stack
          sx={{
            maxWidth: '416px',
            width: '100%',
            gap: '10px',
            '@media (max-width: 1280px)': {
              maxWidth: '360px'
            },
            '@media (max-width: 992px)': {
              maxWidth: '302px'
            },
            '@media (max-width:768px)': { maxWidth: '100%' }
          }}
        >
          <Typography variant="h4" sx={{ color: 'background.paper', fontWeight: '500' }}>
            {'// 2'}
          </Typography>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', color: 'text.primary' }}>
            Custom Solutions Tailored to Your Needs
          </Typography>
          <Typography variant="body2" sx={{ color: 'divider' }}>
            We understand that every business is unique. Our flexible range of equipment adapts to
            your production scale and requirements, ensuring a seamless fit for your operations.
          </Typography>
        </Stack>

        <Stack
          sx={{
            maxWidth: '416px',
            width: '100%',
            gap: '10px',
            '@media (max-width: 1280px)': {
              maxWidth: '350px'
            },
            '@media (max-width: 992px)': {
              maxWidth: '302px'
            },
            '@media (max-width:768px)': { maxWidth: '100%' }
          }}
        >
          <Typography variant="h4" sx={{ color: 'background.paper', fontWeight: '500' }}>
            {'// 3'}
          </Typography>
          <Typography variant="h3" sx={{ textTransform: 'uppercase', color: 'text.primary' }}>
            Trusted Quality Backed by Global Expertise
          </Typography>
          <Typography variant="body2" sx={{ color: 'divider' }}>
            Partner with a team that prioritizes reliability and excellence. With years of
            experience and global recognition, our equipment is built to deliver consistent results
            you can depend on.
          </Typography>
        </Stack>
      </Box>
    </Stack>
  )
}

export default WhyBlock
