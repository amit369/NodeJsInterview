
function printPrimeNumber(n)
{
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
      return true;
}

for(let i=2;i<100;i++)
{
    if(printPrimeNumber(i))
    {
        console.log(i);
    }
}