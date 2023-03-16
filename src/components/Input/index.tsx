import { InputHTMLAttributes, FocusEvent } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  handleOnBlur: (event: FocusEvent<HTMLInputElement>) => void
}
export function Input({ name, handleOnBlur, ...rest }: InputProps) {
  const { register } = useFormContext()

  return (
    <div>
      <input
        {...rest}
        {...register(name, {
          onBlur: (event) => handleOnBlur(event),
        })}
      />
    </div>
  )
}
