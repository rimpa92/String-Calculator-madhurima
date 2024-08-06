function add (stringNum) {

    let sum = 0;

    let count = 0;
    let negativeArray = []

    

    for (let i=0; i< stringNum.length;i++) {
        if (!isNaN(parseInt(stringNum[i]))) {
            if (parseInt(stringNum[i]) < 0) {
                count+=1;
                negativeArray.push(parseInt(stringNum[i]))
            } else {
                sum = sum + parseInt(stringNum[i])
            }
           
        } 
        
    }
    
    if (count === 0) {
        return sum;
    } else if (count === 1) {
        throw new Error(`negative numbers not allowed ${negativeArray[0]}`)
     } else if (count > 1) {
        throw new Error(`negative numbers not allowed ${[...negativeArray]}`)
     }

    
}

var sum1 = add("//;\n1;2")
console.log("The sum of numbers is",sum1)
