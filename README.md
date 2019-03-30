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
  // 复制普通文本
  let ok = doCopy.copyHtml("copy this text!");
  console.log(ok);
};

button.onclick = () => {
  // 复制 html 格式文本
  let ok = doCopy.copyHtml("<div>123<img src="https://www.baidu.com/img/bd_logo1.png" /></div>");
  console.log(ok);
};

button.onclick = () => {
  // 复制html元素
  let ok = doCopy.copyFromElem("body");
  console.log(ok);
};

button.onclick = () => {
  // 复制html元素
  let ok = doCopy.copyFromElem(document.querySelector("div"));
  console.log(ok);
};
```

## Features

API 简洁

## License

[MIT License](http://zenorocha.mit-license.org/) © Tao Wei
