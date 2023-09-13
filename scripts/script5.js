new Promise(function(resolve, reject) {
  console.log('promise');
  resolve();
}).then(function(data) {
  console.log('then');
}).finally(function() {
  console.log('finally');
})

console.log('global end');