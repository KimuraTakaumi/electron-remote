'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', function () {
    createWindow();
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

exports.exampleRemote = function () {
    console.log('main process');
};

exports.exampleRemoteArgsText = function (text) {
    console.log('main process example remote method : ' + text);
};

exports.exampleRemoteArgsFunc = function (func) {
    func();
};

