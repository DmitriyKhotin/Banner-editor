import React, {useState} from 'react'

export interface Input {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const useInput = (someValue: string): Input => {
  const [value, setValue] = useState<string>(someValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange
  }
}