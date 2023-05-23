import React, { FC } from 'react'
import './button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  
}

const Button: FC<ButtonProps> = ({children, ...props}) => {
  return (
    <button
      className='btn'
      {...props}
    >
      {children}
    </button>
  )
}

export default Button