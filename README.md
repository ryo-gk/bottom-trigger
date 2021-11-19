# bottom-trigger
Run the function you set when the page scrolls to bottom.

## Install

```
yarn add bottom-trigger
```

## Usage

```js
import { bottomTrigger } from 'bottom-trigger'

let canClick = false

bottomTrigger(window, () => {
  canClick = true
})
```

