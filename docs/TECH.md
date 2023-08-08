
## Various problems building system

### node issues

Had to use nvm and use node version 18.16.0 npx crashed without it. In particular, couldn't run npx

### react 18

Change in the way react root is created

```
import {createRoot} from 'react-dom/client';
```

Here the curly brackets are _Essential_, otherwise webpack gets confused about what to pick up, and ends up thinking that the function create-root doesn't exist. Very hard to debug


### react-router


## Material design library selection

#### Material-Design MUI

Hard to understand, configure and change

#### material-design-lite

Can't update colours expect by downloading a specific colour combo to override default

Built using sass, but can't recompile except by cloning

Simple, might be sufficient

#### mdbreact

Bootstrap variant, uses ! important same as bootstrap

#### Google

Limited selection of components. Slightly strange customization

