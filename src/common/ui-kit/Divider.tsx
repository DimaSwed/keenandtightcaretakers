import { FC } from 'react'
import { Divider as MuiDivider, DividerProps } from '@mui/material'

interface CustomDividerProps extends DividerProps {
  text?: string
}

const Divider: FC<CustomDividerProps> = ({ text, ...props }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: 'auto' }}>
      {text && <span style={{ margin: '0 10px', whiteSpace: 'nowrap' }}>{text}</span>}
      <MuiDivider
        {...props}
        style={{
          maxWidth: '1200px',
          width: '100%',
          height: '0',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'rgba(144, 144, 144, 1.0)'
        }}
      />
    </div>
  )
}

export default Divider
