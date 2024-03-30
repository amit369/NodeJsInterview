function checkPrime(num)
{
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return false;
        }
    }
    return true;
}

for(let k=2;k<1000000;k++)
{
    if(checkPrime(k))
    {
        console.log(k);
    }
}