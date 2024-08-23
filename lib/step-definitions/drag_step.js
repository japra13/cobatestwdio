const { When, Then } = require("@wdio/cucumber-framework");
const dragPage = require("../page-objects/drag_page");

When(/^01_User menuju halaman Drag$/, () => {
  return true;
});

Then(/^01_User masuk di halaman Drag$/, () => {
  return true;
});
