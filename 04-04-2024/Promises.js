const promises = [
    new Promise((reject, resolve) => {
        setTimeout(() => resolve('Promise 1 resolved'), 1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Promise 2 resolved')), 1000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 3 resolved'), 1500)
    })
];

Promise.race(promises).then(result => { 
     console.log('First resolved promise:', result);
}).catch(error => {
    console.error('First rejected promise:', error);
});