
function printFibonacci(val)
{
    let n1=0,n2=1,n3;
     for(let i=0;i<val;i++)
     {
       console.log(n1);
       n3 =n1 + n2;
       n1=n2;
       n2=n3;
     }
}

printFibonacci(10);