const { extname } = require("path");
const { getIconForFile } = require("vscode-icons-js");

export function vscodeIconSVG(fileName) {
  const sourceUrl =
    "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/";
  const iconFallback = "default_file.svg";
  let iconFileExtension = iconFallback;

  if (fileName) {
    const extension =
      extname(fileName) || fileName.indexOf(".") !== -1
        ? fileName
        : `.${fileName}`;

    iconFileExtension = getIconForFile(extension);
  }

  return `${sourceUrl}${iconFileExtension}`;
}
