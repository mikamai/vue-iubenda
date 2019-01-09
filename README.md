# VueIubenda
Vue plugin to install Iubenda's Cookies Solution javascript.

## Installation
`yarn add vue-iubenda` or `npm install vue-iubenda`.

## Example Usage
```javascript
import VueIubenda from 'vue-iubenda';

Vue.use(VueIubenda, {
  lang: 'en',
  siteId: XXXXXX,           // Iubenda site id
  cookiePolicyId: XXXXXXX,  // Iubenda cookiePolicy id
});
```