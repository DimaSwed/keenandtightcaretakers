import React, { FC } from 'react'
import { Typography } from '@mui/material'

interface HeaderListMenuProps {
  customStyles?: React.CSSProperties
  onClick?: () => void
}

const HeaderListMenu: FC<HeaderListMenuProps> = ({ customStyles, onClick }) => {
  const sections = [
    { name: 'About', id: 'about-section' },
    { name: 'Products', id: 'products-section' },
    { name: 'Why We', id: 'why-we-section' },
    { name: 'Contacts', id: 'contacts-section' }
  ]

  return (
    <>
      {sections.map((section) => (
        <Typography
          key={section.name}
          component="a"
          onClick={onClick}
          href={`#${section.id}`}
          sx={{
            fontFamily: 'Poppins',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '130%',
            color: 'divider',
            transition: 'color 0.2s ease-in-out',
            '&:hover': {
              color: 'background.paper'
            },
            '@media (max-width:768px)': {
              fontSize: '38px'
            },
            '@media (max-width:480px)': {
              fontSize: '38px'
            },
            '@media (max-width:320px)': {
              fontSize: '34px'
            },
            ...customStyles
          }}
        >
          {section.name}
        </Typography>
      ))}
    </>
  )
}

export default HeaderListMenu
