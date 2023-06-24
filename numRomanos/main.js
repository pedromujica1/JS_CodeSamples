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
    const num_romano = String(frm.inNumero.value).toUpperCase()
    

    let str_aux=""
    //maior numero romano
    //(MMMCMXCIX)
    
    for (let index = 0; index < num_romano.length; index++) {
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
            //contador_romano[6]= contador_romano[6]+ numero
            str_aux = str_aux +`${String(numero)}.`
             
        }
    }
    
    console.log(str_aux)
    //separa a string em uma lista, elementos depois do .
    const str_dec = str_aux.split(".")
    //transformar elementos em inteiros
    const numeros_dec = str_dec.map(str => parseInt(str));
    //filtra o Nan da array
    const decimaisFiltrados = numeros_dec.filter(valor => !isNaN(valor));
    let verificador =1;
    
    let soma =0
    let numeros=[]
    //let verificaNumeros=true

    for (let index = 0; index < decimaisFiltrados.length; index++) {
        if (decimaisFiltrados[index] == decimaisFiltrados[index+1]) {
            verificador++;
        }
        if (decimaisFiltrados[index] > decimaisFiltrados[index+1]){
            let soma_correta = decimaisFiltrados[index]+ decimaisFiltrados[index+1]
            numeros.push(soma_correta)
            verificaNumeros = false

        }

        
    }
    console.log(verificador)
    if (verificador == decimaisFiltrados.length){
        for (let index = 0; index < decimaisFiltrados.length; index++) {
            soma+=decimaisFiltrados[index]
            numeros.push(soma)
            
            
        }
    }
    if (verificador !== decimaisFiltrados.length){
        for (let index = 0; index < decimaisFiltrados.length; index++) {
        
            if (decimaisFiltrados[index] >= decimaisFiltrados[index+1]){
                
                
                
                soma = soma + decimaisFiltrados[index+1]
                numeros.push(soma)
    
            }
            
            else if (decimaisFiltrados[index] < decimaisFiltrados[index+1]){
                
                let inversao = decimaisFiltrados[index+1] - decimaisFiltrados[index]
                soma = soma + inversao
                numeros.push(soma)
    
            }
            
    
            
        }

    }

    console.log(soma)
    console.log(numeros)
    //console.log(decimaisFiltrados)

    
    

    
})


/*
    //Obter os valores digitados
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    //Calculo da média
    const media = (nota1+nota2)/2;

    //Mostra a média no console para checagem
    console.log(media);

    resp1.innerText=`Média das Notas ${media.toFixed(2)}`;
    
    if (media >= 7) {
        res2.innerText=`Parabéns ${nome}! Você foi aprovado(a)`;
        res2.style.color = "blue"; 
        
    } else if(media >= 4){
        res2.innerText = `Parabéns ${nome}! Você está de recuperação`;
        res2.style.color="blue";
    }
    else{
        res2.innerText = `Parabéns ${nome}! Você reprovou`;
        res2.style.color="red";
    }*/