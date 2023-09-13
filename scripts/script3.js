function sleep(callback, val) {
  setTimeout(function() {
    console.log(val++);
    callback(val);
  }, 1000);
}

// コールバックによる非同期処理
sleep(function(val) {
  sleep(function(val) {
    sleep(function(val) {
      sleep(function(val) {
        sleep(function(val) {
          sleep(function(val) {
            sleep(function(val) {
  
            }, val)
          }, val)
        }, val)
      }, val);
    }, val);
  }, val);
}, 0);