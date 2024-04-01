function asyncOperation1()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Async operation completed');
        }, 2000)
    });
}

function asyncOperation2()
{
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Async 2 opeartion completed ');
        }, 2000)
    })
}

Promise.all([asyncOperation1(), asyncOperation2()]).then(([result1, result2]) => {
    console.log(result1);
    console.log(result2);
    console.log('Both async opeartion completed successfully! ');
}).catch(error => {
    console.error('Error : ', error.message);
})