function printNumbers(n)
{
         if(n>0)
         {
            printNumbers(n-1);
            console.log(n);
         }
}

printNumbers(10);