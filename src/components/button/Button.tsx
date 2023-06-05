import type { ButtonType } from './Button.types'

const Button: ButtonType = ({ buttonRef, children, variant, ...props }) => {
  return (
    <button ref={buttonRef} {...props}>
      {children}
    </button>
  )
}

export default Button
