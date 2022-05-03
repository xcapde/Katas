//1 - KATA FIZZBUZZ PART 1
//   declarem una variable const que és una funció = () i executa el següent =>
// - Escribe un programa/función que, como parámetro, reciba un número del 1 al 100 y devuelva:
//   Para múltiplos de tres, devuelva una string: `Fizz` en lugar del número
//   Para los múltiplos de cinco, devuelva una string: `Buzz`en lugar del número
//   Para números que son múltiplos de tres y cinco, devuelva una string: `FizzBuzz`en lugar del número
//   Por supuesto.. para números que no son múltiplos de tres y cinco, debe devolver el mismo numero.

const fizzbuzz = (num) => {
    if (num>100){
        return "Error. You need a number between 0 and 100";
    }    
else if (num%3==0 && num%5!=0){
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
}
}

// PART 2 - Escribe una función que reciba una lista de números y un número:
// La función devolverá otro array con todos los números del la lista inicial divisibles por el número que le hemos pasado por parámetro

const returnDiv = (num, array) => {
 return array.filter(numArray => numArray % num == 0);
}

// PART 3 - Escribe una función que reciba un array de objetos ‘usuario’ que tenga el nombre y la edad:
// la función debe devolver otro array con los usuarios mayores de edad

const returnAdult = (array) => {
    return array.filter(user => user.age>18)
}






module.exports={fizzbuzz, returnDiv, returnAdult};



