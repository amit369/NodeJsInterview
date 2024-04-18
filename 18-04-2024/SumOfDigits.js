function sumDigits(number)
{
    const digits = number.toString();
    let sum=0;

    for(let i=0;i<digits.length;i++)
    {
        sum += parseInt(digits[i]);
    }

    return sum;
}

let number = 12345;
let result = sumDigits(12345);
console.log('Sum of digits in ', number , "is", result);