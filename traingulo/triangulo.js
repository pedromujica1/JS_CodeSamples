/*function funcao_triangulo() 
{
    var invalorA = document.getElementById ("invalorA")
    var invalorB = document.getElementById ("invalorB")
    var invalorC = document.getElementById ("invalorC")
    var tipo_triangulo = document.getElementById ("tipo_triangulo")

    var valorA = Number (invalorA.value)
    var valorB = Number (invalorB.value)
    var valorC = Number (invalorC.value)

    if (valorC < (valorA+valorB) && valorB < (valorA+valorC) && valorA < (valorB+valorC)) 
    {
        tipo_triangulo.textContent = "O triângulo pode ser formado"
        
        if (valorA == valorB && valorB == valorC) 
        {
            tipo_triangulo.textContent = "O triângulo é equilátero"

        } 
        
        else if (valorA == valorB || valorA== valorC || valorC == valorB) 
        
        {
            tipo_triangulo.textContent = "O triângulo é isósceles"
            
        } else 
        {
            tipo_triangulo.textContent = "O triângulo é escaleno"
        }
    } 
    else 
    {
        tipo_triangulo.textContent = "O triângulo não pode ser formado"
    }
}
    var outResultado = document.getElementById ("outResultado")
    outResultado.addEventListener ("click" , funcao_triangulo) 
          /*/
//criar referências ao elemento da pagina
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

    if (lado3 < (lado1+lado2) && lado2 < (lado1+lado3) && lado1 < (lado2+lado3)) 
    {
        resultado.innerText = `O triângulo pode ser formado!`;
        //cor gold
        resultado.style.color="#FFD700";
        
        if (lado1 == lado2 && lado2 == lado3) 
        {
            
            tipo_triangulo.innerText=`O triângulo é equilátero`
            tipo_triangulo.style.color="red"

        } 
        
        else if (lado1 == lado2 || lado1== lado3 || lado3 == lado2) 
        
        {
            tipo_triangulo.innerText=`O triângulo é isósceles`
            tipo_triangulo.style.color="blue"
            
        } else 
        {
            tipo_triangulo.innerText=`O triângulo é escaleno`
            tipo_triangulo.style.color="green"
        }
    } 
    else 
    {
        resultado.innerText = `O triângulo não pode ser formado...`;
        //cor indigo
        resultado.style.color="#4B0082";
    }
    
})