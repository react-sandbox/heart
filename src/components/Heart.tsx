import React from 'react'
import { HeartProps } from '../types/Heart'
import './styles/Heart.css'

export default function Heart({
  width,
  height,
  active,
  onClick,
  activeColor = '#ff0000',
  inactiveColor = '#121212',
  strokeWidth = 30,
  disabled = false,
  ariaLabel = 'Like',
  className,
  style
}: HeartProps) {
  const handleClick = () => {
    if (!disabled) {
      onClick()
    }
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled && e.key === 'Enter') {
      onClick()
    }
  }

  const divProps = {
    'data-sandbox-heart': true,
    role: 'button',
    'aria-label': ariaLabel,
    'aria-pressed': active,
    tabIndex: disabled ? -1 : 0,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    className,
    style: {
      cursor: disabled ? 'default' : 'pointer',
      width,
      height,
      ...style
    }
  }

  const svgProps = {
    viewBox: '0 0 612 792',
    role: 'img',
    width,
    height,
    fill: active ? activeColor : 'transparent',
    stroke: active ? activeColor : inactiveColor,
    strokeWidth,
    className: `${active ? 'animate' : ''}`
  }

  return (
    <div {...divProps}>
      <svg {...svgProps}>
        <path
          d="
            M611.721 288.299
            c-2.258-42.176-20.114-81.782-50.287-111.524
            c-30.557-30.119-70.43-46.708-112.27-46.708
            c-62.267 0-107.396 49.233-131.641 75.684
            c-3.743 4.085-8.13 8.87-11.183 11.79
            c-2.444-2.529-5.756-6.3-8.803-9.768
            c-22.142-25.222-68.223-77.704-134.688-77.704
            c-41.84 0-81.711 16.588-112.268 46.708
            C20.408 206.517 2.547 246.121.29 288.299
            c-2.248 42.107 8.521 78.746 34.92 118.803
            c20.888 31.701 75.961 93.605 133.927 150.543
            c29.856 29.326 57.336 54.18 79.466 71.873
            c35.936 28.729 49.7 32.413 57.674 32.413
            c7.476 0 21.614-3.352 57.895-32.332
            c22.079-17.637 49.463-42.451 79.194-71.76
            c57.445-56.63 112.318-118.617 133.443-148.743
            c17.767-27.024 37.791-64.945 34.912-118.797
            z
          "
        />
      </svg>
    </div>
  )
}
