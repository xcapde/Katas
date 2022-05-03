// - Haz una función que sume un número con al total de la calculadora.
// - Haz una función que reste un número al total de la calculadora.
// - Haz una función que multiplique por un numero el total.
// - Haz una función que divida por un numero el total.
// - Haz una función que al pasarle un número calcule el % del total y lo modifique con el resultado.
// - Haz una función que al pasarle un numero nos indique si es par.
// - Haz una función que al pasarle dos números devuelva el mayor.
// - Haz una función que al pasarle un array de números ponga el resultado de la suma de todos ellos en el total.
// - Haz una función que al pasarle un lista de enteros List<int> devuelva otra lista que tenga solamente los números mayores o iguales a 5.

const calculator = {
    total:0,

    suma(num){
        this.total += num;
    },
    resta(num){
        this.total -= num;
    },
    product(num){
        this.total *= num;
    },
    div(num){
        this.total /= num;
    },
    module(num){
        this.total %= num;
    },
    isEven(num){
        if (num % 2 === 0)
        this.total = true
        else
        this.total = false;
    },
    biggest(num1, num2){
        this.total = Math.max(num1, num2)
    },
    sumaArray(array){
        array.forEach(arrNum => this.total += arrNum);
    },
    sameOrMajor5(array){
        this.total = array.filter(arrayNum => arrayNum >= 5)
    }
}

module.exports =  calculator;
// export default calculator