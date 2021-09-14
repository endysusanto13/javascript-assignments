/* eslint-disable */

// This script can't run with node, must use HTML <script> method


// TODO: rewrite the following code using Promise instead of callback
function getServerTime(callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open('HEAD', window.location.href);
  xmlHttp.setRequestHeader('Content-Type', 'text/html');
  xmlHttp.addEventListener('load', () => {
    callback(xmlHttp.getResponseHeader('Date'));
  });
  xmlHttp.send('');
}

getServerTime((serverDate) => console.log(`Server date is ${serverDate}`));

// function getServerTime(serverDate) {
//   return new Promise((resolve) => {
//     getServerTime((serverDate) => console.log(`Server date is ${serverDate}`));
//   })
// }

// getServerTime(serverDate)
// .then


// const promiseServer = new Promise((resolve, reject) => {
//     // <codes>
//     // <usually it will do some async operation>
//     // <when success, call resolveX with the value>
//     // <when error, call reject with the error>
//   })

//   promise
//   .then((value) => {
//     // do something with the value provided when success
//   })
//   .catch((err) => {
//     // do something for the error
//   });


/*================================================================================
|--------------------------------------------------------------------------------|
================================================================================*/

// TODO: rewrite the following code using async function

// Not sure whether below is correct
// function wait(second) {
//   return new Promise((resolve) => setTimeout(resolve), second * 1000);
// }

// wait(1000)
// .then(() => {
//   console.log('1 sec passed.');
//   return wait(2000)
// })
// .then(() => {
//   console.log('3 sec passed.')
// });

// Writing chain promise to async

function wait(second) {
  return new Promise((resolve) => setTimeout(resolve), second * 1000);
}

async function run() {
  await wait(1);
  console.log('1 sec passed.')
  await wait(2);
  console.log('3 sec passed.')
}
run()



function fetchPricingData() {
  return fetch('/api/pricing').then((res) => res.json());
}

function fetchDataThenWait() {
  return fetchPricingData().then((pricingData) => {
    return wait(1).then(() => pricingData);
  });
}
