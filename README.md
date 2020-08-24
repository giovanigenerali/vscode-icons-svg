# VSCode Icons SVG

Get the icon url in SVG given the file extension.

## Demo

https://vscode-icons-svg.netlify.app

## Install

https://www.jsdelivr.com/package/gh/giovanigenerali/vscode-icons-svg

```html
<script src="https://cdn.jsdelivr.net/gh/giovanigenerali/vscode-icons-svg@1/dist/vscode-icons-svg.min.js"></script>
```

## How to use

```js
vscodeIconSVG("file.jsx");

// https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_reactjs.svg
```

```js
const icon = document.createElement("IMG");
icon.src = vscodeIconSVG("file.jsx");
icon.alt = "Icon file.jsx";
icon.loading = "lazy";
icon.setAttribute("style", "width: 100px; height: 100px;");

document.body.appendChild(icon);
```

## Dependency

- [vscode-icons-js](https://github.com/dderevjanik/vscode-icons-js)

## Author

- [@giovanigenerali](https://github.com/giovanigenerali)
