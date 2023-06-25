//criar referências ao elemento da pagina
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const respErro = document.querySelector("h4")
const romanos = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
]);
//maior numero romano (MMMCMXCIX) 3999
//XLVII (47)
//XIX (19)
//IV (4)
//XLIX (49)


frm.addEventListener("submit",(e) => {
    e.preventDefault()
    //transforma entrada em String em caixa alta
    const num_romano = String(frm.inNumero.value).toUpperCase()

    //armazena valor romano convertido para decimal
    let str_aux=""


    for (let index = 0; index < num_romano.length; index++) {
        //blocos de condiçôes para pegar os valores dos algarismos romanos
        if (num_romano[index] == "I") {
            const numero = romanos.get("I")    
            
            str_aux = str_aux + `${String(numero)}.`
        }
        if (num_romano[index] == "V") {
            const numero = romanos.get("V")    
            
            str_aux = str_aux + `${String(numero)}.`
             
            
        }
        if (num_romano[index] == "X") {
            const numero = romanos.get("X")
             
            str_aux = str_aux + `${String(numero)}.`
        }
        if (num_romano[index] == "L") {
            const numero = romanos.get("L")
        
            str_aux = str_aux + `${String(numero)}.`           
            
        }
        if (num_romano[index] == "C") {
            const numero = romanos.get("C")
            
            
            str_aux = str_aux + `${String(numero)}.`
        }
        if (num_romano[index] == "D") {
            const numero = romanos.get("D")
            
            str_aux = str_aux + `${String(numero)}.`

            
        }
        if (num_romano[index] == "M") {
            const numero = romanos.get("M")
            
            str_aux = str_aux +`${String(numero)}.`
        }
    }
    
    console.log(str_aux)
    //separa a string em uma lista, elementos depois do .
    const str_dec = str_aux.split(".")
    //transformar elementos em inteiros
    const numeros_dec = str_dec.map(str => parseInt(str));
    //filtra o Not a Number da array e reverte os valores da array 
    let decimais = numeros_dec.filter(valor => !isNaN(valor)).reverse();
    //variavel para receber soma dos valores atuais
    let somaDec =0
    //variavel para receber a subtração dos valores necessarios
    let sub = 0
       
    for (let index = 0; index < decimais.length; index++) {
        
        if (decimais[index] > decimais[index+1]  ) {
            //pega o menor algarismo romano e diminui pelo maior algarismo romano
            //ex: IX = 10-1 = 9
            sub = decimais[index] - (decimais[index+1]);
            //atualiza o valor da array decimais com o valor da subtração
            decimais[index] = sub
            //define segundo valor da subtração como 0 para não influenciar na soma total da array
            decimais[index+1] = 0            
        }  
        
    }
        
    console.log(decimais)
    //laço para percorrer a lista reconfigurada e armazenar a soma dos valores na variavel somaDec
    for (var i = 0; i<decimais.length;i++){
        somaDec+=decimais[i]
    }
    console.log(somaDec)
    //display no html
    resp.innerText=`Número em decimal: ${somaDec}`
})