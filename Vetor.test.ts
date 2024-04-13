import { Vetor } from "../src/Vetor";

describe('vetor',() => {
    let vetor: Vetor;
    beforeEach(() => {
        vetor = new Vetor();
    });
    it('Deve somar os elementos do vetor',() => {
        vetor.adicionar(1);
        vetor.adicionar(3);
        vetor.adicionar(2);
        vetor.adicionar(4);
        expect(vetor.somarVetor()).toBe(10);
    })
    it('Vai mostrar o maior deles',() =>{
        vetor.adicionar(1);
        vetor.adicionar(3);
        vetor.adicionar(2);
        vetor.adicionar(4);
        expect(vetor.buscarMaior()).toBe(4)
    })
    it('Vai mostrar a média dos números', () => {
        vetor.adicionar(6);
        vetor.adicionar(6);
        vetor.adicionar(12);
        expect(vetor.buscarMedia()).toBe(7);
    })
})