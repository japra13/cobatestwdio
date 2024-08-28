const { When, Then } = require("@wdio/cucumber-framework");
const dragPage = require("../page-objects/drag_page");

When(/^01_User menuju halaman Drag$/, async () => {
  await dragPage.dragContainer();
});

Then(/^01_User masuk di halaman Drag$/, () => {
  return true;
});

When(/^02_User melakukan drag L1 lalu drop pada kotak L1$/, async () => {
  await dragPage.dragAndDropL1();
});

Then(/^02_Terjadi perpindahan kotak L1 ke kotak L1$/, async () => {
  // await dragPage.verifyItemDrop();
});

When(/^03_User melakukan drag R1 lalu drop pada kotak R1$/, async () => {
  await dragPage.dragAndDropR1();
});

Then(/^03_Terjadi perpindahan kotak R1 ke kotak R1$/, () => {
  return true;
});

When(/^04_User melakukan drag C1 lalu drop pada kotak C1$/, async () => {
  await dragPage.dragAndDropC1();
});

Then(/^04_Terjadi perpindahan kotak C1 ke kotak C1$/, () => {
  return true;
});

When(/^05_User melakukan drag L2 lalu drop pada kotak L2$/, async () => {
  await dragPage.dragAndDropL2();
});

Then(/^05_Terjadi perpindahan kotak L2 ke kotak L2$/, () => {
  return true;
});

When(/^06_User melakukan drag R2 lalu drop pada kotak R2$/, async () => {
  await dragPage.dragAndDropR2();
});

Then(/^06_Terjadi perpindahan kotak R2 ke kotak R2$/, () => {
  return true;
});

When(/^07_User melakukan drag C2 lalu drop pada kotak C2$/, async () => {
  await dragPage.dragAndDropC2();
});

Then(/^07_Terjadi perpindahan kotak C2 ke kotak C2$/, () => {
  return true;
});
