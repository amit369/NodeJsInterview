function checkPrime(val)
{
    for(let i=2;i<val;i++)
    {
        if(val%i==0)
        {
            return true;
        }
    }
    return false;
}

for(let j=2;j<100;j++)
{
    if(!checkPrime(j))
    {
        console.log(j);
    }
}