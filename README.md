<h1 align="center">
  <a href="https://www.npmjs.com/package/@react-sandbox/heart">@react-sandbox/heart</a>
</h1>

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
| `active`        | `boolean`             | **required** | Heart activity          |
| `onClick`       | `function`            | **required** | Click callback function |
| `activeColor`   | `string`              | `'#ff0000'`  | Active color            |
| `inactiveColor` | `string`              | `'#121212'`  | Inactive color          |
| `strokeWidth`   | `number`              | `30`         | Outline stroke width    |
| `disabled`      | `boolean`             | `false`      | Disable button usage    |
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
