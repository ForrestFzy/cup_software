'use strict';

var electron = require('electron');
var os = require('os');
var path = require('path');

var prodEnv = {
  NODE_ENV: "production",
  BASE_API: "http://cupback.fcode.ltd/"
};

var devEnv = {
  NODE_ENV: "development",
  BASE_API: "http://cupback.fcode.ltd/"
};

var config = {
  build: {
    DisableDevModeFromKeyboard: true,
    env: prodEnv,
    hotPublishUrl: "",
    hotPublishConfigName: ""
  },
  dev: {
    env: devEnv,
    removeElectronJunk: true,
    port: 1004
  },
  IsUseSysTitle: true,
  BuiltInServerPort: 100421,
  UseStartupChart: false
};

var name = "software-cup";
var description = "A softwarecup production";
var author = "forfziy@163.com";
var version = "0.0.1";
var main = "./dist/electron/main/main.js";
var license = "MIT";
var scripts = {
	dev: "ts-node .runtime/runner.ts",
	build: "cross-env BUILD_TARGET=clean ts-node .runtime/builder.ts && ts-node .runtime/builder.ts && electron-builder",
	"build:win32": "cross-env BUILD_TARGET=clean ts-node .runtime/builder.ts && ts-node .runtime/builder.ts && electron-builder --win  --ia32",
	"build:win64": "cross-env BUILD_TARGET=clean ts-node .runtime/builder.ts && ts-node .runtime/builder.ts && electron-builder --win  --x64",
	"build:mac": "cross-env BUILD_TARGET=clean ts-node .runtime/builder.ts && ts-node .runtime/builder.ts && electron-builder --mac",
	"build:dir": "cross-env BUILD_TARGET=clean ts-node .runtime/builder.ts && ts-node .runtime/builder.ts && electron-builder --dir",
	"build:clean": "cross-env BUILD_TARGET=clean ts-node .runtime/builder.ts",
	"build:web": "cross-env BUILD_TARGET=web ts-node .electron-vite/builder.ts"
};
var devDependencies = {
	"@rollup/plugin-alias": "^3.1.4",
	"@rollup/plugin-commonjs": "^19.0.1",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^13.0.2",
	"@types/node": "^16.4.0",
	"@vitejs/plugin-vue": "^1.2.5",
	"@vue/compiler-sfc": "^3.1.5",
	cfonts: "^2.9.3",
	chalk: "^4.1.1",
	"cross-env": "^7.0.3",
	del: "^6.0.0",
	electron: "^13.1.7",
	"electron-builder": "^22.11.7",
	"electron-devtools-installer": "^3.2.0",
	multispinner: "^0.2.1",
	portfinder: "^1.0.28",
	rollup: "^2.53.3",
	"rollup-plugin-esbuild": "^4.5.0",
	"rollup-plugin-typescript2": "^0.30.0",
	"ts-node": "^10.1.0",
	typescript: "^4.3.5",
	vite: "^2.4.3",
	vue: "^3.1.5",
	"vue-router": "4"
};
var build = {
	asar: true,
	extraFiles: [
	],
	publish: [
		{
			provider: "generic",
			url: "http://www.fcode.ltd/files"
		}
	],
	productName: "software-cup",
	appId: "org.tran.electron",
	directories: {
		output: "build"
	},
	files: [
		"dist/electron/**/*"
	],
	dmg: {
		contents: [
			{
				x: 410,
				y: 150,
				type: "link",
				path: "/Applications"
			},
			{
				x: 130,
				y: 150,
				type: "file"
			}
		]
	},
	mac: {
		icon: "build/icons/icon.icns"
	},
	win: {
		icon: "src/renderer/assets/images/EUS.ico",
		target: "nsis"
	},
	linux: {
		target: "deb",
		icon: "build/icons"
	}
};
var dependencies = {
	"@antv/g2": "^4.2.5",
	"@antv/g2plot": "^2.4.20",
	"@element-plus/icons-vue": "^2.0.4",
	axios: "^0.27.2",
	echarts: "^5.3.2",
	"echarts-gl": "^2.0.9",
	"electron-log": "^4.4.7",
	"electron-updater": "^5.0.1",
	"element-plus": "^2.2.4",
	esbuild: "^0.14.43",
	iview: "^3.5.4",
	"mathjax-vue3": "^1.0.1",
	mitt: "^3.0.0",
	mkdirp: "^1.0.4",
	resolve: "^1.22.0",
	thrift: "^0.16.0",
	"vue-axios": "^3.4.1",
	"vue-echarts": "^6.0.3",
	"window-size": "^1.1.1"
};
var packageInfo = {
	name: name,
	description: description,
	author: author,
	version: version,
	main: main,
	license: license,
	scripts: scripts,
	devDependencies: devDependencies,
	build: build,
	dependencies: dependencies
};

