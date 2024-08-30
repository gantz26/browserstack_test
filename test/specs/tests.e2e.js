import formPage from "../pageobjects/form.page.js";
import swipePage from "../pageobjects/swipe.page.js";
import dragPage from "../pageobjects/drag.page.js";
import { faker } from '@faker-js/faker';
 
describe("Native Demo App", () => {
   it("Verifying the input field entry", async () => {
     await formPage.formsButton.click();
     const text = faker.lorem.word();
     await formPage.inputField.setValue(text);

     await expect(await formPage.inputField).toHaveText(text);
     await expect(await formPage.inputResultField).toHaveText(text);
   });

   it("Verifying the toggle switch", async () => {
     await formPage.formsButton.click();

     await expect(await formPage.switchText).toHaveText("Click to turn the switch ON");
     await formPage.switch.click();
     await expect(await formPage.switchText).toHaveText("Click to turn the switch OFF");
   });

   it("Verifying the drop-down list", async () => {
     await formPage.formsButton.click();

     await formPage.dropDownListArrow.click();
     const item = await formPage.getDropDownListItem();
     const itemText = await item.getText();
     await item.click();

     await expect(await formPage.getDropDownList(itemText)).toHaveText(itemText);
   });

   it("Verifying the swipe of items", async () => {
     await swipePage.swipeButton.click();

     const currentSlide = await swipePage.slideTextContainer;
     await expect(currentSlide).toHaveText("FULLY OPEN SOURCE");
     await swipePage.swipeFromRightToLeft();

     const nextSlide = await swipePage.slideTextContainer;
     await expect(nextSlide).toHaveText("GREAT COMMUNITY");
   });

   it("Verifying the drag and drop", async () => {
     await dragPage.dragButton.click();

     const letters = [ 'l', 'c', 'r' ];
     const numbers = [ '1', '2', '3' ];
     for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        const id = letters[i] + numbers[j];
        const tile = await dragPage.getTile(id);
        const cell = await dragPage.getCell(id);
        await dragPage.dragAndDrop(tile, cell);
      }
    }

    const retryText = await dragPage.retetText;
    await expect(retryText).toBeExisting();
    await expect(retryText).toBeDisplayed();
   });
});


