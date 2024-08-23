const keySwipe = require("../../data/key-definitions/swipe_key");

class swipePage {
  async swipeContainer() {
    const swipeBtnContainer = await $(keySwipe.SWIPE_CONTAINER_BUTTON);
    await swipeBtnContainer.click();
  }

  async swipe(x1, x2, y1, y2, duration1, duration2) {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: duration1, x: x1, y: y1 },
          { type: "pointerDown", button: 0 },
          { type: "pointerMove", duration: duration2, x: x2, y: y2 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  //   async swipeVertically() {
  //     const { startX, startY, endX, endY } = keySwipe.SWIPE_VERTICAL_COORDINATES;
  //     await swipe(startX, startY, endX, endY);
  //   }

  //   async swipeHorizontally() {
  //     const { startX, startY, endX, endY } =
  //       keySwipe.SWIPE_HORIZONTAL_COORDINATES;
  //     await swipe(startX, startY, endX, endY);
  //   }

  //   async swipe(startX, startY, endX, endY) {
  //     await driver.touchPerform([
  //       {
  //         action: "press",
  //         options: {
  //           x: startX,
  //           y: startY,
  //         },
  //       },
  //       {
  //         action: "wait",
  //         options: {
  //           ms: 1000,
  //         },
  //       },
  //       {
  //         action: "moveTo",
  //         options: {
  //           x: endX,
  //           y: endY,
  //         },
  //       },

  //       { action: "release" },
  //     ]);
  //   }
  //   const(driver) {
  //     this.driver = driver;
  //   }

  //   async swpUp() {
  //     const swipeUp = await $(keySwipe.SWIPE_TITLE);
  //     await swipeUp.click();
  //   }

  //   async swipeVertical() {
  //     const { height } = driver.getWindowSize();

  //     // when u need to put finger
  //     const anchorPercentage = 50;
  //     const startPointPercentage = 90;
  //     const endPointPercentage = 100;

  //     //height of screen
  //     const anchor = (height = anchorPercentage / 100);
  //     const startPoint = (height = startPointPercentage / 100);
  //     const endPoint = (height = endPointPercentage / 100);

  //     //Press on startPoint, wait 2s, moveTo endPoint, release
  //     await this.driver.touchPerform([
  //       {
  //         action: "press",
  //         options: {
  //           x: anchor,
  //           y: startPoint,
  //         },
  //       },
  //       {
  //         action: "wait",
  //         options: {
  //           ms: 5000,
  //         },
  //       },
  //       {
  //         action: "moveTo",
  //         options: {
  //           x: anchor,
  //           y: endPoint,
  //         },
  //       },
  //       {
  //         action: "release",
  //         options: {},
  //       },
  //     ]);
  //   }
}

module.exports = new swipePage();
