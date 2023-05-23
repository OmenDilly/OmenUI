import React, { FC } from 'react'
import './input.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: FC<InputProps> = ({label, ...props}) => {
  return (
    <label>
      {label}
      <input
        className='input'
        {...props}
      />
    </label>
  )
}

export default Input