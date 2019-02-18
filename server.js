import express from 'express'
import path from 'path'

const server = express()
const outputPath = path.join(process.cwd(), 'build')

server
// .use(compression())
  .use(express.static(path.join(process.cwd(), 'public')))
  .use(publicPath, express.static(outputPath))
  .get('*', (req, res) => {
    res.sendFile(path.join(outputPath, 'index.html'))
  })
