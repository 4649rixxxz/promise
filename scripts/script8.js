new Promise(function(resolve, reject) {
  console.log('promise');
  resolve();
}).then(function(data) {
  console.log('then');
  throw new Error;
}).then(function(data) {
  console.log('then');
}).catch(function(data) {
  console.log('catch');
})



console.log('global end');