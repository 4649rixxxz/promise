new Promise(function(resolve, reject) {
  console.log('promise');
}).then(function(data) {
  console.log('then:' + data);
}).finally(function() {
  console.log('finally');
})

console.log('global end');