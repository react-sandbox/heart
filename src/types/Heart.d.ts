export interface HeartProps {
  width: number
  height: number
  active: boolean
  onClick: () => void
  activeColor?: string
  inactiveColor?: string
  strokeWidth?: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}
