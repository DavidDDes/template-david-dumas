import {app, BrowserWindow, ipcMain} from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../preload/preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        }
    })

    mainWindow.loadURL('http://localhost:5173'); // URL de l'application Vue.js
}

app.whenReady().then(createWindow);

// Gestionnaires IPC pour la communication entre le processus principal et le processus de rendu
// Ajoutez ici vos gestionnaires personnalisés
