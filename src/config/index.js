const config = {

}

const set = (k, v) => {
  config[k] = v;
}

const get = (k) => {
  return config[k]
}

const init = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      config[key] = obj[key];
    }
  }
}

module.exports = {
  config,
  init,
  set,
  get
}