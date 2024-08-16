class keyForms {
  FORMS_FIELD_TEXT_INPUT = `//android.widget.EditText[@content-desc="text-input"]`;
  FORMS_TEXT_RESULT = `//android.widget.EditText[@content-desc="text-input"]`;
  FORMS_SWITCH = `//android.widget.Switch[@content-desc="switch"]`;
  FORMS_SWITCH_TEXT = `//android.widget.TextView[@content-desc="switch-text"]`;
  FORMS_DROPDOWN = `//android.view.ViewGroup[@content-desc="Dropdown"]`;
  FORMS_DROPDOWN_SELECT = `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Select an item..."]`;
  FORMS_DROPDOWN_WDIO = `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]`;
  FORMS_DROPDOWN_APPIUM = `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]`;
  FORMS_DROPDOWN_THIS_APP = `//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]`;
  FORMS_ACTIVE_BUTTON = `//android.view.ViewGroup[@content-desc="button-Active"]`;
  FORMS_CONTENT_POPUP = `//android.widget.FrameLayout[@resource-id="android:id/content"]`;
  FORMS_CONTENT_ASKMELATER_BUTTON = `//android.widget.Button[@resource-id="android:id/button3"]`;
  FORMS_CONTENT_CANCEL_BUTTON = `//android.widget.Button[@resource-id="android:id/button2"]`;
  FORMS_CONTENT_OK_BUTTON = `//android.widget.Button[@resource-id="android:id/button1"]`;
  FORMS_CONTAINER_BUTTON = `//android.view.View[@content-desc="Forms"]`;
}

module.exports = new keyForms();
