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
    total: 0,
    sum (num){
        this.total+=num;
    },
    rest (num){
        this.total-=num;
    },
    mult (num){
        this.total*=num;
    },
    div (num){
        this.total/=num;
    },
    module (num){
        this.total = this.total %= num;
    },
    isEven (num){
        if (num % 2 === 0) return true
        else return false;
    },
    returnMajor (num1, num2){
        return Math.max(num1, num2);
    },
    sumArr (array){
        array.map(arrnum => this.sum(arrnum));
        // array.forEach(arrnum => this.total += arrnum); --> una altra manera de fer-ho
    },
    returnPlus5 (array){
        return array.filter(arrnum => arrnum >= 5)
    },
}

module.exports = calculator;
// export default calculator --> també és correcte i funciona! 
// la variable ha de ser CONST