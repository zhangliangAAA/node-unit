const {
  addFun
} = require("./src/tools/add")
const express = require('express');
const bodyParser = require("body-parser");
const {
  ucmReadyAll
} = require('./src/apollo')

const {
  get,
  config
} = require('./src/config')

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

//  主页输出 "Hello World"
app.get('/', function(req, res) {
  res.send('Hello World');
})

//  get 请求
app.get('/getSum', function(req, res) {
  const sum = addFun(req.query.a, req.query.b)
  res.status(200).json({
    sum
  });
})

//  getUcm 请求
app.get('/getUcm', function(req, res) {
  res.status(200).json(config);
})

//  POST 请求
app.post('/post', function(req, res) {
  res.send('Hello POST');
})

//  故意测试未覆盖接口
app.post('/missing', function(req, res) {
  res.send('Hello Missing');
})

// const server = app.listen(8000, function() {
//   console.log(`server is runing at: http://localhost:8000`);
// })

const init = () => {
  return new Promise((resolve, reject) => {
    ucmReadyAll().then(conf => {
      console.log('ucmReady', conf);
      setTimeout(() => {
        resolve(app.listen(get('server.port'), function() {
          console.log(`server is runing at: http://localhost:${get('server.port')}`);
        }))
      }, 1800);
    })
  })
}

process.env.start && init()

module.exports = {
  // server,
  init
}