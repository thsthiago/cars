const api = require('../../config')
const { allVehicles } = require('./query')

module.exports = {
  allVehicles: async () => {
    try {
      const response = await api.post('/', {
        query: allVehicles
      })
      return response.data.data
    } catch (err) {
      console.log(err.message)
    }
  }
}
