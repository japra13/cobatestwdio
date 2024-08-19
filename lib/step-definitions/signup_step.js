const { Given, When, Then } = require("@wdio/cucumber-framework");
const SignUpPage = require("../page-objects/signup_page");

When(/^01_User kearah halaman Login page$/, async () => {
  await SignUpPage.clickSignupContainer();
});

Then(/^01_User masuk ke halaman Login page dan melihat Form$/, async () => {
  return true;
});

When(/^02_User klik button Sign Up$/, async () => {
  await SignUpPage.clickTabSignUp();
});

Then(/^02_User masuk ke halaman SignUp page dan melihat Form$/, async () => {
  return true;
});

When(
  /^03_User mengisi (.*), (.*), dan (.*) dengan data yang valid$/,
  async (email, password, confpass) => {
    await SignUpPage.inputEmail(email);
    await SignUpPage.inputPassword(password);
    await SignUpPage.inputConfPassword(confpass);
  }
);

When(/^04_User mengklik button SignUp$/, async () => {
  await SignUpPage.clickLoginBtn();
});

Then(/^04_User melihat popup SignedUp!$/, async () => {
  await SignUpPage.contentIsExist();
  await SignUpPage.popIsExist();
});

When(/^05_User menekan button OK$/, async () => {
  await SignUpPage.closePopUp();
});

Then(/^05_Pop Up menghilang$/, async () => {
  return true;
});
