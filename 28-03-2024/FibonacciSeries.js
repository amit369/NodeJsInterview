
function printFibonacciSeries(n)
{
    var a=0,b=1,c;

    for(let i=0;i<n;i++)
    {
          console.log(a);
          c = a+b;
          a=b;
          b=c;
    }
}

printFibonacciSeries(10);