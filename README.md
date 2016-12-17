Base Electron and React app
-----------------------
(Start bundle for Electron + Webpack + React application)
___
**Run:**
```npm install```
```npm run build && npm run start```
___
**Build standalone app:**
Uncommented this code in *webpack.config.js*:
```
new ElectronPackager({
          dir: __dirname, // destination path build app
          arch: "x64", // ia32, x64, armv7l, all
          platform: "win32", // linux, win32, darwin, mas, all
          ignore: "node_modules/electron*"
        })
```
