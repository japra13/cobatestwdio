class keyDrag {
  DRAG_CONTAINER_BUTTON = `//*[@content-desc="Drag"]`;
  DRAG_DROP_L1 = `//*[@content-desc="drop-l1"]`;
  DRAG_DRAG_L1 = `//*[@content-desc="drag-l1"]`;
  DRAG_DROP_R1 = `//*[@content-desc="drag-r1"]`;
  DRAG_DRAG_R1 = `//*[@content-desc="drag-r1"]`;
  DRAG_DRAG_L2 = `~drag-l2`;
  DRAG_BTN_RETRY = `//*[@content-desc="button-Retry"]`;
  DRAG_SCREEN_CONGRATULATIONS = `~Drag-drop-screen`
}

module.exports = new keyDrag();
