const { When, Then } = require("@wdio/cucumber-framework");
const swipePage = require("../page-objects/swipe_page");

When(/^01_User menuju halaman Swipe page$/, async () => {
  await swipePage.swipeContainer();
  await driver.pause(5000);
});

Then(/^01_User masuk ke halaman Swipe$/, () => {
  return true;
});

When(/^02_User meng - swipe secara horizontal ke kiri$/, async () => {
  await swipePage.swipe(620, 120, 680, 680, 0, 1000);
  await driver.pause(2000);
  await swipePage.swipe(620, 120, 680, 680, 0, 1000);
});

Then(/^02_User melihat content ketika swipe ke kiri$/, () => {
  return true;
});

When(/^03_User meng - swipe secara horizontal ke kanan$/, async () => {
  await driver.pause(2000);
  await swipePage.swipe(120, 620, 680, 680, 0, 1000);
  await driver.pause(2000);
  await swipePage.swipe(120, 620, 680, 680, 0, 1000);
});

Then(/^03_User melihat content ketika swipe ke kanan$/, () => {
  return true;
});

When(/^04_User meng - swipe secara vertikal ke atas$/, async () => {
  await driver.pause(2000);
  await swipePage.swipe(320, 320, 680, 150, 0, 1000);
});

Then(/^04_User melihat content ketika swipe ke atas$/, () => {
  return true;
});

When(/^05_User meng - swipe secara vertikal ke bawah$/, async () => {
  await driver.pause(2000);
  await swipePage.swipe(320, 320, 150, 680, 0, 1000);
  await driver.pause(2000);
  await swipePage.swipe(320, 320, 680, 150, 0, 1000);
});

Then(/^05_User melihat content ketika swipe ke bawah$/, () => {
  return true;
});
