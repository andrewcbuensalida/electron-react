const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test() {
	const driver = await new Builder()
		// The "9515" is the port opened by ChromeDriver.
		.usingServer("http://localhost:9515")
		.withCapabilities({
			"goog:chromeOptions": {
				// Here is the path to your Electron binary.
				binary: "./node_modules/electron/dist/electron.exe",
			},
		})
		.forBrowser("chrome") // note: use .forBrowser('electron') for selenium-webdriver <= 3.6.0
        // comment this out to not go headless
		.setChromeOptions(new chrome.Options().headless())
		.build();

	await driver.get("http://localhost:3000");

	await driver.findElement(By.id("Login_customerButton")).click();

    const alert = await driver.switchTo().alert()
    console.log(`This is alert in `)
    console.log(alert.getText())
    

	console.log(`Login tests finished!`);
	await driver.quit();
}

test();
