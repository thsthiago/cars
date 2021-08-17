const { client } = require('../../config')
require('dotenv').config()

module.exports = {
  allVehicles: async () => {
    try {
      const response = await client.items.all({

      }, {
        allPages: true
      })
      console.log(response[0].imagesgaleria)
    } catch (err) {
      console.log(err.message)
    }
  }
}
