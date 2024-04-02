
function checkPrime(n)
{
    for(let x=2;x<n;x++)
    {
        if(n%x==0)
        {
            return false;
        }
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