const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const chrome = require('chrome-aws-lambda');

export default async function handler(req, res) {

  console.log(await chrome.executablePath)

  const browser = await puppeteer.launch(
    process.env.NODE_ENV === 'production'
      ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
        defaultViewport: chromium.defaultViewport
      }
      : {
        headless: false,
        args: chrome.args,
        executablePath: await chrome.executablePath
      }
  );

  const page = await browser.newPage();
  page.setUserAgent('Opera/9.80 (J2ME/MIDP; Opera Mini/5.1.21214/28.2725; U; ru) Presto/2.8.119 Version/11.10');
  await page.goto(`https://blaze.com/pt`);

  // let content = await page.content();
  // const $ = cheerio.load(content);
  // $.prototype.exists = function (selector) {
  //   return this.find(selector).length > 0;
  // }


  // await browser.close();

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ id: 1 }))
}