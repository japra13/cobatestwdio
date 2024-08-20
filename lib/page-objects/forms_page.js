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

  async formsContainer() {
    const formsbtncontainer = await $(keyForms.FORMS_CONTAINER_BUTTON);
    await formsbtncontainer.click();
  }

  async inputTextInField(textfield) {
    const field = await $(keyForms.FORMS_FIELD_TEXT_INPUT);
    await field.click();

    await this.pressKeyboard(textfield);
  }

  async textResult() {
    // cara 1
    const messageElement = await $(keyForms.FORMS_FIELD_TEXT_INPUT).getText();
    const msgElement = await $(keyForms.FORMS_TEXT_RESULT).getText();

    expect(messageElement).toHaveText(msgElement);

    //cara 2
    // let
  }

  async buttonSwitch() {
    const btnswitch = await $(keyForms.FORMS_SWITCH);

    await btnswitch.click();
  }

  async textSwitch() {
    //Cara 1
    const txtSwitchOn = await $(keyForms.FORMS_SWITCH_TEXT);
    const beforeSwitch = await txtSwitchOn.getText();
    const afterSwitch = await txtSwitchOn.getText();

    await this.buttonSwitch();

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

  async dropDownWDIO(index) {
    //use param utk memanggil, paramnya index
    const drpDown1 = await $(keyForms.FORMS_DROPDOWN_SELECT(index));

    // const drpdwn1 =
    await drpDown1.click();
  }

  // async dropDownAPPI() {
  //   const drpDown2 = await $(keyForms.FORMS_DROPDOWN_APPIUM);
  //   await drpDown2.click();
  // }

  // async dropDownTHISAPP() {
  //   const drpDown3 = await $(keyForms.FORMS_DROPDOWN_THIS_APP);
  //   await drpDown3.click();
  //   // console.log("");
  // }

  // async dropDownCOBA() {
  //   if (elements.length === 0) {
  //     throw new Error("Nope");
  //   }

  //   const randomIndex = Math.floor(Math.random() * 4);
  //   const randomElement = elements[randomIndex];

  //   await randomElement.click();

  //   const text = await randomElement.getText();
  //   console.log(`Elemen yang dipilih: ${text}`);
  // }

  async actvBtn() {
    let btnActive = await $(keyForms.FORMS_ACTIVE_BUTTON);
    await btnActive.click();
  }
  async 
}

module.exports = new FormsPage();
