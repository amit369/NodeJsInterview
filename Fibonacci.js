function calculateFibonacci(val)
{
    let a=0,b=1,c;
    for(let i=0;i<val;i++)
    {
           console.log(a);
           c= a+b;
           a=b;
           b=c;
    }
}

calculateFibonacci(10);