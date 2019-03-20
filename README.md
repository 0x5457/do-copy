# do-copy

> 在现代浏览器中执行复制命令

## Install

```shell
npm i do-copy -S
# or yarn add do-copy
```

## Use

```js
import doCopy from "do-copy";

// 检查浏览器是否支持复制命令
let isSupported = doCopy.isSupported();

button.onclick = () => {
  let ok = doCopy.copyText("copy this text!");
  console.log(ok);
};

button.onclick = () => {
  let ok = doCopy.copyFromElem("body");
  console.log(ok);
};

button.onclick = () => {
  let ok = doCopy.copyFromElem(document.querySelector("div"));
  console.log(ok);
};
```

## Features

API 简洁

## License

[MIT License](http://zenorocha.mit-license.org/) © Tao Wei
