import React, { FC } from 'react'
import { Typography } from '@mui/material'

interface HeaderListMenuProps {
  customStyles?: React.CSSProperties
}

const HeaderListMenu: FC<HeaderListMenuProps> = ({ customStyles }) => {
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
          component="a" // Используем компонент 'a' для ссылок
          href={`#${section.id}`} // Указываем href для перехода к нужному блоку
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
