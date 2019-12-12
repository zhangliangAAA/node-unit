const apollo = require('ctrip-apollo')
const {
  init,
  get,
  set,
  config
} = require('../config')

const app = apollo({
  host: 'http://ucm2-dev-2.ahotels.tech:8080', //ucm地址
  appId: 'ops-biz-server-node' //AppId
})

const root = app.namespace('root').on('change', (obj) => {
  set(obj.key, obj.newValue);
});

// 默认的 namespace 为 application
const namespace = app.namespace()
  .on('change', ({
    key,
    oldValue,
    newValue
  }) => {
    console.log('==namespace-change=');
    console.log(key, oldValue, newValue);
    console.log('==namespace-change=');
    set(key, newValue)
  })

// - Fetch configurations for the first time
// - start update notification polling (by default)

function ucmReadyAll() {
  return new Promise((resolve, reject) => {
    let readyCount = 0;
    const tryInit = () => {
      readyCount++;
      if (readyCount >= 2) { //由于监听了2个namespace，所以等2个都ready后再初始化config
        init({
          ...namespace._config,
          ...root._config
        });
        resolve(config);
      }
    };
    namespace.ready()
      .then(() => {
        tryInit()
      })
    root.ready().then(() => {
      tryInit()
    })
  })
}

ucmReadyAll().then(res => {
  console.log('=======ucmReadyAll==========');
  console.log(res);
})

module.exports = {
  ucmReadyAll
}