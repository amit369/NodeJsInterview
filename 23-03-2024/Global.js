function add(a, b)
{
    console.log(a+b);
}
setImmediate(() => {
    add(2,3);
    console.log('This is setImmediate');
} )

setTimeout(() => {
    add(2,5);
    console.log('This is setTimeout');
} )

process.nextTick(() => {
    add(10,2);
    console.log('This is process NextTick');
})
console.log('Program has ended');