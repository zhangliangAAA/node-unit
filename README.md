# node-unit
Node单元测试

# 初始化
npm install

# 进行单独测试文件：
node ./node_modules/mocha/bin/_mocha test/addFun.js
# 全部执行测试文件：
node ./node_modules/mocha/bin/_mocha
# 带覆盖率执行全部测试文件：
node ./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha

若果运行 带覆盖率执行全部测试文件 命令后会生成一个coverage文件夹
点击 coverage/lcov-report/index.html 浏览器打开，可展示更详细的测试信息