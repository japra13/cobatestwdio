const keyLogin = require("../../data/key-definitions/login_key");
const keyEvent = require("../helper/keyevent");

class LoginPage {
  // get emailField() {
  //   return $(keyLogin.EMAIL);
  // }

  // get passwordField() {
  //   return $(keyLogin.PASSWORD);
  // }

  // get loginButton() {
  //   return $(keyLogin.BUTTON_LOGIN);
  // }

  // async login(email, password) {
  //   await this.emailField.setValue(email);
  //   await this.passwordField.setValue(password);
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

  async clickLoginContainer() {
    const lgnContainer = await $(keyLogin.LOGIN_CONTAINER_BUTTON);

    await lgnContainer.click();
  }

  async inputEmail(email) {
    const gmail = await $(keyLogin.EMAIL);
    await gmail.click();

    await this.pressKeyboard(email); //isi pesan didlm param
  }

  async inputPassword(password) {
    const pw = await $(keyLogin.PASSWORD);
    await pw.click();

    await this.pressKeyboard(password);
  }

  async clickLoginBtn() {
    const lgnBtn = await $(keyLogin.BUTTON_LOGIN);
    // await lgnBtn.waitForClickable();

    await lgnBtn.click();
  }
  async popIsExist() {
    const messageElement = await $(keyLogin.LOGIN_PAGE_POPUP_SUCCESS).getText(); //manggil elemen yug dituju lalu pake funct gettext.
    // await messageElement.waitForDisplayed();

    expect(messageElement).toBe("Success"); //toBe: utk compare expectednya apakah sm/ga
  }

  async closePopUp() {
    const clsPopup = await $(keyLogin.LOGIN_BUTTON_OK);

    await clsPopup.click();
  }
}
module.exports = new LoginPage();

//async dijalankan seri, makanya ada await utk menunggu
//sync dijalankan paralel
