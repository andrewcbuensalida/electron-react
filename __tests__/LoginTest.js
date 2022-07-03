const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");

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

	// loading up the app. For some reason the background color is blue.
	await driver.get("http://localhost:3000");

	//click on customer login button. xpath is probably better.
	await driver.findElement(By.id("Login_customerButton")).click();

	const alert = await driver.switchTo().alert();
	//checking if alert text is correct
	assert.strictEqual(
		await alert.getText(),
		`This page hasn't been created yet`
	);

	//accept the alert. For some reason, this doesn't close the alert.
	await alert.accept();

	//click on admin login button
	await driver.findElement(By.id("Login_adminButton")).click();

	//select navbar links
	const adminNavbarLinks = await driver.findElements(By.className('AdminNavbar_link'))
	//Make sure there's at least 1 admin navbar link
	assert(adminNavbarLinks.length > 0)

	await driver.quit();
	console.log(`LoginTest passed!`);
}

test();
