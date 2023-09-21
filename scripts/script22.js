function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 10000);
  });
}

function testThen() {
  sleep(1).then(() => {
    console.log('sleep ended');
  });

  console.log('Hello World');
}

async function testAsync() {
  const val = await sleep(1);
  console.log('sleep ended');

  console.log('Hello World');
}

testAsync();