function info() {
  electron.dialog.showMessageBox({
    title: "Info",
    type: "info",
    message: "\u7535\u529B\u5BA2\u6237\u884C\u4E3A\u667A\u80FD\u5206\u6790\u7CFB\u7EDF",
    detail: `Version Info: ${packageInfo.version}
Engine Version\uFF1A${process.versions.v8}
Current System\uFF1A${os.type()} ${os.arch()} ${os.release()}`,
    noLink: true,
    buttons: ["View on Github"]
  });
}
const menu = [
  {
    label: "\u6587\u4EF6(F)",
    submenu: [
      {
        label: "\u65B0\u5EFA\u7A97\u53E3",
        accelerator: "Ctrl+Shift+N",
        click: () => {
          var bjbWin = new electron.BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: { nodeIntegration: true }
          });
          bjbWin.loadFile("../../renderer/index.html");
          bjbWin.on("close", () => {
            bjbWin = null;
          });
        }
      },
      {
        label: "\u6253\u5F00\u6587\u4EF6...",
        accelerator: "Ctrl+O"
      },
      {
        label: "\u6253\u5F00\u6587\u4EF6\u5939...",
        accelerator: "Ctrl+K"
      },
      {
        label: "\u5237\u65B0",
        accelerator: "F5",
        role: "reload"
      }
    ]
  },
  {
    label: "Help",
    submenu: [
      {
        label: "About",
        click: function() {
          info();
        }
      }
    ]
  }
];

const winURL = process.env.NODE_ENV === "development" ? `http://localhost:${process.env.PORT}` : `file://${path.join(__dirname, "..", "renderer", "index.html")}`;
const loadingURL = process.env.NODE_ENV === "development" ? `http://localhost:${process.env.PORT}/preloader.html` : `file://${process.env.__static}/preloader.html`;

