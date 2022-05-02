// cal crear una variable al principi de tot, per poder importar el mòdul del js amb les funcions del test

const fizzbuzz=require("./fizzbuzz");

test('should return Fizz if param is 3 div', () => {
    //expect
    let result = fizzbuzz(6);
    expect(result).toBe("Fizz"); 

    // si és correcte, el test passa, si el resultat és diferent sortirà error al test.
    // let result = 4+4 --> es pot refactoritzar el codi perquè quedi més maco.
});

test('should return Buzz if param is 5 div', () => {
    let result = fizzbuzz(10);
    expect(result).toBe("Buzz"); 
});

test ('should return FizzBuzz if param is 3 and 5 div',()=> {
    let result = fizzbuzz(15);
    expect(result).toBe("FizzBuzz");
});

test ('should return the same number if param is not 3 or 5 div', ()=>{
    let num= 11;

    let result = fizzbuzz(num)
    expect(result).toBe(num);
})