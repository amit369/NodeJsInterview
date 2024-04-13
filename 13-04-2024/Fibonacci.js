function fibonacci(n)
{
    if(n <=1)
        return n;
    else 
        return fibonacci(n-1) + fibonacci(n-2);
}

for(let i=0;i<10;i++)
{
    console.log(fibonacci(i));
}

let arr = [1,2,3,4,5];
let array = arr.shift();
console.log(array);