# bottom-trigger
Run the function you set when the page scrolls to bottom.

## Install

```
yarn add bottom-trigger
```

## Usage

```js
import { bottomTrigger } from 'bottom-trigger'

const someButton = document.getElementById('some-button')

bottomTrigger(
  window,
  () => {
    // called when the scroll arrives to the bottom
    someButton.removeAttribute('disabled')
  },
  () => {
    // called when the scroll leaves from the bottom
    someButton.setAttribute('disabled', true)
  },
  {
    offset: 32
  }
)
```

### 1st arg: Element
You need to pass the `Window`, `Document`, or `HTMLElement` as a target area to the first argument.

### 2nd arg: Callback
You can pass the callback which will be called when the scroll goes to the bottom of the area.

### 3rd arg: Callback
You can pass the callback which will be called when the scroll leaves the bottom of the area.

### 4th arg: Options
You can specify the offset from the bottom of the page as `offset` of 4th arg.
Now there is `offset` only on options.

