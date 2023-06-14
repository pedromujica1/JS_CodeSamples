//cria referências ao elemento da pagina
const frm = document.querySelector("form");
const tempo = document.querySelector("h3");
const troco = document.querySelector("h4");

//Se o valor for inferior ao tempo mínimo, exiba a mensagem: “Valor Insuficiente”. 
//Valores: R$ 1,00 - 30 minutos
//R$ 1.75 - 60 minutos 
//R$3,00 - 120 minutos.
frm.addEventListener("submit",(e) => {
   
    //Evita o envio do formulario
    e.preventDefault();

    //Obter os valores digitados
    const moedas = Number(frm.inMoedas.value)
    const troco_30min = moedas - 1
    const troco_60min = moedas - 1.75
    const troco_120min = moedas - 3
    
    if (moedas < 1) 
    {
        tempo.innerText=`Valor R$ ${moedas.toFixed(2)} insuficiente!`
    } 
    //Caso o triangulo não exista imprimir a mensagem a seguir
    else 
    {
        if (moedas => 1 && (moedas < 1.75)) 
        {
            
            tempo.innerText=`Valor R$ ${moedas.toFixed(2)} suficiente, 30 minutos`
            
            troco.innerText=`Valor do troco ${troco_30min.toFixed(2)}`
        }
        if (moedas => 1.75 && (moedas < 3)) 
        {
            
            tempo.innerText=`Valor R$ ${moedas.toFixed(2)} suficiente, 60 minutos`
            
            troco.innerText=`Valor do troco ${troco_60min.toFixed(2)}`
        } 
        if (moedas >= 3) 
        {
            
            tempo.innerText=`Valor R$ ${moedas.toFixed(2)} suficiente, 120 minutos`
            
            troco.innerText=`Valor do troco ${troco_120min.toFixed(2)}`
        }  
    }
    
})