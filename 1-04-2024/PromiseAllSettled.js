const promise1 = new Promise( (resolve,reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
})

const promise2 = new Promise( (resolve, reject) => {
    setTimeout( () => {
           reject(new Error('Promise 2 rejected '));
    }, 1000);
})

const promise3 = new Promise( (resolve, reject) => {
    setTimeout( () => {
           resolve('Promise 2 resolved');
    }, 1500);
})

Promise.allSettled([promise1, promise2, promise3]).then(results => {
    results.forEach(result => {
        if(result.status === 'fulfilled')
        {
            console.log('Fulfilled ', result.value);
        }
        else if ( result.status === 'rejected')
        {
            console.log('Rejected ', result.reason.message);
        }
    })
})