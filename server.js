const express = require('express')
const path = require('path')
const compression = require('compression')

const server = express()
const outputPath = path.join(process.cwd(), 'build')
const PORT = 3000

server
  .use(compression())
  .use('/assets', express.static(path.join(process.cwd(), 'public')))
  .get(/\.js$|\.css$/, (req, res, next) => {
    req.url += '.gz'
    const type = req.originalUrl.includes('.js') ? 'javascript' : 'css'
    res.set('Content-Encoding', 'gzip')
    res.set('Content-Type', `text/${type}`)
    res.set('Cache-Control', 'public, max-age=31557600')
    next();
  })
  .use(express.static(outputPath))
  .get('*', (req, res) => {
    res.sendFile(path.join(outputPath, 'index.html'))
  })
  .listen(PORT, () => {
    console.log(`App running at port ${PORT}`)
  })