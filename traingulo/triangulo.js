//cria referências ao elemento da pagina
const frm = document.querySelector("form");
const resultado = document.querySelector("h3");
const tipo_triangulo = document.querySelector("h4");

frm.addEventListener("submit",(e) => {
   
    //Evita o envio do formulario
    e.preventDefault();

    //Obter os valores digitados
    const lado1 = Number(frm.invalorA.value)
    const lado2 = Number(frm.invalorB.value)
    const lado3 = Number(frm.invalorC.value)

    //if se o trinaglo existir
    if (lado3 < (lado1+lado2) && lado2 < (lado1+lado3) && lado1 < (lado2+lado3)) 
    {
        resultado.innerText = `O triângulo pode ser formado!`;
        //cor gold
        resultado.style.color="#FFD700";
        
        //caso todos sejam iguais = equilatero
        if (lado1 == lado2 && lado2 == lado3) 
        {
            
            tipo_triangulo.innerText=`O triângulo é equilátero`
            tipo_triangulo.style.color="red"

        }

        //somente dois lados iguais
        else if (lado1 == lado2 || lado1== lado3 || lado3 == lado2) 
        
        {
            tipo_triangulo.innerText=`O triângulo é isósceles`
            tipo_triangulo.style.color="blue"
            
        } 
        //todos iguais
        else 
        {
            tipo_triangulo.innerText=`O triângulo é escaleno`
            tipo_triangulo.style.color="green"
        }
    } 
    //Caso o triangulo não exista imprimir a mensagem a seguir
    else 
    {
        resultado.innerText = `O triângulo não pode ser formado...`;
        //cor indigo
        resultado.style.color="#4B0082";
    }
    
})