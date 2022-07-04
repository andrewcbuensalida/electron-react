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
This will yarn build which will build the build folder, then execute electron-builder which will build the dist folder from the based on the build folder.

Make sure yummy bites backend is running too with in yummy-bites-react-node-express-postgress-NOT-TYPESCRIPT
    nodemon

For e2e testing, 
    ./node_modules/.bin/chromedriver
This will start the ChromeDriver. Make sure electron development is running, again with
    npm run electron:start 
In another terminal, 
    npm run e2e-test
to run all tests. To run only one test, 
    nodemon <File name of test>
 
For unit testing,
    npm run unit-test
This will run the script
    "unit-test": "concurrently \"react-scripts test --watchAll --coverage --silent\" \"cd coverage && cd lcov-report && live-server --quiet\"",
Note: have to put --watchAll because if not, coverage will be 0%
--silent is for hiding console.logs of jest
live-server opens the generated coverage html gui, --quiet suppresses logs. Concurrently is to run both react-scripts-test and live-server at the same time. Sometimes have to manually save the test in order for it to watch properly.


////////////////////////////////////////////////////
testing
https://www.electronjs.org/docs/latest/tutorial/automated-testing

//////////////////////////////////////
https://thewebdev.info/2022/03/08/how-to-use-react-router-with-electron/
Have to use HashRouter instead of BrowserRouter for React Router because electron uses file based thing instead of browser...