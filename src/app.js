const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()
const port = 3333

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/pages'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'dist')))
app.use(routes)

app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`)
})
