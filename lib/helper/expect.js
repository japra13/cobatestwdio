// const platform = browser.capabilities.platformName.toLowerCase();
// const figmaService = require("../services/figma_service")
// const user = require('../helper/user');
// const { step } = require("@wdio/allure-reporter");


// class Expect {
//   async selectorElement(id){
//     return await $(id);
//   }

//   async elementExisting(id, message = Element is existing){
//     const element = await this.selectorElement(id);
//     await step(message, async () => {
//       await expect(element).toBeExisting({message: Expect: element ${id} is Existing \n Receive: element ${id} is not Existing});
//     });  
//     return element;
//   }

//   async elementNotExisting(id, message = Element is not existing){
//     const element = await this.selectorElement(id);
//     await step(message, async () => {
//       await expect(element).not.toBeExisting({message: Expect: element ${id} is not Existing \n Receive: element ${id} is Existing});
//     });
//     return element;
//   }

//   async elementDisplayed(id, message = Element is displayed){
//     const element = await this.selectorElement(id);
//     await step(message, async () => {
//       await expect(element).toBeDisplayed({message: Expect: element ${id} is Displayed \n Receive: element ${id} not Displayed});
//     });
//     return element;
//   }

//   async elementNotDisplayed(id, message = Element is not displayed){
//     const element = await this.selectorElement(id);
//     await step(message, async () => {
//       await expect(element).not.toBeDisplayed({message: Expect: element ${id} is not Displayed \n Receive: element ${id} is Displayed});
//     });
//     return element;
//   }

//   async clickElement(id, message = Element is clicked){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await element.click();
//     });
//   }
//   async doubleClickElement(id, message = 'Element is double-clicked'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await element.click();
//       await driver.pause();
//       await element.click()
//     });
//   }
//   async elementIsVisible(id, message = 'Element is visible'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).not.toBeFocused()
//     });
//   }

//   async elementToHaveText(id, text, message = 'Element to have text'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).toHaveText(text, {message: Expect: element ${id} should have text "${text}" \n Receive: element ${id} have text "${await element.getText}", ignoreCase: true});
//     });
//   }

//   async elementEnable(id, message = 'Element is enabled'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).toBeEnabled({message: Expect: element ${id} should be enabled \n receive: element ${id} is disabled})
//     });
//   }

//   async elementDisabled(id, message = 'Element is disabled'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).toBeDisabled({message: Expect: element ${id} should be disabled \n receive: element ${id} is enabled})
//     });
//   }

//   async elementHaveValue(id, value, message = 'Element to have value'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).toHaveValue(value);
//     });
//   }

//   async elementHaveAttr(id, attr, value, message = 'Element have attribute'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).toHaveAttr(attr, value);
//     });
//   }

//   async elementClickable(id, message = 'Element is clickabled'){
//     const element = this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).toBeClickable();
//     });
//     return element;
//   }

//   async elementToEqual(id, attribute, text, message = 'Element is equal with expected attribute'){
//     const element = this.elementExisting(id);
//     const textAttribute = await element.getAttribute(attribute);
//     await step(message, async () => {
//       await expect(textAttribute).toEqual(text);
//     });
//   }

//   async elementToEqualText(id, text, message = 'Element is equal with expected text'){
//     const element = this.elementExisting(id);
//     const attribute = platform === 'android' ? 'text' : 'value';
//     const textAttribute = await element.getAttribute(attribute);
//     await step(message, async () => {
//       await expect(textAttribute).toEqual(text);
//     });
//   }

//   async elementNotToHaveText(id, text, message = 'Element shpuld not have text'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).not.toHaveText(text, {message: Expect: element ${id} should not have text "${text}" \n Receive: element ${id} have text "${await element.getText}"});
//     });
//   }

//   async checkFullpageFigma(name_key, mismatchPercentage){
//     const step = await user.getTestingStep();
//     await browser.saveScreen(${name_key.name_key})
//     figmaService.figmaList.push(${name_key.name_key})
//     const getSize = await driver.getWindowSize();
//     await figmaService.consoleFigma(name_key, getSize.width)

//     const check = await browser.checkScreen(
//       ${name_key.name_key}
//       );

//     await expect(check).toBeLessThanOrEqual(mismatchPercentage);
//   }

//   async checkElementFigma(element, name_key, mismatchPercentage){
//     const step = await user.getTestingStep();
//     const stepNum = step.split('_')[0]
//     const id = await $(element)
//     const width = await id.getSize('width')
//     await browser.saveElement(await $(element), ${stepNum}_${name_key.name_key});
//     figmaService.figmaList.push(${stepNum}_${name_key.name_key})
//     await figmaService.consoleFigma(stepNum, name_key, width);

//     const check = await browser.checkElement(
//       await $(element),
//       ${stepNum}_${name_key.name_key}
//     );
//     await expect(check).toBeLessThanOrEqual(mismatchPercentage);
//   }

//   async elementContainsText(id, text, message = 'Element contains expected text'){
//     const element = await this.elementExisting(id);
//     await step(message, async () => {
//       await expect(element).toHaveText(expect.stringContaining(text))
//     });
//   }
// }

// module.exports = new Expect();