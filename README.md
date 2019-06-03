## React Base Project

### Set Up

From the project directory, you can run:
`npm install` to install all dependencies
`npm start` to launch the app.


// For drastic difference in device UI, use `react-device-detect` package

```js
import {isMobile, isTablet} from 'react-device-detect';

  {
      isMobile &&
      <MobileNav
          title={title}
          toggleHandler={() => toggleNav()}
      />
  }
```

### Development
Understand the project structure and write the code in the appropriate directory
For each feature you work on, create a separate branch.

[Read this article on git](https://chiamakaikeanyi.dev/working-with-git/)

### Using Images

- Render as svg

```js
   import Icon from '../Icon';
   <Icon name="logo" />
```
or
```js
   import Logo from '../Logo';
   <Logo />
```
