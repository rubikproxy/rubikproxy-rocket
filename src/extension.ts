import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Status Bar Item with dynamic updates
    let brand = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 99999999999999);
    brand.text = `$(rocket) RubikProxy`;
    brand.tooltip = 'RubikProxy - Click to open menu';
    brand.command = 'rubikproxy.showMenu';
    brand.color = vscode.workspace.getConfiguration('rubikproxy').get('statusBarColor', 'orange');
    brand.show();

    // Command to show the menu
    let showMenuCommand = vscode.commands.registerCommand('rubikproxy.showMenu', async () => {
        const options = [
            { label: 'Open Portfolio', description: 'Open Vinsanjay Website' },
            { label: 'Open GitHub', description: 'Open RubikProxy GitHub' }
        ];

        const selectedOption = await vscode.window.showQuickPick(options, {
            placeHolder: 'Select an option to open'
        });

        if (selectedOption) {
            if (selectedOption.label === 'Open Portfolio') {
                vscode.env.openExternal(vscode.Uri.parse('https://vinsanjay.me'));
            } else if (selectedOption.label === 'Open GitHub') {
                vscode.env.openExternal(vscode.Uri.parse('https://github.com/rubikproxy'));
            }
        }
    });

    // Command to update status bar color
    let updateColorCommand = vscode.commands.registerCommand('rubikproxy.updateColor', () => {
        const newColor = vscode.workspace.getConfiguration('rubikproxy').get('statusBarColor', 'orange');
        brand.color = newColor;
        brand.show();
        vscode.window.showInformationMessage(`Status bar color updated to ${newColor}`);
    });

    // Command to toggle status bar visibility
    let toggleVisibilityCommand = vscode.commands.registerCommand('rubikproxy.toggleVisibility', () => {
        if (brand.text) {
            brand.hide();
            brand.text = '';
        } else {
            brand.text = `$(rocket) RubikProxy`;
            brand.show();
        }
    });

    // Command to refresh status bar state
    let refreshStateCommand = vscode.commands.registerCommand('rubikproxy.refreshState', () => {
        brand.color = vscode.workspace.getConfiguration('rubikproxy').get('statusBarColor', 'orange');
        brand.show();
        vscode.window.showInformationMessage('Status bar state refreshed');
    });

    // Register settings change listener
    vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('rubikproxy.statusBarColor')) {
            brand.color = vscode.workspace.getConfiguration('rubikproxy').get('statusBarColor', 'orange');
            brand.show();
        }
    });

    context.subscriptions.push(
        brand,
        showMenuCommand,
        updateColorCommand,
        toggleVisibilityCommand,
        refreshStateCommand
    );
}

export function deactivate() {}
