let name = {
    firstName : "Akshay",
    lastName : "Saini",
    
}

let printFullName =  function (hometown, state)
    {
        console.log(this.firstName + " "+ this.lastName + " from "+hometown+" ," + state);
    }

    printFullName.call(name,"Dehradun", "Uttarakhand")
;let name2 = {
    firstName : "Sachin",
    lastName : "Tendulkar"
}

name.printFullName.call(name2);