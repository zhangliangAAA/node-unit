function addFun(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  } else if(Number(a) >= 0  && Number(b) >= 0 ){
    return `${Number(a) + Number(b)}`
  } else if(Array.isArray(a)){
    return 'a is a Array'
  } {
    return undefined
  }
}
module.exports = {
  addFun
}