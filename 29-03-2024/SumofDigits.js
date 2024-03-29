
function sumofDigits(val)
{
    let str = val.toString();
    let sum=0;

    for(let i=0;i<str.length;i++)
    {
         sum += parseInt(str[i]);
    }
    console.log(sum);
}

sumofDigits(12345);