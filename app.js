const express = require('express')
const path = require('path')
const app = express()
const options = {
  dotfiles: 'ignore',  // 配置文件，如 .gitignore, .eslintrc
  etag: false,         // 和缓存验证有关
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timetamp', Date.now());
  }
}

// react 不要设置 视图引擎
// app.set('views','./views')
// app.set('view engine','jade');

// 引入静态资源
app.use(express.static('./src', options))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'))
})
app.listen(3002)
