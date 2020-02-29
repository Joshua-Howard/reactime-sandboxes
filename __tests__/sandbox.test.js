/* eslint-disable no-undef */
import 'babel-polyfill';

const puppeteer = require('puppeteer');

const SERVER = require('../Backend/server');

const APP = 'http://localhost:3000';

let browser;
let page;

describe('Sandbox Tests', () => {
  beforeAll(async () => {
    await SERVER;

    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
      // headless: false
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await SERVER.close();

    await browser.close();
  });

  describe('Sandbox Launch', () => {
    it('Sandboxes Load Successfully', async () => {
      await page.goto(APP);
      const title = await page.$eval('title', el => el.innerHTML);
      expect(title).toBe('Reactime Sandboxes');

      // await page.screenshot({ path: 'example.png' }); // Add a screenshot
    });
  });

  describe('UseState Tests', () => {
    it('The parent count should be 1 after the button is clicked 2 times', async () => {
      await page.$eval('#increaseButton', el => el.click());
      await page.$eval('#increaseButton', el => el.click());

      const lastSnapshotJSON = await page.$eval(
        '#lastSnapshot',
        el => el.innerHTML
      );

      const lastSnapshot = await JSON.parse(lastSnapshotJSON);

      // The snapshot is 1 event behind currently; if this is changed then the expected value would be 2
      // console.log(JSON.parse(document.querySelector('#lastSnapshot').innerHTML).children[0].children[1].state.count)
      expect(lastSnapshot.children[0].children[1].state.count).toBe(1);
    });

    it('After the both button is clicked 2 times, the first child count should be 1 and the second child count should be 999', async () => {
      await page.$eval('#childBothButton', el => el.click());
      await page.$eval('#childBothButton', el => el.click());

      const lastSnapshotJSON = await page.$eval(
        '#lastSnapshot',
        el => el.innerHTML
      );

      const lastSnapshot = await JSON.parse(lastSnapshotJSON);

      // console.log(JSON.parse(document.querySelector('#lastSnapshot').innerHTML).children[0].children[1].children[0].state.count2)
      expect(
        lastSnapshot.children[0].children[1].children[0].state.count2
      ).toBe(1);

      expect(
        lastSnapshot.children[0].children[1].children[0].state.count3
      ).toBe(999);
    });
  });
});
