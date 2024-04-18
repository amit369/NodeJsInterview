let arr = [
    'kuldeep.tyagi@tcs.com',
    'amit.chaman@tcs.com'
];

let newarr = arr.map((item) => {
    let firstName = item.split('.');
    console.log('firstname ', firstName[0]);
    let lastname = firstName[1].split('@');
    console.log('lastname ', lastname[0]);
    console.log('domain ', lastname[1]);
})

console.log(newarr);