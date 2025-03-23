const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('React App with Selenium', () => {
  let driver;

  beforeAll(async () => {
    // إعداد برنامج تشغيل Chrome
    driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
    // قم بتشغيل تطبيق React محليًا
    await driver.get('http://localhost:3000');
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should allow user to input text and display message', async () => {
    // ابحث عن حقل الإدخال وزر الإرسال
    const input = await driver.findElement(By.css('input[type="text"]'));
    const submitButton = await driver.findElement(By.css('button'));
    const messageElement = await driver.findElement(By.css('p'));

    // أدخل نصًا في حقل الإدخال وانقر فوق زر الإرسال
    await input.sendKeys('Test Input');
    await submitButton.click();

    // تحقق من ظهور الرسالة الصحيحة
    await driver.wait(until.elementTextContains(messageElement, 'You entered: Test Input'), 5000);
  });
});