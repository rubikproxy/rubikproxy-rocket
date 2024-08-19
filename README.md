# RubikProxy

RubikProxy's is a VS Code extension that adds a status bar item for quick access to the RubikProxy webpage and other useful links.

## Features

- Adds a status bar item labeled "RubikProxy" with a rocket icon.
- Clicking the status bar item opens a menu to select between the RubikProxy portfolio or GitHub page.
- Configurable status bar color through settings.
- Commands to update the status bar color, toggle visibility, and refresh state.

### Commands

- **RubikProxy: Show Menu** (`rubikproxy.showMenu`): Opens a menu to choose between visiting the RubikProxy portfolio or GitHub page.
- **RubikProxy: Update Status Bar Color** (`rubikproxy.updateColor`): Updates the color of the status bar item based on user settings.
- **RubikProxy: Toggle Status Bar Visibility** (`rubikproxy.toggleVisibility`): Toggles the visibility of the status bar item.
- **RubikProxy: Refresh Status Bar State** (`rubikproxy.refreshState`): Refreshes the status bar item's state.

> Tip: You can add an animation or screenshot of your extension in action to make it more visually appealing.

## Requirements

This extension does not have any specific requirements or dependencies.

## Extension Settings

RubikProxy adds the following settings:

- `rubikproxy.statusBarColor`: The color of the status bar item. Default is `orange`.
- `rubikproxy.webpageUrl`: The URL of the webpage to open when clicking the status bar item. Default is `https://vinsanjay.me`.

## Known Issues

There are no known issues at this time.

## Release Notes

### 0.0.2

- Added a menu for quick access to RubikProxy portfolio and GitHub page.
- Introduced new commands: `toggleVisibility` and `refreshState`.
- Added settings for status bar color and webpage URL.
- Improved the initial activation event to ensure the extension activates on VS Code startup.

### 0.0.1

- Initial release of RubikProxy.
  - Added status bar item for quick access to the RubikProxy webpage.

---

## Following Extension Guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For More Information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
