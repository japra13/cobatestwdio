const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../page-objects/login_page");

When(/^01_User menuju halaman Login page$/, async () => {});

Then(
  /^01_User masuk ke halaman Login page dan melihat kolom email dan password$/,
  async () => {}
);

When(/^02_User memasukkan (.*) dan (.*)$/, async (email, password) => {
  await LoginPage.inputEmail(email);
  await LoginPage.inputPassword(password);
});

When(/^03_User klik tombol LOGIN$/, async () => {
  await LoginPage.clickLoginBtn();
});

Then(/^03_User dapat pop up Success$/, async () => {
  await LoginPage.popIsExist();
});

When(/^04_User mengklik button OK$/, async () => {
  await LoginPage.closePopUp();
});

Then(/^04_Pop Up hilang$/, async () => {
  return true;
});

// When(/^01_User memasukkan password kurang dari 8 karakter$/, async () => {});

// Then(/^01_User mendapat pesan error$/, async () => {});
