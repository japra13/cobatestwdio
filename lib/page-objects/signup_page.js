const keySignup = require("../../data/key-definitions/signup_key");
const keyEvent = require("../helper/keyevent");

class SignupPage {
  // get emailField() {
  //   return $(keySignup.SIGNUP_EMAIL);
  // }

  // get passwordField() {
  //   return $(keySignup.SIGNUP_PASSWORD);
  // }

  // get confirmPasswordField() {
  //   return $(keySignup.SIGNUP_CONFIRM_PASSWORD);
  // }

  // get loginButton() {
  //   return $(keySignup.SIGNUP_LOGIN_BUTTON);
  // }

  // async signup(email, password, confpassword) {
  //   await this.emailField.setValue(email);
  //   await this.passwordField.setValue(password);
  //   await this.confirmPasswordField.setValue(confpassword);
  //   await this.loginButton.click();
  // }

  async pressKeyboard(character, tempData = "") {
    console.log(character);
    const chars = character.toString().split("");

    if (character === "delete") {
      console.log("Goes in here");
      await driver.pressKeyCode(keyEvent["delete"]);
    } else {
      for (const char of chars) {
        if (char === " ") {
          await driver.pressKeyCode(keyEvent["space"]);
        } else if (char >= "A" && char <= "Z") {
          await driver.pressKeyCode(keyEvent[char.toLowerCase()], 1);
        } else {
          await driver.pressKeyCode(keyEvent[char]);
        }
        await driver.pause(300);
      }
    }
    const keyboardIsExist = await driver.isKeyboardShown();
    if (keyboardIsExist === true) {
      await driver.back();
    }
  }

  async clickSignupContainer() {
    const signupContainer = await $(keySignup.SIGNUP_CONTAINER_BUTTON);

    await signupContainer.click();
  }

  async clickTabSignUp() {
    const clicktab = await $(keySignup.SIGNUP_TAB);

    await clicktab.click();
  }

  async inputEmail(email) {
    const gmail = await $(keySignup.SIGNUP_EMAIL);
    await gmail.click();

    await this.pressKeyboard(email);
  }

  async inputPassword(password) {
    const pw = await $(keySignup.SIGNUP_PASSWORD);
    await pw.click();

    await this.pressKeyboard(password);
  }

  async inputConfPassword(confpass) {
    const confpw = await $(keySignup.SIGNUP_CONFIRM_PASSWORD);
    await confpw.click();

    await this.pressKeyboard(confpass);
  }

  async clickLoginBtn() {
    const lgnBtn = await $(keySignup.SIGNUP_BUTTON);

    await lgnBtn.click();
  }

  async contentIsExist() {
    const content = await $(keySignup.SIGNUP_CONTENT_POPUP);

    await content.isExisting();
  }
  async popIsExist() {
    const messageElement = await $(
      keySignup.SIGNUP_PAGE_POPUP_SIGNEDUP
    ).getText();
    const msgElement = await $(keySignup.SIGNUP_PAGE_POPUP_MESSAGE).getText();

    expect(messageElement).toBe("Signed Up!");
    expect(msgElement).toBe("You successfully signed up!");
  }

  async closePopUp() {
    const clsPopUp = await $(keySignup.SIGNUP_BUTTON_OK);

    await clsPopUp.click();
  }
}

module.exports = new SignupPage();
