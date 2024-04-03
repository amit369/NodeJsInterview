function sumOfDigits(num)
{
    var str = num.toString();
    var sum=0;
    for(let i=0;i<str.length;i++)
    {
       sum += parseInt(str[i]);
    }
    console.log(sum);
}

sumOfDigits(12345);