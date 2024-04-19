
let arr=[1,2,3,4,5];

function calculate(arr)
{
      const result = this.reduce((acc,num) => acc+num,0);
      console.log(result);
}

calculate.apply(arr);