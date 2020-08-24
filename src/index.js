const { extname } = require("path");
const { getIconForFile } = require("vscode-icons-js");

export function get(fileName) {
  const sourceUrl =
    "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/";
  const iconFallback = "default_file.svg";
  let iconFileExtension = iconFallback;

  if (fileName) {
    const file = fileName.toLowerCase();
    const extension =
      extname(file) || file.indexOf(".") !== -1 ? file : `.${file}`;

    iconFileExtension = getIconForFile(extension);
  }

  return `${sourceUrl}${iconFileExtension}`;
}
