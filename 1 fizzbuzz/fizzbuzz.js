const fizzbuzz = (num) => {
    if (num%3==0 && num%5!=0){
        return "Fizz";
}

else if (num%5==0 && num%3!=0){
    return "Buzz";
}

else if (num%3==0 && num%5==0){
    return "FizzBuzz";
}  

else {
    return num;
// else if (num%3!=0 || num%5!=0){
//     return num;
}
}

module.exports=fizzbuzz;
// cal un mòdul al final de tot, per poder exportar l'arxiu de les funcions a test.js