class keyLogin {
  EMAIL = `//android.widget.EditText[@content-desc="input-email"]`;
  PASSWORD = `//android.widget.EditText[@content-desc="input-password"]`;
  BUTTON_LOGIN = `//android.view.ViewGroup[@content-desc="button-LOGIN"]`;
  LOGIN_PAGE_POPUP_SUCCESS = `//android.widget.TextView[@resource-id="android:id/alertTitle"]`;
  LOGIN_PAGE_POPUP_MESSAGE = `//android.widget.TextView[@resource-id="android:id/message"]`;
  LOGIN_BUTTON_OK = `//android.widget.Button[@resource-id="android:id/button1"]`;
}

module.exports = new keyLogin();
