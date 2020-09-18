import Questao2 from "../../src/Lista1/Questao2";
import Pilha from "../../src/Pilha";

let p;

beforeEach(() => {
    p = new Pilha();
});

test("Inverter", () => {
    p.push('A');
    p.push('B');
    p.push('A');
    p.push('C');
    p.push('A');
    p.push('X');
    p.push('I');    
    p = Questao2(p);
    expect(p.toString()).toBe("[ I  X  A  C  A  B  A ]");
});