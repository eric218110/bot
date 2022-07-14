// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import puppeteer from "puppeteer";

export default async function handler(req, res) {
  const usernameBlaze = 'blazeappbottest1995@gmail.com'
  const passwordBlaze = 'Wghd$85a'

  const baseSite = "https://blaze.com/pt/"
  const loginPage = 'https://blaze.com/pt/?modal=auth&tab=login'
  const gameCrashUrl = 'https://blaze.com/pt/games/crash'

  const nameInputUserName = 'username'
  const nameInputPassword = 'password'

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto(loginPage);

  await page.type(`input[name=${nameInputUserName}]`, usernameBlaze)
  await page.type(`input[name=${nameInputPassword}]`, passwordBlaze)
  await page.keyboard.press('Enter')

  await page.waitForNavigation()

  await page.goto(gameCrashUrl)

  console.log("Login realizado com sucesso")
  browser.close()

  res.status(200).json({ name: 'John Doe' })
}
