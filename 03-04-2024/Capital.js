let str="amit chaman";

let words= str.split(' ');
console.log(' words ', words);

for(let i=0;i<words.length;i++)
{
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

let capitalizedStr = words.join(' ');

console.log(capitalizedStr);