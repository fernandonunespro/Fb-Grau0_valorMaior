function maiorValor(event) {
    event.preventDefault();

    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    
    if(numero1 > numero2)
        document.getElementById("resultado2").value = "O valor Maior é " + numero1;
    else if(numero2 > numero1)
        document.getElementById("resultado2").value = "O valor Maior é " + numero2;
    else
        document.getElementById("resultado2").value = "Valores iguais";
    }