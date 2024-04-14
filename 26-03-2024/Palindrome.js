
function checkPalindrome(str)
{
    var len = str.length-1;

    for(let j=0;j<str.length/2;j++)
    {
        if(str[j]!=str[len])
        {
return "false";
        }
        len--;
    }
    return "true"
}

console.log(checkPalindrome('amit'));