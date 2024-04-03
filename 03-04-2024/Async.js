
const doWork = (a,b) => {
    return new Promise((resolve,reject) => {
        resolve(a+b);
    })
}

doWork(10,20).then((result) => {
    console.log('result ', result);
})