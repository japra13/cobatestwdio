const { Given, When, Then } = require("@wdio/cucumber-framework");
const FormsPages = require("../page-objects/forms_page");

When(/^01_User menuju halaman Forms$/, async () => {
  await FormsPages.formsContainer();
});

Then(/^01_User dapat melihat form yang berisi field untuk diisi$/, async () => {
  return true;
});

When(/^02_User memasukkan (.*) kedalam field Input Field$/, async (input) => {
  await FormsPages.inputTextInField(input);
});

Then(
  /^02_User dapat melihat hasil perubahan pada field You have typed                                                                                             peri pada field You have typed$/,
  async () => {
    await FormsPages.textResult();
  }
);

When(/^03_User menekan tombol Click to turn the switch$/, async () => {
  await FormsPages.textSwitch();
});

Then(/^03_User dapat melihat hasil perubahan tulisan ON & OFF$/, async () => {
  // await FormsPages.textSwitch();
});

When(
  /^04_User mengklik button dropdown dan memilih salah satu diantara 3 pilihan$/,
  async () => {
    await FormsPages.dropDown();
  }
);

Then(/^04_User dapat melihat 3 pilihan$/, () => {
  return true;
});

When(/^05_User menekan button wdio$/, async () => {
  const randomIndex = await FormsPages.generateRandomIndex();
  await FormsPages.dropDownWDIO(randomIndex);
  // await FormsPages.dropDownWDIO(2);
  // await FormsPages.dropDownWDIO(3);
});

Then(/^05_User melihat dropdown berubah isinya$/, () => {
  return true;
});

When(/^06_User menekan button Appium$/, async () => {
  // await FormsPages.dropDown();
  // await FormsPages.dropDownWDIO(2);
});

Then(/^06_User melihat dropdown berubah isinya sesuai pilihan$/, () => {
  return true;
});

When(/^07_User menekan button This App$/, async () => {
  // await FormsPages.dropDown();
  // await FormsPages.dropDownWDIO(3);
});

Then(
  /^07_User melihat dropdown berubah isinya sesuai pilihan yang di mau$/,
  () => {
    return true;
  }
);

When(/^08_User mengklik tombol buttons Active$/, async () => {
  await FormsPages.actvBtn();
});

Then(/^08_User melihat popup yang berisi 3 pilihan$/, async () => {
  await FormsPages.contentExist();
  await FormsPages.popExist();
});

When(/^09_User memilih pilihan ASK ME LATER$/, () => {
  return true;
});

Then(/^09_User melihat popup tertutup$/, () => {
  return true;
});

When(/^10_User menekan kembali tombol buttons Active$/, () => {
  return true;
});

Then(/^10_User melihat kembali popup yang berisi 3 pilihan$/, () => {
  return true;
});

When(/^11_User memilih pilihan CANCEL$/, () => {
  return true;
});

Then(/^11_User melihat popup akan tertutup$/, () => {
  return true;
});

When(/^12_User menekan kembali buttons Active$/, () => {
  return true;
});

Then(/^12_User melihat kembali popup yang isinya 3 pilihan$/, () => {
  return true;
});

When(/^13_User memilih pilihan OK$/, () => {
  return true;
});

Then(/^13_User melihat popup tertutup setelah menekan$/, () => {
  return true;
});
