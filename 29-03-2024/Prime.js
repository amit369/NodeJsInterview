function checkPrimeNumber(val)
{
    for(let i=2;i<val;i++)
    {
        if(val%i==0)
        {
            return false;
        }
    }
    return true;
}

for(let i=2;i<100;i++)
{
    if(checkPrimeNumber(i))
    {
        console.log(i);
    }
}