new Promise(function(resolve, reject) {
  console.log('promise');
  resolve();
}).then(function(data) {
  console.log('then');
}).then(function(data) {
  console.log('then');
}).then(function(data) {
  console.log('then');
}).then(function(data) {
  console.log('then');
}).then(function(data) {
  console.log('then');
}).then(function(data) {
  console.log('then');
})



console.log('global end');