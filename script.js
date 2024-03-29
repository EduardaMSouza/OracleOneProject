
const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

const encriptar = () => {
    const input = document.getElementById("content__input__input");
    const output = document.getElementById("content__output__textarea");

    if(input.value.length!=0){
        tirarBackground();
    }else{
        return;
    }

    const textoEncriptado = codificador(input.value);

    output.value = textoEncriptado
    input.value = "";

} 

const desencriptar = () => {
    const input = document.getElementById("content__input__input");
    const output = document.getElementById("content__output__textarea");

    if(input.value.length!=0){
        tirarBackground();
    }else{
        return;
    }

    const textoEncriptado = descodificador(input.value);

    

    output.value = textoEncriptado
    input.value = "";
}


const descodificador = (string) =>  {
    string = string.toLowerCase();

    for(let i = 0; i < matrizCodigo.length;i++) {
        if(string.includes(matrizCodigo[i][1])) {
            string = string.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 
    console.log(string)
    return string;

}


const codificador = (string) => {
    string = string.toLowerCase();

    for(let i = 0; i < matrizCodigo.length;i++) {
        if(string.includes(matrizCodigo[i][0])) {
            string = string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 
    console.log(string)
    return string;

}

const tirarBackground = () => {
    const output = document.getElementById("content__output__textarea");
    
    const button = document.getElementById("button_copy");
    tirarmensagens();
    output.style.backgroundImage = 'none';


    button.style.display = 'block';
    button.textContent = "copiar";
    button.style.width = '230px'
    button.style.height = '50px'
    button.style.borderRadius = '16px'
    button.style.color = ' #0A3871'
    button.style.borderColor = ' #0A3871'

    button.addEventListener("click", clipboard, false);


    if(screen.width < 500 ){
        output.style.marginLeft = '0%'
        output.style.marginTop = '9%'
        output.style.borderRadius = '0px'
        output.style.width = '90%'
    }else{
        output.style.marginLeft = '10%'

    }
}

const tirarmensagens = () => {

    const h1 = document.getElementById("content__output__message__h1");
    const h2 = document.getElementById("content__output__message__h2");
    h1.style.display = "none";
    h2.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () =>  {
   
    const output = document.getElementById("content__output__textarea");
    const input = document.getElementById("content__input__input");


    
    output.value = "";
    input.value = "Digite aqui";
});


async function clipboard (){
    const output = document.getElementById("content__output__textarea");
    let text = output.value;
try {
  await navigator.clipboard.writeText(text);
  console.log('Content copied to clipboard' + text);
} catch (err) {
  console.error('Failed to copy: ', err);
}
}
