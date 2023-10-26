//criar referências ao elemento da pagina
const frm = document.querySelector("form");
const resp = document.querySelector("h3");


//acordo com as normas fisica; de; [0,21]
function formaFrase(str,toInsert,indexes) {
    const charArray = str.split("")

    let insertCount =0;

    for (let i = 0; i < str.length; i++) {
        
        if(indexes.includes(i)){
            
            charArray.splice(i +insertCount ,0 ,` ${toInsert} `)
            insertCount++;
        }
    }
    return charArray.join("");
    
}



frm.addEventListener("submit",(e) => {
    e.preventDefault()

    //pegando elementos do html e convertendo para string
    const frase_ini = String(frm.inFrase.value)
    const palavraHTML = String(frm.inPalavra.value)
    const numeros = String(frm.inPosicoes.value)

    const indexes_lista = numeros.split(",")
    //transformando string para int
    let indexes = (indexes_lista.map(str=>parseInt(str)))

    //printando no console
    console.log(frase_ini)
    console.log(palavraHTML)
    console.log(indexes)

    //teste função
    console.log(formaFrase("O Julio esta maluco","de",[1,3]))

    let funcaoResp = formaFrase(frase_ini,palavraHTML,indexes)
    resp.innerText=`Frase formada: ${funcaoResp}`
    

});