//criar referências ao elemento da pagina
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const res2 = document.querySelector("h4")

frm.addEventListener("submit",(e) => {
   
    //Evista o envio do formulario
    e.preventDefault();

    //Obter os valores digitados
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    //Calculo da média
    const media = (nota1+nota2)/2;

    console.log(media);

    resp1.innerText=`Média das Notas ${media.toFixed(2)}`;




})