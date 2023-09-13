new Promise(function(resolve, reject) {
  console.log('promise');
  resolve('hello');
}).then(function(data) {
  console.log('then ' + data);
})



console.log('global end');