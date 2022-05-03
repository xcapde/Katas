const calculator = require ('./calculxevi')

// Sumem un número al total que és 0
test('should return same num we entered as param', ()=> {
    // escenari
    calculator.suma(5);
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(5); 
})

// Restem
test('should return same num we entered as param but in negative', ()=> {
    // escenari
    calculator.total=0;
    calculator.resta(8)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(-8);
})

// Multipliquem
test('should return de product of the num we entered as a param and the previous total', ()=> {
    // escenari
    calculator.total=5
    calculator.product(4)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(20);
})

// Dividim 
test('should return de division of total by a num we entered as a param', ()=> {
    // escenari
    calculator.total=10
    calculator.div(2)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(5)
})

// Modul (%)
test('should return de module of total by a num we entered as a param', ()=> {
    // escenari
    calculator.total=7
    calculator.module(3)
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(1)
})

// És parell? True
test('shoul return true if the num entered as a param is even, and false is odd', ()=> {
    // escenari
    calculator.isEven(6)
    // acció
    let result = calculator.total
    // resultat
    expect(result).toBe(true);
})

// És parell? False
test('shoul return true if the num entered as a param is even, and false is odd', ()=> {
    // escenari
    calculator.isEven(7)
    // acció
    let result = calculator.total
    // resultat
    expect(result).toBe(false);
})

// Torna el més gran
test('should return the major num of two nums(num1, num2)', ()=> {
    // escenari
    calculator.biggest(20,2)
    // acció
    let result = calculator.total
    // resultat
    expect(result).toBe(20)
})

// Suma tots els números d'un array
test('should return de sum of the array nums', ()=> {
    // escenari
    calculator.total=0
    calculator.sumaArray([1,2,3,4,10])
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toBe(20);
})

// Torna tots els números iguals o més grans que 5.
test('should return nums equal or major than five', ()=> {
    // escenari
    calculator.total=0
    calculator.sameOrMajor5([1,2,3,4,5,100,25,10])
    // acció
    let result = calculator.total;
    // resultat
    expect(result).toStrictEqual([5,100,25,10])
})