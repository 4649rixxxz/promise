new Promise(function(resolve, reject) {
  console.log('promise');
  resolve('hello');
}).then(function(data) {
  console.log('then ' + data);
  return 'good night';
}).then(function(data) {
  console.log('then ' + data);
}).then(function(data) {
  // dataはどうなるでしょう
  console.log('then ' + data);
}).finally(function(data) {
  // finallyは引数を取ることができない
  console.log('finally' + data);
})



console.log('global end');