export interface ButtonProps {
  disabled?: boolean
  label?: string
  size?: ButtonSize
  variant?: ButtonVariant
}

export interface ButtonEmits {
  (event: 'click'): void
}

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
export type ButtonSize = 'sm' | 'md' | 'lg'
