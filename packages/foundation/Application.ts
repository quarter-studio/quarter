const Container = require('@quarter/container/Container')

class Application extends Container {
  constructor(basepath) {
    super()
    console.log(basepath)
  }
}

module.exports = Application
