
function printFibonacciSeries(num)
{
    let num1=0,num2=1,num3;
    for(let i=0;i<num;i++)
    {
       console.log(num1);
       num3=num1+num2;
       num1=num2;
       num2=num3;
    }
}

printFibonacciSeries(10);