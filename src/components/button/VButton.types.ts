export interface ButtonProps {
  disabled?: boolean
  label?: string
  size?: ButtonSize
  type?: ButtonType
  variant?: ButtonVariant
}

export interface ButtonEmits {
  (event: 'click'): void
}

export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonType = 'button' | 'reset' | 'submit'
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
