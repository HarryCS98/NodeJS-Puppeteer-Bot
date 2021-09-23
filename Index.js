const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768});
    await page.goto('http://ushop.com/');

    const [login_button] = await page.$x("//*[@id='navbarColor01']/ul[2]/li[2]/a");
    await  login_button.click();

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const [login_input] = await page.$x("//*[@id='email']");
    await  login_input.type("###Email###");

    const [password_input] = await page.$x("//*[@id='password']");
    await  password_input.type("###Password###");

    const [login_submit] = await page.$x("//*[@id='app']/main/div/div/div/div/div[2]/form/div[4]/div/button");
    await  login_submit.click();

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const [AirCooling_Dropdown] = await page.$x("/html/body/div/nav[2]/div/ul/li[2]/a");
    await  AirCooling_Dropdown.click();

    const [AirCoolers_Dropdown] = await page.$x("/html/body/div/nav[2]/div/ul/li[2]/div/a");
    await  AirCoolers_Dropdown.click();

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const [product_page] = await page.$x("//*[@id='app']/main/div/div/div/div[1]/div[1]/div/h4/a");
    await  product_page.click();

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const [addtobasket_button] = await page.$x("/html/body/div/main/div/div[1]/div[2]/div/div[4]/form/ul/li[3]/button");
    await  addtobasket_button.click();

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const [basket_navigate] = await page.$x("//*[@id='navbarColor01']/ul[2]/li[1]/a");
    await  basket_navigate.click();

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const [checkout_navigate] = await page.$x("//*[@id='app']/main/div/div/div/table/tbody/tr[5]/td[5]/a");
    await  checkout_navigate.click();

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    const [firstname_input] = await page.$x("//*[@id='firstName']");
    await  firstname_input.type("harry");

    const [lastname_input] = await page.$x("//*[@id='lastName']");
    await  lastname_input.type("Surname");

    const [email_input] = await page.$x("//*[@id='email']");
    await  email_input.type("email@gmail.com");

    const [address_input] = await page.$x("//*[@id='address']");
    await  address_input.type("10 Spencer Road");

    const [postcode_input] = await page.$x("//*[@id='zip']");
    await  postcode_input.type("NN1 3LR");

    const [ccname_input] = await page.$x("//*[@id='cc-name']");
    await  ccname_input.type("Mr H lastname");

    const [ccnumber_input] = await page.$x("//*[@id='cc-number']");
    await  ccnumber_input.type("389120739213");

    const [ccexpiry_input] = await page.$x("//*[@id='cc-expiration']");
    await  ccexpiry_input.type("04/28");

    const [cv2_input] = await page.$x("//*[@id='cc-cvv']");
    await  cv2_input.type("902");

   const [paynow_navigate] = await page.$x("//*[@id='app']/main/div/div/div/div/form/a");
    await  paynow_navigate.click();


})();
