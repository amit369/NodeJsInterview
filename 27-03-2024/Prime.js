function checkPrime(val)
{

    for(let j=2;j<val;j++)
    {
           if(val%j==0)
           return false;
    }
    return true;
}

for(let i=2;i<100;i++)
{
    if(checkPrime(i))
    {
        console.log(i);
    }
}