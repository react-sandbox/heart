<h1 align="center">
  <a href="https://www.npmjs.com/package/@react-sandbox/heart">@react-sandbox/heart</a>
</h1>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/react-sandbox/heart/playwright.yml" alt="Build status" />
  <img src="https://img.shields.io/badge/dependencies-0-brightgreen" alt="Dependencies" />
  <img src="https://img.shields.io/bundlephobia/minzip/@react-sandbox/heart?color=%234ba0f6" alt="Build size" />
  <img src="https://img.shields.io/npm/dt/@react-sandbox/heart?color=%234ba0f6" alt="Package downloads" />
</p>

<p align="center">
  <img src="example.gif" alt="Example" />
</p>

<p align="center">❤️ Animated heart button.</p>

## Usage

### Install

Install the `@react-sandbox/heart` package:

```
npm install @react-sandbox/heart
```

### Import

Import the `Heart` component:

```tsx
import React, { useState } from 'react'
import Heart from '@react-sandbox/heart'

function App() {
  const [active, setActive] = useState(false)

  return (
    <div>
      <Heart
        width={24}
        height={24}
        active={active}
        onClick={() => setActive(!active)}
      />
    </div>
  )
}
```

### Props

| Prop            | Type                  | Default      | Description             |
| --------------- | --------------------- | ------------ | ----------------------- |
| `width`         | `number`              | **required** | Heart width             |
| `height`        | `number`              | **required** | Heart height            |
| `active`        | `boolean`             | **required** | Heart fill & animation  |
| `onClick`       | `function`            | **required** | Click callback function |
| `activeColor`   | `string`              | `'#ff0000'`  | Active color            |
| `inactiveColor` | `string`              | `'#121212'`  | Inactive color          |
| `strokeWidth`   | `number`              | `30`         | Outline stroke width    |
| `disabled`      | `boolean`             | `false`      | Disable usage           |
| `ariaLabel`     | `string`              | `'Like'`     | Accessibility label     |
| `className`     | `string`              | `-`          | CSS classes             |
| `style`         | `React.CSSProperties` | `-`          | CSS styles              |

## Development

### Local

```
pnpm install
pnpm dev
```

### Tests

```
pnpm test
```

### Example

Inside `test/`:

```
pnpm install
pnpm dev
```

## License

MIT
