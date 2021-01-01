# DaHuJI/vetmanager-url-getter
<img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/DaHuJI/vetmanager-url-getter/master"> <img alt="npm" src="https://img.shields.io/npm/v/vetmanager-url-getter"> <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/vetmanager-url-getter">

[npm page](https://www.npmjs.com/package/vetmanager-url-getter)

Simple package for getting full url by clinic domain name

### install
With [npm](https://www.npmjs.com/) do:

`npm install vetmanager-url-getter`


### Usage:
```
const vm_url = require('vetmanager-url-getter');
console.log(vm_url('devtr6')); // output: https://devtr6.vetmanager2.ru
```
or
```
<script src="https://cdn.jsdelivr.net/gh/DaHuJI/vetmanager-url-getter/for_browser/vm-url-getter.min.js"></script>
<script>alert(getVmUrl('ua')) //output: https://ua.vetmanager.ru</script>
```
