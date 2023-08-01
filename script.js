alert("Use pontos no lugar de vírgulas");

function Converter() {
    let de = document.getElementById("de").value;
    let para = document.getElementById("para").value;
    let temperatura = document.getElementById("temperatura").value;
    let resultado = document.getElementById("resultado");
    let valorConvertido = 0;

    if(de == "celsius" && para == "fahrenheit"){
        valorConvertido = temperatura * 1.8 + 32;
        return resultado.innerHTML = valorConvertido.toFixed(2) + "°F";
     }
     else if(de == "fahrenheit" && para == "celsius"){
         valorConvertido = (temperatura - 32) / 1.8;
         return resultado.innerHTML = valorConvertido.toFixed(2) + "°C";
     }
     else if(de == "celsius" && para == "kelvin"){
            valorConvertido = temperatura + 273.15;
            return resultado.innerHTML = valorConvertido.toFixed(2) + "K";
        }
     else if(de == "kelvin" && para == "celsius"){
         valorConvertido = temperatura - 273.15;
         return resultado.innerHTML = valorConvertido.toFixed(2) + "°C";
     }
     else if(de == "fahrenheit" && para == "kelvin"){
         valorConvertido = (temperatura - 32) / 1.8 + 273.15;
         return resultado.innerHTML = valorConvertido.toFixed(2) + "K";
     }
     else if(de == "kelvin" && para == "fahrenheit"){
         valorConvertido = (temperatura - 273.15) * 1.8 + 32;
         return resultado.innerHTML = valorConvertido.toFixed(2) + "°F";
     }
     else {
         alert("Selecione uma opção válida!");
     }
}
