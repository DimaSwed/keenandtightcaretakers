import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/system'

const ShowMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.light,
  fontFamily: 'Poppins',
  fontSize: '24px',
  fontWeight: '400',
  fontStyle: 'normal',
  lineHeight: '110%',
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: '0px',
  gap: '10px'
}))

const ArrowIcon = styled('img')<{ color?: string }>(({ color }) => ({
  width: '16px',
  height: '16px',
  transition: 'transform 0.3s ease-in-out',
  transform: 'rotate(0deg)',
  filter: color
    ? `invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)`
    : 'none'
}))

interface ShowMoreProps {
  isExpanded: boolean
  onClick: () => void
  iconColor?: string
}

const ShowMore: React.FC<ShowMoreProps> = ({ isExpanded, onClick, iconColor }) => {
  return (
    <ShowMoreButton onClick={onClick}>
      {isExpanded ? 'Show Less' : 'Show More'}
      <ArrowIcon
        src="/icons/icon-arrow down-white.svg"
        alt="Arrow Icon"
        style={{
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
          filter: iconColor ? `hue-rotate(${iconColor})` : 'none'
        }}
      />
    </ShowMoreButton>
  )
}

export default ShowMore
