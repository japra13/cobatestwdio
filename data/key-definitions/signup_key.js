class keySignup {
  SIGNUP_EMAIL = `//android.widget.EditText[@content-desc="input-email"]`;
  SIGNUP_PASSWORD = `//android.widget.EditText[@content-desc="input-password"]`;
  SIGNUP_CONFIRM_PASSWORD = `//android.widget.EditText[@content-desc="input-repeat-password"]`;
  SIGNUP_BUTTON = `//android.view.ViewGroup[@content-desc="button-SIGN UP"]`;
  SIGNUP_PAGE_POPUP_SIGNEDUP = `//android.widget.TextView[@resource-id="android:id/alertTitle"]`;
  SIGNUP_PAGE_POPUP_MESSAGE = `//android.widget.TextView[@resource-id="android:id/message"]`;
  SIGNUP_BUTTON_OK = `//android.widget.Button[@resource-id="android:id/button1"]`;
  SIGNUP_CONTENT_POPUP = `//android.widget.FrameLayout[@resource-id="android:id/content"]`;
  SIGNUP_TAB = `//android.view.ViewGroup[@content-desc="button-sign-up-container"]`;
  // SIGNUP_CONTAINER_BUTTON = ``;
}

module.exports = new keySignup();
