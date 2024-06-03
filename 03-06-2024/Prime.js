function checkPrimeNumber(num)
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

for(let i=2;i<100;i++)
    {
        if(checkPrimeNumber(i))
            {
                console.log(i);
            }
    }