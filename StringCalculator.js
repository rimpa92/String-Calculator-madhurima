function add (stringNum) {
    let StringArr = stringNum.split(",");

    let sum = 0;

    for (let i=0;i< StringArr.length;i++) {
        sum = sum + parseInt(StringArr[i])
    }

    if (isNaN(sum)) {
        return 0
    } else {
         return sum;
    }
}

var sum1 = add("1,5,7,8,9")
console.log("The sum of numbers is",sum1)