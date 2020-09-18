import Test from "../src/Test"

let p;
beforeEach(()=>{
    p = new Test();
});

test("Instancia",() =>{
    expect(p.function()).toBe("Ola mundo");
})