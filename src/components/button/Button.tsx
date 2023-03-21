import { PropsWithChildren } from 'react'

const Button = ({ children, ...props }: PropsWithChildren) => {
  return <button {...props}>{children}</button>
}

export default Button
