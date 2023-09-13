new Promise(function(resolve, reject) {
  console.log('promise');
  reject();
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
}).catch(function(data) {
  console.log('catch');
})



console.log('global end');