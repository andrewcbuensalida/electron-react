const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("assert");

//This test is unstable, sometimes can't find the increment button, sometimes it can.
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

	//click on customer login button
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

	const adminNavbarLinks = await driver.findElements(
		By.className("AdminNavbar_link")
	);
	//Make sure there's at least 1 admin navbar link
	assert(adminNavbarLinks.length > 0);

	//click on orders navbar link
	await driver.findElement(By.id("AdminNavbar_link_orders")).click();

	//click on orders navbar link
	await driver.findElement(By.id("AddOrder_div")).click();

	const firstNameInput = await driver.findElement(
		By.id("AddOrder_firstName")
	);
	//Type in first name
	await firstNameInput.sendKeys("Ringo");
	//check if input contains what you just typed
	assert.strictEqual(await firstNameInput.getAttribute("value"), "Ringo");

	//find first item
	const firstItem = await driver.findElement(By.id(`AddOrder_table`));

	//click increment button on first item. Sometimes, it can't find this element.    
	await firstItem.findElement(By.xpath(`//*[text()='+']`)).click();

	//check if item quantity is now 1
	assert.strictEqual(
		(await firstItem.findElement(By.css("strong")).getText())[0],
		"1"
	);

	await driver.quit();
	console.log(`AddOrderTest passed!`);
}

test();
