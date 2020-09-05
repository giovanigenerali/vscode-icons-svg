# VSCode Icons SVG

Get the icon url in SVG given the file extension.

## Demo

https://vscode-icons-svg.netlify.app

![demo](https://user-images.githubusercontent.com/41435/91000932-bd333800-e5a0-11ea-90e4-613b7be88bc8.png)

## Install

https://www.jsdelivr.com/package/npm/vscode-icons-svg

```html
<script src="https://cdn.jsdelivr.net/npm/vscode-icons-svg@latest/dist/vscode-icons-svg.min.js"></script>
```

## How to use

Call the method ```get``` passing the file with extension, it's accept ```.jsx```, ```file.jsx``` or ```http://URL/file.jsx```
```js
vscodeIconsSVG.get("file.jsx");
```
Will return the svg icon url
```
https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_reactjs.svg
```

Complete example:
```js
const icon = document.createElement("IMG");
icon.src = vscodeIconsSVG.get("file.jsx");
icon.alt = "Icon file.jsx";
icon.loading = "lazy";
icon.setAttribute("style", "width: 100px; height: 100px;");

document.body.appendChild(icon);
```

## Dependency

- [vscode-icons-js](https://github.com/dderevjanik/vscode-icons-js)

## Author

- [@giovanigenerali](https://github.com/giovanigenerali)
