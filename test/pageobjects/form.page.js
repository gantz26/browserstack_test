import Page from "./page.js";

class FormPage extends Page {
  get inputField() {
    return $("~text-input");
  }

  get inputResultField() {
    return $("~input-text-result");
  }

  get switch() {
    return $("~switch");
  }

  get switchText() {
    return $("~switch-text");
  }

  async getDropDownList(text) {
    return $(`//android.widget.EditText[@text="${text}"]`);
  }

  get dropDownListArrow() {
    return $("//android.widget.TextView[@text=\"󰅀\"]");
  }

  async getDropDownListItem() {
    const items = await $$('//android.widget.CheckedTextView[@resource-id="android:id/text1"]');
    const count = items.length;
    const index = Math.floor(Math.random() * count);
    return items[index];
  }
}

export default new FormPage();