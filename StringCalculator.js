function add (stringNum) {

    let sum =0;

    for (let i=0; i< stringNum.length;i++) {
        if (!isNaN(parseInt(stringNum[i]))) {
            sum = sum + parseInt(stringNum[i])
        } 
        
    }

    return sum
}

var sum1 = add("//;\n1;2")
console.log("The sum of numbers is",sum1)
