# Bootstrap A React App With Parcel

1. Run `mkdir react-parcel-boilerplate`.
2. Include `.editorconfig` file.
3. `cd` into the folder and run `npm init -y`.
4. Run `npm i react react-dom --save`.
5. Run `npm i parcel-bundler --save-dev`.
6. Run `touch index.{html,js}`.
7. Open the folder in your text editor.

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React App With Parcel</title>
</head>
<body>
  <div id="root"></div>
  <script src="./index.js"></script>
</body>
</html>
```

**index.js**

```js
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => <h1>Hello {name}</h1>;

render(
  <Hello name='World' />,
  document.getElementById('root')
);
```

8. Create a **start script** for development: `"start": "parcel index.html"`
9. Run `npm start` to kick off the dev-server. The app is built with server running at port `1234`.

---


10. Run `npm i styled-components --save` and  `npm i babel-plugin-styled-components --save-dev`.
11. Create a `.babelrc` file in the root of the folder and put the below code in it.

```json
{
  "plugins": [
    "babel-plugin-styled-components"
  ]
}
```

12. Edit `index.js`

```js
import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const Greeting = styled.h1`
  text-align: center;
  color: firebrick;
`;
const Hello = ({ name }) => <Greeting>Hello {name}</Greeting>;

render(
  <Hello name='World' />,
  document.getElementById('root')
);
```

13. Run `npm start` to kick off the dev-server with the components being styled.
14. Create a **build script** for production: `"build": "parcel build index.html --public-url ./"`.
15. Run `npm run build`. The app will be generated into the `/dist` folder.
16. `cd` into the `dist/` folder and run `npx serve` to kick off an HTTP server.

---

**For development**

```bash
npm start
```

**For production**
```bash
npm run build
```
