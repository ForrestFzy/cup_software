/**
 * Here is the place to define the menu, please check for details
 * Link: https://electronjs.org/docs/api/menu
 */

import { dialog, BrowserWindow } from 'electron'
import { type, arch, release } from 'os'
import packageInfo from '../../../package.json'

function info() {
  dialog.showMessageBox({
    title: 'Info',
    type: 'info',
    message: '电力客户行为智能分析系统',
    detail: `Version Info: ${packageInfo.version}\nEngine Version：${process.versions.v8
      }\nCurrent System：${type()} ${arch()} ${release()}`,
    noLink: true,
    buttons: ['View on Github'],
  })
}

const menu = [
  {
    label: '文件(F)',
    submenu: [
      {
        label: '新建窗口',
        accelerator: 'Ctrl+Shift+N',
        click: () => {
          var bjbWin = new BrowserWindow({
            width: 500, height: 500,
            webPreferences: { nodeIntegration: true }
          })
          bjbWin.loadFile('../../renderer/index.html')
          bjbWin.on('close', () => {
            bjbWin = null
          })
        }
      },
      {
        label: '打开文件...',
        accelerator: 'Ctrl+O',
      },
      {
        label: '打开文件夹...',
        accelerator: 'Ctrl+K',
      },
      {
        label: '刷新',
        accelerator: 'F5',
        role: 'reload'
      },
    ],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About',
        click: function () {
          info()
        },
      },
    ],
  },
]
// const { app, Menu } = require('electron')
// const menu1 = Menu.buildFromTemplate(menu)
// Menu.setApplicationMenu(menu1)
export default menu
