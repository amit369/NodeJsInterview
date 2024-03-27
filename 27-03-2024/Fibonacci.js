
function printFibonacciSeries(len)
{
let a=0,b=1,c;
for(let i=0;i<len;i++)
{
    c = a+b;
    console.log(a);
    a=b;
    b=c;
}
}

printFibonacciSeries(10);