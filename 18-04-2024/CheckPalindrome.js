
function checkPalindrome(str)
{
    let count=str.length-1;
    for(let i=0;i<str.length/2;i++)
    {
        if(str[i]!=str[count])
        {
            return false;
        }
        count--;
    }
    return true;
}

console.log(checkPalindrome('abaa'));
