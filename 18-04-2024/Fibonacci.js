
function generateFibonacci(n)
{
    if(n<=1)
    return 1;
    else
    return generateFibonacci(n-1) + generateFibonacci(n-2);
}

for(let i=0;i<10;i++)
{
 console.log(generateFibonacci(i));
}