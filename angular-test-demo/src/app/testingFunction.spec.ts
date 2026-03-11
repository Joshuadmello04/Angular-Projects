import { addition } from './testingFunction';

describe("Calculation Testing", ()=>{
    it('Testing add function',()=>{
        expect(addition(11,22)).toBe(33);
    })
})
describe("Calculation Testing False", ()=>{
    it('Testing add function',()=>{
        expect(addition(11,22)).not.toBe(23);
    })
})

describe("String Testing with toBe", ()=>{
    
    let i=0;
    beforeEach(()=>{
        console.log("before each : "+ ++i)
    })

    afterEach(()=>{
        console.log("after each "+i)
    })

    beforeAll(()=>{
        console.log("--started--")
    })
    
    afterAll(()=>{
        console.log("--finished---")
    })
    it('Testing String Equality',()=>{
        let str = "Hello Everybody";
        expect(str).toBe("Hello Everybody");
    })
    it('Testing String Equality',()=>{
        let str = "Hello Everybody";
        expect(str).toEqual("Hello Everybody");
    })
    it('Testing deep checking',()=>{
        let e1 = {"Name":"Raju","age":25}
        expect(e1).toEqual({"Name":"Raju","age":25});
    })
    it('Testing string with regex',()=>{
        let greet = "Happy new Year 2021"
        expect(greet).toMatch(/\d+/)
        expect(greet).toContain("new")
    })
    it('Testing string with regex',()=>{
        let students = [ 'Sita','Gita','Neeta','Rita']
        expect(students).toContain("Sita")
    })
})