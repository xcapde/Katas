const calculator = require ('./calculator');

// Test que no falla
// Sumem un número al total

 test('should return same num we entered as param', ()=> {
    // escenari
    calculator.sum(3)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(3);
})

// Test que falla --> comentat perquè no vagi donant error
// test('should not return same num we entered as param', ()=> {
//     // escenari
//     calculator.sum(5)
//     // acció
//     let result = calculator.total;
//     // resultat
//     expect(result).toBe(10);
// })

// Restem
test('should return same num we entered as param in negative', ()=> {
    // escenari
    calculator.total=0
    calculator.rest(2)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(-2);
})

// Multipliquem
test('should return total mult by num entered as a param', ()=> {
    // escenari
    calculator.total=2
    calculator.mult(2)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(4);
})

// Dividim 
test('should return total div by num entered as a param', ()=> {
    // escenari
    calculator.total=6
    calculator.div(2)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(3);
})

// Modul (%)
test('should return module (residu) of total div by num', ()=> {
    // escenari
    calculator.total=12
    calculator.module(5)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(2);
})

// És parell? True
test('should return true if num is even and false is odd', ()=> {
    // escenari
    // acció
    let result = calculator.isEven(4);
    // resultat
    expect(result).toBe(true);
})

// És parell? False
test('should return true if num is even and false is odd', ()=> {
    // escenari
    // acció
    let result = calculator.isEven(5);
    // resultat
    expect(result).toBe(false);
})

// Torna el més gran
test('should return major num of nums2 (num1 & num2)', ()=> {
    // escenari
    // acció
    let result = calculator.returnMajor(22,2);
    // resultat
    expect(result).toBe(22);
})

// Suma tots els números d'un array
test('should return sum of the array nums', ()=> {
    // escenari
    calculator.total=0;
    let numArr=[1,2,3,4,5]
    calculator.sumArr(numArr);
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(15);
})

// Torna tots els números iguals o més grans que 5.
test('should return the nums major or equal of 5', ()=> {
    // escenari
    calculator.total=0;
    let numArray=[10, 3, 90, 2, 33, 75, 5, 1];
    // acció
    let result = calculator.returnPlus5(numArray);
    // resultat
    expect(result).toStrictEqual([10, 90, 33, 75, 5]);
})