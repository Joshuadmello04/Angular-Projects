import {Calculator} from './calculator'
describe('Class Calculator testing',()=>{
    
    var calc: Calculator;
    beforeEach(()=>{
        calc = new Calculator();
    })

    it('Addition testing',()=>{
        //2. Act
        let result = calc.add(22,33)
        //3. Assert
        expect(result).toBe(55);
    })
    it('Subtraction testing',()=>{
        //2. Act
        let result = calc.sub(22,33)
        //3. Assert
        expect(result).toBe(-11);
    })
    it('Multiplication testing',()=>{
        //2. Act
        let result = calc.mul(2,33)
        //3. Assert
        expect(result).toBe(66);
    })
    it('Addition testing',()=>{
        //2. Act
        let result = calc.div(33,11)
        //3. Assert
        expect(result).toBe(3);
    })
})