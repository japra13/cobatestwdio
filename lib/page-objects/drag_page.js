const keyDrag = require("../../data/key-definitions/drag_key");

class dragPage {
  async dragContainer() {
    const dragBtnContainer = await $(keyDrag.DRAG_CONTAINER_BUTTON);
    await dragBtnContainer.click();
  }

  //AMBIL BERDASARKAN SCREEN {
  async dragAndDropL1() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 429, y: 1030 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 190, y: 429 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async dragAndDropR1() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 330, y: 935 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 525, y: 429 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async dragAndDropC1() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 490, y: 910 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 360, y: 429 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async dragAndDropR2() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 175, y: 1030 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 520, y: 600 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async dragAndDropL2() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 100, y: 900 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 200, y: 600 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async dragAndDropC2() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 290, y: 1040 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 350, y: 600 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async dragAndDropR3() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 230, y: 900 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 520, y: 765 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async dragAndDropL3() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 550, y: 1040 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 195, y: 760 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async dragAndDropC3() {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          { type: "pointerMove", duration: 0, x: 620, y: 910 },
          { type: "pointerDown", button: 0, duration: 0 },
          { type: "pointerMove", duration: 1000, x: 360, y: 760 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }
  //}

  async screenDragCongrate() {
    const screenCongrate = await $(keyDrag.DRAG_SCREEN_CONGRATULATIONS);
    await screenCongrate.waitForDisplayed();
  }

  async retryBtnDrag() {
    const btnRetry = await $(keyDrag.DRAG_BTN_RETRY);
    await btnRetry.click();
  }
}

// Perform the drag and drop action using actions API
// await driver.performActions([
//     {
//         type: 'pointer',
//         id: 'finger1',
//         parameters: { pointerType: 'touch' },
//         actions: [
//             { type: 'pointerMove', origin: elementDragL1, duration: 0, x: 429, y: 1030 },
//             { type: 'pointerDown', button: 0 },
//             { type: 'pause', duration: 100 }, // optional pause
//             { type: 'pointerMove', origin: elementDropL1, duration: 7000, x: 190, y: 429 },
//             { type: 'pointerUp', button: 0 }
//         ]
//     }
// ]);

//   async swipeTnC() {
//     const elementDragR1 = await $(keyDrag.DRAG_DRAG_R1);
//     const elementDropR1 = await $(keyDrag.DRAG_DROP_R1);

//     const receiptContainer = await $(QrPayment.TNC_PAGE.CONTAINER);
//     const startPosition = await elementDragR1.getLocation();
//     const endPosition = {
//       x: startPosition.x,
//       y: startPosition.y,
//     };
//     await driver.performActions([
//       {
//         type: "pointer",
//         id: "finger1",
//         parameters: { pointerType: "touch" },
//         actions: [
//           {
//             type: "pointerMove",
//             duration: 0,
//             x: startPosition.x + 500,
//             y: startPosition.y + 400,
//           },
//           { type: "pointerDown", button: 0 },
//           {
//             type: "pointerMove",
//             duration: 1000,
//             x: endPosition.x,
//             y: endPosition.y - 2000,
//           },
//           { type: "pointerUp", button: 0 },
//         ],
//       },
//     ]);
//   }

// Perform the press-and-hold action on the source element
// await driver.touchAction([
//   { action: "press", x: 429, y: 1030 },
//   { action: "wait", ms: 5000 }, // Adjust hold time as needed
//   // Move to the target element while holding
//   { action: "moveTo", x: 190, y: 429 },
//   { action: "release" },// Release the touch action
// ]);

// const location = await elementDragL1.getLocation();

// // Calculate start and end coordinates for the swipe
// const startX = 429 + size.width - 10; // Start from the right side, 10 pixels from the edge
// const endX = 109 + size.width / 2; // End at the left side, 10 pixels from the edge
// const y = location.y + size.height / 2; // Swipe at the vertical middle of the element

// // Calculate start and end coordinates for the vertical swipe (refresh)
// const verticalStartY = location.y + 10;
// const verticalEndY = location.y + size.height - 10; // Adjusted for a downward swipe
// const verticalX = location.x + size.width / 2;

// await driver.touchAction([
//   { action: "press", x: 429, y: 1030 },
//   { action: "wait", ms: 1000 }, // You can adjust the duration of the swipe
//   { action: "moveTo", x: 190, y: 429 }, // Move to the left
//   "release",
// ]);

//   async dragAndDropItem() {
//     const elementDragL1 = await $(keyDrag.DRAG_DRAG_L1);
//     const elementDropL1 = await $(keyDrag.DRAG_DROP_L1);

//     await browser.performActions([
//       {
//         type: "pointer",
//         id: "mouse",
//         parameters: { pointerType: "mouse" },
//         actions: [
//             {type: 'pointerMove', origin: elementDragL1, duration: 0, x: 429, y: 1030},
//             {type: 'pointerDown', button: 0},
//             {type: 'pause', duration: 1000},
//             {type: 'pointerMove', origin: elementDropL1, duration: 5000, x: 190, y: 429},
//             {type: 'pointerUp', button: 0}

//         ]
//       },
//     ]);+
//     await browser.releaseAction()
//   }

//   async verifyItemDrop(){
//     const elementDropL1 = await $(keyDrag.DRAG_DROP_L1)
//     expect(elementDropL1).toBeDisplayed()
//   }

//   async dragDropItem2() {
//     const element = await $(TransferVaKey.BTN_SAVED_FAVORIT_TRANSFER_VA);
//     const size = await element.getSize();
//     const location = await element.getLocation();
//     const startX = location.x + size.width + 100;
//     const endX = location.x - size.width - 100;
//     browser.touchAction([
//       { action: "press", x: startX, y: 385 },
//       { action: "wait", ms: 1000 },
//       { action: "moveTo", x: endX, y: 385 },
//       "release",
//     ]);
//     console.log("selesai scroll kanan");
//   }
//}

module.exports = new dragPage();

//touchAction dan performAction
