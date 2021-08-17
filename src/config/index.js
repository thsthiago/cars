const { SiteClient } = require('datocms-client')
require('dotenv').config()

module.exports = {
  client: new SiteClient(process.env.SECRET_TOKEN)
}
