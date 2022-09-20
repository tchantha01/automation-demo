const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const {addMovie} = require('../addMovie.js')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(1000)
})