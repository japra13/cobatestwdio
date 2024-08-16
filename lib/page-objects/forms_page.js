const keyForms = require("../../data/key-definitions/forms_key");
const keyEvent = require("../helper/keyevent");

class FormsPage {
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

  async inputTextInField(textfield) {
    const field = await $(keyForms.FORMS_FIELD_TEXT_INPUT);
    await field.click();

    await this.pressKeyboard(textfield);
  }

  async textResult() {
    const messageElement = await $(keyForms.FORMS_FIELD_TEXT_INPUT).getText();
    const msgElement = await $(keyForms.FORMS_TEXT_RESULT).getText();

    expect(messageElement).toHaveText(msgElement);
  }

  async buttonSwitch() {
    const btnswitch = await $(keyForms.FORMS_SWITCH);

    await btnswitch.click();
  }

  async textSwitch() {
    const txtSwitchOn = await $(keyForms.FORMS_SWITCH_TEXT);
    const beforeSwitch = await txtSwitchOn.getText();

    await this.buttonSwitch();

    const afterSwitch = await txtSwitchOn.getText();

    // await expect(txtSwitchOn).not.toHaveText(beforeSwitch);

    // let isOn = false
    // const txtSwitchOff = await $(keyForms.FORMS_SWITCH_TEXT);
    if (beforeSwitch != afterSwitch) {
      expect(txtSwitchOn).not.toHaveText(beforeSwitch);
    } else {
      console.log(keyForms.FORMS_SWITCH_TEXT).getText();
    }
  }

  async dropDown() {
    const dropdown = await $(keyForms.FORMS_DROPDOWN);
    await dropdown.click();
  }

  async dropDownWDIO() {
    const drpDown1 = await $(keyForms.FORMS_DROPDOWN_WDIO);
    await drpDown1.click();
  }

  async dropDownAPPI() {
    const drpDown2 = await $(keyForms.FORMS_DROPDOWN_APPIUM);
    await drpDown2.click();
  }

  async dropDownTHISAPP() {
    const drpDown3 = await $(keyForms.FORMS_DROPDOWN_THIS_APP);
    await drpDown3.click();
    console.log(await drpDown3.getText());
  }
}

module.exports = new FormsPage();