class MainInit {
  constructor() {
    this.winURL = "";
    this.preloadURL = "";
    this.loadWindow = null;
    this.mainWindow = null;
    this.winURL = winURL;
    this.preloadURL = loadingURL;
    if (process.env.NODE_ENV === "development") {
      menu.push({
        label: "Developer",
        submenu: [
          {
            label: "Open Devtools",
            accelerator: "Cmd/Ctrl + I",
            role: "toggleDevtools"
          }
        ]
      });
    }
  }
  createMainWindow() {
    this.mainWindow = new electron.BrowserWindow({
      height: 700,
      useContentSize: true,
      width: 1100,
      minWidth: 500,
      show: false,
      frame: config.IsUseSysTitle,
      titleBarStyle: "default",
      icon: "../../renderer/assets/images/EUS.ico",
      webPreferences: {
        contextIsolation: false,
        nodeIntegration: true,
        enableRemoteModule: true,
        webSecurity: false,
        devTools: process.env.NODE_ENV === "development",
        scrollBounce: process.platform === "darwin"
      }
    });
    electron.Menu.buildFromTemplate(menu);
    electron.Menu.setApplicationMenu(null);
    electron.globalShortcut.register("F5", () => {
      this.mainWindow.reload();
    });
    this.mainWindow.loadURL(this.winURL);
    electron.ipcMain.on("LoginIn", () => {
      this.mainWindow.setSize(1401, 800);
      this.mainWindow.center();
    });
    electron.ipcMain.on("LoginOut", () => {
      this.mainWindow.setSize(1100, 700);
      this.mainWindow.center();
    });
    electron.ipcMain.on("download", (evt, args) => {
      var url = args;
      this.mainWindow.webContents.downloadURL(url);
    });
    this.mainWindow.webContents.once("dom-ready", () => {
      this.mainWindow.show();
    });
    if (process.env.NODE_ENV === "development") {
      this.mainWindow.webContents.openDevTools({
        mode: "undocked",
        activate: true
      });
    }
    electron.app.on("render-process-gone", (event, webContents, details) => {
      const message = {
        title: "",
        buttons: [],
        message: ""
      };
      switch (details.reason) {
        case "crashed":
          message.title = "Error";
          message.buttons = ["Restart", "Force Quit"];
          message.message = "The graphical process crashes, whether to perform a soft restart operation?";
          break;
        case "killed":
          message.title = "Error";
          message.buttons = ["Restart", "Force Quit"];
          message.message = "The graphical process is terminated due to unknown reasons. Do you want to perform a soft restart operation?";
          break;
        case "oom":
          message.title = "Error";
          message.buttons = ["Restart", "Force Quit"];
          message.message = "Insufficient memory, does a soft restart release the memory?";
          break;
      }
      electron.dialog.showMessageBox(this.mainWindow, {
        type: "warning",
        title: message.title,
        buttons: message.buttons,
        message: message.message,
        noLink: true
      }).then((res) => {
        if (res.response === 0)
          this.mainWindow.reload();
        else
          this.mainWindow.close();
      });
    });
    this.mainWindow.on("unresponsive", () => {
      electron.dialog.showMessageBox(this.mainWindow, {
        type: "warning",
        title: "Error",
        buttons: ["Restart", "Force Quit"],
        message: "The graphical process is unresponsive, do you wait for it to recover?",
        noLink: true
      }).then((res) => {
        if (res.response === 0)
          this.mainWindow.reload();
        else
          this.mainWindow.close();
      });
    });
    electron.app.on("child-process-gone", (event, details) => {
      const message = {
        title: "",
        buttons: [],
        message: ""
      };
      switch (details.type) {
        case "GPU":
          switch (details.reason) {
            case "crashed":
              message.title = "Error";
              message.buttons = ["Turn off", "Close"];
              message.message = "The hardware acceleration process has crashed. Do you want to turn off hardware acceleration and restart?";
              break;
            case "killed":
              message.title = "Error";
              message.buttons = ["Turn off", "Close"];
              message.message = "The hardware acceleration process was terminated unexpectedly. Do you want to turn off the hardware acceleration and restart it?";
              break;
          }
          break;
      }
      electron.dialog.showMessageBox(this.mainWindow, {
        type: "warning",
        title: message.title,
        buttons: message.buttons,
        message: message.message,
        noLink: true
      }).then((res) => {
        if (res.response === 0) {
          if (details.type === "GPU")
            electron.app.disableHardwareAcceleration();
          this.mainWindow.reload();
        } else {
          this.mainWindow.close();
        }
      });
    });
    this.mainWindow.on("closed", () => {
      this.mainWindow = null;
    });
  }
  loadingWindow(loadingURL2) {
    this.loadWindow = new electron.BrowserWindow({
      width: 600,
      height: 600,
      frame: false,
      skipTaskbar: true,
      transparent: true,
      resizable: false,
      webPreferences: { experimentalFeatures: true }
    });
    this.loadWindow.loadURL(loadingURL2);
    this.loadWindow.show();
    this.loadWindow.setAlwaysOnTop(true);
    setTimeout(() => {
      this.createMainWindow();
    }, 1e3);
  }
  initWindow() {
    {
      return this.createMainWindow();
    }
  }
}

const disableDevModeFromKeyboard = () => {
  if (process.env.NODE_ENV === "production" && config.build.DisableDevModeFromKeyboard) {
    electron.globalShortcut.register("f12", () => {
      console.log("Prevent user turn on console panel!");
    });
  }
};

function onAppReady() {
  new MainInit().initWindow();
  disableDevModeFromKeyboard();
}
electron.app.isReady() ? onAppReady() : electron.app.on("ready", onAppReady);
electron.app.commandLine.appendSwitch("disable-features", "OutOfBlinkCors");
electron.app.on("window-all-closed", () => {
  electron.app.quit();
});
electron.app.on("browser-window-created", () => {
  console.log("Window Created");
});
if (process.defaultApp) {
  if (process.argv.length >= 2) {
    electron.app.removeAsDefaultProtocolClient("electron-vue-template");
    console.log("Cannot be used in the development environment due to the particularity of the framework");
  }
} else {
  electron.app.setAsDefaultProtocolClient("electron-vue-template");
}
