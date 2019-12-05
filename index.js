const {
  addFun
} = require("./src/tools/add")
const express = require('express');
const bodyParser = require("body-parser");
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
    setTimeout(() => {
      resolve(app.listen(8000, function() {
        console.log(`server is runing at: http://localhost:8000`);
      }))
    }, 1800);
  })
}

module.exports = {
  // server,
  init
}