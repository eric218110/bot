import chromium from "chrome-aws-lambda"

export default async function handler(req, res) {
  const usernameBlaze = 'blazeappbottest1995@gmail.com'
  const passwordBlaze = 'Wghd$85a'

  const baseSite = "https://blaze.com/pt/"
  const loginPage = 'https://blaze.com/pt/?modal=auth&tab=login'
  const gameCrashUrl = 'https://blaze.com/pt/games/crash'

  const nameInputUserName = 'username'
  const nameInputPassword = 'password'

  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
  });

  const page = await browser.newPage();
  await page.goto(loginPage);
  console.log(`Into page ${loginPage}`)

  await page.type(`input[name=${nameInputUserName}]`, usernameBlaze)
  await page.type(`input[name=${nameInputPassword}]`, passwordBlaze)
  await page.keyboard.press('Enter')
  console.log("Login realizado com sucesso")

  await page.waitForNavigation()

  await page.goto(gameCrashUrl)
  console.log(`Into page ${gameCrashUrl}`)

  browser.close()

  res.status(200).json({ name: 'John Doe' })
}
