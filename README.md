https://mmazzarolo.com/blog/2021-08-12-building-an-electron-application-using-create-react-app/

concurrently: Run multiple commands concurrently. We’ll use it to run both the Electron process and the React app in watch mode.
cross-env: Run scripts that set and use environment variables across different platforms. We’ll use it to make our scripts compatible with both Unix and Windows OSes.
electron: The core framework for creating the app.
electron-builder: A complete solution to package and build a ready for distribution Electron app for macOS, Windows, and Linux.
electronmon: Like nodemon, but for the Electron process. Allows watching and reloading our Electron app.
wait-on: Utility to wait for files, ports, sockets, etc. We’ll use it to wait for the React app to be built before we open the Electron app (while developing).

/////////////////////////////////////////////////////
workflow
When developing, this will live reload,
    npm run electron:start 
When finished,
    npm electron:package:win