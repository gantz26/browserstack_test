import Page from "./page.js";

class SwipePage extends Page {
  get slideTextContainer() {
    return $('(//android.view.ViewGroup[@content-desc="slideTextContainer"])//android.widget.TextView');
  }

  async swipeFromRightToLeft() {
    const { width, height } = await driver.getWindowRect();
    const startXCoord = width * 0.8;
    const endXCoord = width * 0.2;
    const yCoord = height * 0.5;

    await driver.touchPerform([
      { action: "press", options: { x: startXCoord, y: yCoord } },
      { action: "wait", options: { ms: 1000 } },
      { action: "moveTo", options: { x: endXCoord, y: yCoord } },
      { action: "release" }
    ]);
  }
}

export default new SwipePage();