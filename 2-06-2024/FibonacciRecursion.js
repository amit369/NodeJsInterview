function fibonacci(n)
{
    if(n <=1)
        {
            return n;
        }
    else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

for(let i=0;i<15;i++)
    {
        console.log(fibonacci(i));
    }