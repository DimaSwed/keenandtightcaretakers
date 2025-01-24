import React, { FC } from 'react'
import { Typography } from '@mui/material'

interface HeaderListMenuProps {
  customStyles?: React.CSSProperties
}

const HeaderListMenu: FC<HeaderListMenuProps> = ({ customStyles }) => {
  return (
    <>
      {['About', 'Products', 'Why We', 'Contacts'].map((section) => (
        <Typography
          key={section}
          // variant="body2"
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
          {section}
        </Typography>
      ))}
    </>
  )
}

export default HeaderListMenu
