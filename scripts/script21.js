function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// 返り値はPromise
async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  throw new Error('error happend');
  
  return val;
}

init().then(function (res) {
  console.log('res', res);
}).catch(function(e) {
  console.error(e);
});