class keyForms {
  FORMS_FIELD_TEXT_INPUT = `//*[@content-desc="text-input"]`;
  FORMS_TEXT_RESULT = `//*[@content-desc="text-input"]`;
  FORMS_SWITCH = `//*[@content-desc="switch"]`;
  FORMS_SWITCH_TEXT = `//*[@content-desc="switch-text"]`;
  FORMS_DROPDOWN = `//*[@content-desc="Dropdown"]`;
  FORMS_DROPDOWN_SELECT = (text) =>
    `//*[@resource-id = 'android:id/text1' and @index='${text}']`;
  // FORMS_DROPDOWN_WDIO = `//*[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]`;
  // FORMS_DROPDOWN_APPIUM = `//*[@resource-id="android:id/text1" and @text="Appium is awesome"]`;
  // FORMS_DROPDOWN_THIS_APP = `//*[@resource-id="android:id/text1" and @text="This app is awesome"]`;
  FORMS_ACTIVE_BUTTON = `//*[@content-desc="button-Active"]`;
  FORMS_CONTENT_POPUP = `//*[@resource-id="android:id/content"]`;
  FORMS_ALERT_TITLE_POPUP = `//*[@resource-id="android:id/alertTitle"]`;
  FORMS_MESSAGE_POPUP = `//*[@resource-id="android:id/message"]`;
  FORMS_CONTENT_ASKMELATER_BUTTON = `//*[@resource-id="android:id/button3"]`;
  FORMS_CONTENT_CANCEL_BUTTON = `//*[@resource-id="android:id/button2"]`;
  FORMS_CONTENT_OK_BUTTON = `//*[@resource-id="android:id/button1"]`;
  FORMS_CONTAINER_BUTTON = `//*[@content-desc="Forms"]`;
  FORMS_CONTENT_ACTIVE_BUTTON = (text) =>
    `//*[@resource-id='${text}' and @index='${text}']`;
}

module.exports = new keyForms();
