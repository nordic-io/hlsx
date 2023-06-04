import type { ButtonType } from './Button.types'

const Button: ButtonType = ({ buttonRef, children, ...props }) => {
  return (
    <button ref={buttonRef} {...props}>
      {children}
    </button>
  )
}

export default Button
