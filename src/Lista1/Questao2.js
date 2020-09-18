import Pilha from "../Pilha";

export default function Questao2(inversorPalavra){
    let aux = new Pilha();
    while(!inversorPalavra.isEmpty()){
        aux.push(inversorPalavra.pop());
    }
    return aux;    
}