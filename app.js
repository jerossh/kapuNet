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
app.use(express.static('./dist', options))
app.use(express.static('./dist/about', options))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/about/index.html'))
})
app.listen(3002, function(){
  console.log('运行啦');
})
