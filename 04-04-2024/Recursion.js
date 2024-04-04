function recursion(n)
{
    if(n<0)
    {
        console.log(n);
    }
    else {
        return recursion(n-1) + recursion(n-2);
    }
}

recursion(10);