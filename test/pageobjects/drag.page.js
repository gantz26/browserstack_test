import Page from "./page.js";

class DragPage extends Page {
  get retetText() {
    return $('//android.widget.TextView[@text="You made it, click retry if you want to try it again."]');
  }

  async getTile(id) {
    return $(`//android.view.ViewGroup[@content-desc="${'drag-' + id}"]/android.widget.ImageView`);
  }

  async getCell(id) {
    return $(`//android.view.ViewGroup[@content-desc="${'drop-' + id}"]/android.view.ViewGroup`);
  }

  async dragAndDrop(tile, cell) {
    const tileLocation = await tile.getLocation();
    const tileSize = await tile.getSize();
    const targetLocation = await cell.getLocation();
    const targetSize = await cell.getSize();

    const startX = tileLocation.x + tileSize.width / 2;
    const startY = tileLocation.y + tileSize.height / 2;
    const endX = targetLocation.x + targetSize.width / 2;
    const endY = targetLocation.y + targetSize.height / 2;

     await driver.touchPerform([
      { action: 'press', options: { x: startX, y: startY } },
      { action: 'wait', options: { ms: 500 } },
      { action: 'moveTo', options: { x: endX, y: endY } },
      { action: 'release' }
    ]);
  }
}

export default new DragPage();