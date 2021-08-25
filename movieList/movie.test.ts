import { beforeAll, afterAll, test } from "@jest/globals"

import{ Builder, Capabilities, By} from "selenium-webdriver"

require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build() 

beforeAll(async ()=> { 
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async ()=> { 
    await driver.quit()

})

test('Functionality', async () => {
    let searchBar = await driver.findElement(By.xpath('//input'))
    await searchBar.sendKeys('The Wolf on WallStreet\n')
    await driver.sleep(3000)

   await driver.findElement(By.xpath('//li/span')).click()
   await driver.sleep(3000)

   await driver.findElement(By.xpath('//li/span')).click()
   await driver.sleep(3000)

   await driver.findElement(By.xpath('//li/button')).click()
   await driver.sleep(3000)
})