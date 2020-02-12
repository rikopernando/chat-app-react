const express = require('express')
const path = require('path')
const app = express()
const publicPath = path.join(__dirname,'..','public')
const port = process.env.PORT || 8000

app.use(express.static(publicPath))

app.get('/*', (req, res) => {
  console.log(process.env)
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
  console.log('Server is up!')
})

