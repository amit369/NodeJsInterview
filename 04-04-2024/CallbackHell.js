
fs.readFile('abc.txt', function (err, data1) {
    if(err){
        console.error('Error reading file 1' , err);
    }
    else {
        fs.readFile('abc2.txt', function(err,data2) {
            if(err) 
            {
                console.error('Error reading file 2', err);
            }
            else {
                fs.readFile('abc3.txt' , function(err,data3) {
                    if(err)
                    {
                        console.error('Error reading file 3 ', err);
                    }
                    else {
                        fs.readFile('abc4.txt', function (err,data) {
                            
                        })
                    }
                })
            }
        })
    }
})