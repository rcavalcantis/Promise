'use strict';

// Via callbacks
/*
 function doAsyncTask(cb) {
 setTimeout(() => {
 console.log("Async Task Calling Callback");
 cb();
 }, 1000);
 }
 doAsyncTask(() => console.log("Callback Called"));
 */

// Via Promise
let error = false;
function doAsyncTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('error');
      } else {
        resolve('done');
        console.log('aguardando...');
      }
    }, 1000);
  });
}

doAsyncTask().then(
  (val) => console.log(val),
  (err) => console.error(err)
);
