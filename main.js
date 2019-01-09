const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
	mainWindow = new BrowserWindow({ width: 400, height: 600, show: false });

	mainWindow.loadFile('index.html');

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});
});

app.on('window-all-closed', () => {
	app.quit();
});