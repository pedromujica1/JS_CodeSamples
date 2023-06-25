//criar referências ao elemento da pagina
const frm = document.querySelector("form");
const resp = document.querySelector("h3");
const romanos = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
  ]);


frm.addEventListener("submit",(e) => {
    e.preventDefault()
    //transforma entrada em String em caixa alta
    const num_romano = String(frm.inNumero.value).toUpperCase()
    //armazena valor romano convertido para decimal
    let str_aux=""
    //maior numero romano
    //(MMMCMXCIX)
    
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
    //filtra o Not a Number da array e reverte 
    let decimaisFiltrados = numeros_dec.filter(valor => !isNaN(valor)).reverse();
    console.log(decimaisFiltrados)
    
    let soma =0
    let sub = 0
    let numeros_subtraidos=[]
    let somaNums=[0,0]
    let indiceIni = 0
    let indiceFim=0
    let verificaSub=false
    let temp = [] 
       
    for (let index = 0; index < decimaisFiltrados.length; index++) {
        
        if (decimaisFiltrados[index] > decimaisFiltrados[index+1]  ) {
            //pega o menor algarismo romano e diminui pelo maior algarismo romano
            //ex: IX = 10-1 = 9
            sub = decimaisFiltrados[index] - (decimaisFiltrados[index+1]);
            decimaisFiltrados[index] = sub
            decimaisFiltrados[index+1] = 0

            numeros_subtraidos.push(sub)
            //salva indice em que os números só precisam ser somados
            indiceIni =(indiceIni+  decimaisFiltrados.indexOf(decimaisFiltrados[index]))
            indiceFim =(indiceFim+ decimaisFiltrados.indexOf(decimaisFiltrados[index+1]))
            //numeros_subtraidos.push(decimaisFiltrados[index], decimaisFiltrados[index+1])*/
            

            
        }  
        
    }
        
    console.log(decimaisFiltrados)
    for (var i = 0; i<decimaisFiltrados.length;i++){
        soma+=decimaisFiltrados[i]
    }
    resp.innerText=`Número em decimal: ${soma}`


   
    
})

