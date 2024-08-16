const { When, Then } = require("@wdio/cucumber-framework");
const HomeScreen = require("../page-objects/home_page");

When(/^01_User membuka aplikasi$/, async () => {});

Then(/^01_Muncul halaman Home aplikasi$/, async () => {});

When(/^02_User explore Home Page$/, async () => {
  await HomeScreen.scroll();
});

Then(/^02_Aplikasi terexplore$/, async () => {});
