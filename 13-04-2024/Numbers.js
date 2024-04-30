let arr = [1,2,3,4,5,1,2,3];

function duplicates(arr)
{
    let duplicates = arr.filter((item,index) => {
              return arr.indexOf(item) != index
    });

    console.log(duplicates);
}

function nonduplicates(arr)
{
    let nonduplicates = arr.filter((item,index) => {
              return arr.indexOf(item) === index
    });

    console.log(nonduplicates);
}

duplicates(arr);
nonduplicates(arr);