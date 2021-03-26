const { createServer } = require('http')
const path = require('path')
const next = require('next')
const isDev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', isDev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare().then(_ => {
  const server = createServer((req, res) => {
    if (req.url === '/sw.js') {
      app.serveStatic(req, res, path.resolve('./static/sw.js'))
    } else {
      handle(req, res)
    }
  })

  server.listen(PORT, err => {
    if (err) throw err

    console.log(`> Sever listening on port: ${PORT}`)
  })
})
