
function SumOfDigits(n)
{
    let num = n.toString();
    let sum = 0;
    for(let i=0;i<num.length;i++)
    {
         sum += parseInt(num[i]);
    }
    return sum;
}

console.log(SumOfDigits(12345));