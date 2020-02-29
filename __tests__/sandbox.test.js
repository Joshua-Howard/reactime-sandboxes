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
});
