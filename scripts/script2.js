// function a() {
//   // タスクキューを経由して実行される
//   setTimeout(function task1() { 
//     console.log('task1 done');
//   });

//   console.log('fn a done');
// }

// function b() {
//   console.log('fn b done');
// }

// a();

// b();


function a(b) {
  // タスクキューを経由して実行される
  setTimeout(function task1() { 
    console.log('task1 done');
    b();
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a(b);