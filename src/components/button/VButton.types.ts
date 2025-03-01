export interface ButtonProps {
  label?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

export interface ButtonEmits {
  (event: 'click'): void
}

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
export type ButtonSize = 'sm' | 'md' | 'lg'
