function checkPrime(n)
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

for(let k=2;k<100;k++)
{
    if(checkPrime(k))
    {
        console.log(k);
    }
}