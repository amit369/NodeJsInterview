function printPrimeNumbers(limit)
{
    for(let i=2;i<limit;i++)
    {
        if(checkPrime(i))
        {
            console.log(i);
        }
    }
}

function checkPrime(i)
{
    for(let k=2;k<i;k++)
    {
            if(i%k==0)
            {
                return false;
            }
    }
    return true;
}

printPrimeNumbers(20);