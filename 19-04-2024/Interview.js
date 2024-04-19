console.log('Start');

process.nextTick(() => {
    console.log('Next Tick');
})

setImmediate(() => {
    console.log('Immediate');
})

console.log('End');