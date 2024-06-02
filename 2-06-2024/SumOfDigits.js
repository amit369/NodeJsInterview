
function SumOfDigits(str)
{
let digits = str.toString();
let sum=0;
for(let i=0;i<digits.length;i++)
    {
        sum += parseInt(digits[i]);
    }
    return sum;
}

console.log(SumOfDigits(123456));