'use client'
import { FC, useState } from 'react'
import { Box } from '@mui/material'
import TitleName from '@/common/ui-kit/TittleName'
import ShowMore from '@/common/ui-kit/ShowMoreButton'
import Team from './Team'

const ClientBlock: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'background.default',
        maxWidth: '1368px',
        width: '100%',
        padding: '120px 0px',
        gap: '122px',
        m: '0 auto',
        '@media (max-width: 1280px) and (min-width: 993px)': {
          padding: '120px 40px',
          gap: '106px'
        },
        '@media (max-width: 992px) and (min-width: 769px)': {
          padding: '120px 16px'
        },
        '@media (max-width: 768px) and (min-width: 481px)': {
          padding: '80px 20px',
          flexDirection: 'column',
          gap: '40px'
        },
        '@media (max-width: 480px) and (min-width: 321px)': {
          padding: '60px 16px',
          flexDirection: 'column',
          gap: '40px',
          height: 'fit-content'
        },
        '@media (max-width: 320px)': {
          padding: '60px 10px',
          flexDirection: 'column',
          gap: '40px',
          height: 'fit-content'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          maxWidth: '294px',
          width: '100%',
          '@media (max-width: 992px)': {
            maxWidth: '194px'
          },
          '@media (max-width: 768px)': {
            maxWidth: '100%'
          }
        }}
      >
        <TitleName
          title="Client Testimonials"
          sx={{
            height: 'auto'
          }}
        />
      </Box>

      <Box
        display="flex"
        sx={{
          flexDirection: 'column',
          maxWidth: 'width: 952px',
          width: '100%'
        }}
      >
        <Team isExpanded={isExpanded} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: '20px',
            border: '1px solid white'
          }}
        >
          <ShowMore
            isExpanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
            text={isExpanded ? 'Show less' : 'Show more'}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ClientBlock
