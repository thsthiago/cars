const axios = require('axios')

module.exports = {
  api: axios.create({
    baseURL: process.env.HOST,
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`
    }
  })
}
