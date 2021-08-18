const axios = require('axios')
require('dotenv').config()

const api = axios.create({
  baseURL: process.env.HOST
})

api.defaults.headers.common['Authorization'] = `Bearer ${process.env.SECRET_TOKEN}` //eslint-disable-line

module.exports = api
