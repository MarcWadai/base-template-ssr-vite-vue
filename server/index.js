const express = require('express')
const { default: helmet } = require('helmet')
const { createPageRenderer } = require('vite-plugin-ssr')
const cors = require('cors')
const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`
const routes = require('./routes')

require('./config/mongo')

startServer()

async function startServer() {
  const app = express()

  app.use(cors({
    origin: "https://picsum.photos"
  }))
  // app.use(helmet())
  app.use('/api', routes)

  let viteDevServer
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    const vite = require('vite')
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: 'ssr' },
    })
    app.use(viteDevServer.middlewares)
  }

  const renderPage = createPageRenderer({ viteDevServer, isProduction, root })
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl
    const pageContextInit = { url }
    const pageContext = await renderPage(pageContextInit)
    if (!pageContext.httpResponse) return next()
    const { body, statusCode, contentType } = pageContext.httpResponse
    res.status(statusCode).type(contentType).send(body)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
