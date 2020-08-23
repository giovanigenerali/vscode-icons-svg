const { extname } = require("path");
const { getIconForFile } = require("vscode-icons-js");

export function vscodeIconSVG(fileName) {
  const iconFallback = "default_file.svg";

  let iconFileExtension = iconFallback;

  const extension =
    extname(fileName) || fileName.indexOf(".") !== -1
      ? fileName
      : `.${fileName}`;

  iconFileExtension = getIconForFile(extension);

  const url = `https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/${iconFileExtension}`;

  return url;
}
