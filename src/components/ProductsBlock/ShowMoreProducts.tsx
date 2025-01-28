import { FC } from 'react'
import { Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'

const ShowMoreButton = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flex: '1 1 80%',
  justifyContent: 'space-between',
  padding: '0px',
  color: theme.palette.text.primary,
  fontFamily: 'Poppins',
  fontSize: '26px',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '120%',
  borderRadius: '0px',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: 'transparent'
  },
  '&:focus': {
    outline: 'none',
    backgroundColor: 'transparent'
  },
  '&:active': {
    backgroundColor: 'transparent'
  }
}))

const ArrowIcon = styled('img')(() => ({
  cursor: 'pointer',
  width: '24px',
  height: '24px',
  transition: 'transform 0.2s ease-in-out',
  transform: 'rotate(0deg)'
}))

interface ShowMoreProps {
  isExpanded: boolean
  onClick: () => void
  id: string
  title: string
  country: string
  description: string
  image: string
}

const ShowMoreProducts: FC<ShowMoreProps> = ({
  isExpanded,
  onClick,
  id,
  title,
  country,
  description,
  image
}) => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          maxWidth: '416px',
          width: '100%',
          '@media (max-width:992px)': { maxWidth: '300px' },
          '@media (max-width:768px)': { maxWidth: '40px' }
        }}
      >
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: isExpanded ? 'primary.light' : 'text.primary',
            '@media (max-width:768px)': { top: '24px', left: '10px' },
            '@media (max-width:320px)': { top: '20px', left: '10px' }
          }}
        >
          {id}
        </Typography>
      </Box>

      <ShowMoreButton
        sx={{
          height: isExpanded ? '290px' : 'auto',
          '@media (max-width:480px)': {
            width: '100%',
            height: 'auto'
          }
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            gap: '7px',
            paddingTop: '20px',
            alignItems: 'flex-start',
            taxtAlign: 'left',
            '@media (max-width:768px)': { gap: '10px' }
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 500,
              textTransform: 'uppercase',
              color: isExpanded ? 'primary.light' : 'inherit',
              '@media (max-width:320px)': { fontSize: '18px' }
            }}
          >
            {title}
          </Typography>
          {isExpanded && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '7px',
                '@media (max-width:768px)': { ml: '-30px' },
                '@media (max-width:480px)': { ml: '-30px' },
                '@media (max-width:320px)': {
                  maxWidth: '246px'
                }
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Helvetica Neue',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontStyle: 'normal',
                  lineHeight: '130%',
                  color: isExpanded ? 'primary.main' : 'text.secondary'
                }}
              >
                / {country} /
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: isExpanded ? '#FFFFFFE5' : 'divider',
                  textTransform: 'none',
                  maxWidth: '536px',
                  width: '100%',
                  '@media (max-width:768px)': { maxWidth: '344px' },
                  '@media (max-width: 480px)': {
                    maxWidth: '370px'
                  },
                  '@media (max-width: 320px)': {
                    maxWidth: '225px'
                  }
                }}
              >
                {description}
              </Typography>
              {isExpanded && (
                <Box
                  component="img"
                  src={image}
                  sx={{
                    display: 'none',
                    '@media (max-width: 480px)': {
                      display: 'block'
                    },
                    '@media (max-width: 320px)': {
                      maxWidth: '225px'
                    }
                  }}
                />
              )}
            </Box>
          )}
        </Stack>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: '20px',
            paddingRight: '20px',
            '@media (max-width:768px)': { paddingRight: '12px' },
            '@media (max-width:480px)': { paddingRight: '10px' },
            '@media (max-width:320px)': { paddingTop: '15px' }
          }}
        >
          {isExpanded && (
            <Box
              component="img"
              src={image}
              sx={{
                '@media (max-width: 480px)': {
                  display: 'none',
                  maxHeight: '250px'
                }
              }}
            />
          )}
          <ArrowIcon
            onClick={onClick}
            src={isExpanded ? '/icons/icon-arrow down-white.svg' : '/icons/icon-arrow down-red.svg'}
            alt="Arrow Icon"
            style={{
              margin: '5px 2px',
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
          />
        </Box>
      </ShowMoreButton>
    </>
  )
}

export default ShowMoreProducts
