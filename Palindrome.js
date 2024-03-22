function checkPalindrome(str)
{
    let j= str.length -1 ;
    for(i=0; i < str.length/2;i++)
    {
        if(str[i] != str[j])
        {
            return false;
        }
        j--;
    }
    return true;
}

let str='amma', str2='chaman';
console.log(checkPalindrome(str));