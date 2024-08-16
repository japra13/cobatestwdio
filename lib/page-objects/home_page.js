const homePageKey = require("../../data/key-definitions/home_key");

class keyHomePage {
  async scroll() {
    const receiptContainer = await $(homePageKey.CONTAINER_HOME);
    const startPosition = await receiptContainer.getLocation();
    const endPosition = {
      x: startPosition.x,
      y: startPosition.y,
    };
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          {
            type: "pointerMove",
            duration: 0,
            x: startPosition.x + 500,
            y: startPosition.y + 400,
          },
          { type: "pointerDown", button: 0 },
          {
            type: "pointerMove",
            duration: 1000,
            x: endPosition.x,
            y: endPosition.y - 2000,
          },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }
}

module.exports = new keyHomePage();
