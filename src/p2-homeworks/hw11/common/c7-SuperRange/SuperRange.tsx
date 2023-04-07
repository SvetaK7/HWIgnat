import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: '200px',
        marginRight: '10px',
        color: '#00CC22;',
        '& .MuiSlider-thumb': {
          height: 18,
          width: 18,
          backgroundColor: '#fff',
          border: '1px solid #00CC22',
        },
        '& .MuiSlider-thumb:after':
          { width: '6px',
            height: '6px',
            top: '50%',
            left: '50%',
            backgroundColor: '#00CC22  '
          }
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
