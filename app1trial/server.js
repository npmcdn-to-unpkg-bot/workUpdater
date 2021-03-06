var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/style.css", function(req, res) {
  res.sendFile(__dirname + '/css/style.css')
})

app.get("/status.js", function(req,res) {
  res.sendFile(__dirname + '/data/status.js')
})

app.get("/update.js", function(req, res) {
  res.sendFile(__dirname + '/data/update.js')
})

app.get("/sampleinfo.js", function(req, res) {
  res.sendFile(__dirname + '/data/sampleinfo.js')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
