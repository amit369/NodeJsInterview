
function calculateSum(val)
{
    let str=val.toString();
    let count = 0;
    for(let i=0;i<str.length;i++)
    {
        count += parseInt(str[i]);
    }
    console.log(count);
}

calculateSum(123);