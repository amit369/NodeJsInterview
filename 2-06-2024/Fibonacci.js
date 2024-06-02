
function printFibonacciSeries(val)
{
    let n1=0,n2=1,n3;
    for(let i=0;i<val;i++)
        { 
              n3 = n1 + n2;
              console.log(n1);
              n1=n2;
              n2=n3;
        }
}

printFibonacciSeries(10);