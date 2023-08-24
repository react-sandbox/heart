export interface HeartProps {
  active: boolean
  onClick: () => void
  width?: number
  height?: number
  activeColor?: string
  inActiveColor?: string
  strokeWidth?: number
  className?: string
  style?: React.CSSProperties
}
