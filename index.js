var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (num1, num2) {
        document.getElementById('visor').innerText = (num1 + num2) + "";
        return dato1 + dato2;
    };
    Calculadora.prototype.restar = function (num1, num2) {
        document.getElementById('visor').innerText = (num1 - num2) + "";
        return dato1 - dato2;
    };
    Calculadora.prototype.multiplicar = function (num1, num2) {
        document.getElementById('visor').innerText = (num1 * num2) + "";
        return num1 * num2;
    };
    Calculadora.prototype.dividir = function (num1, num2) {
        document.getElementById('visor').innerText = (num1 / num2) + "";
        return num1 / num2;
    };
    Calculadora.prototype.calcularRaiz = function (num1) {
        document.getElementById('visor').innerText = (Math.sqrt(num1)) + "";
        return Math.sqrt(num1);
    };
    Calculadora.prototype.limpiar = function () {
        document.getElementById('visor').innerHTML = " ";
    };
    return Calculadora;
}());
var pantalla;
var calculo = "";
var dato = 0;
var dato1 = 0, dato2 = 0;
var calculadora = new Calculadora();
function operacion(opera) {
    switch (opera) {
        case "limpiar":
            calculadora.limpiar();
            break;
        case "1":
            pantalla = pantalla + "1";
            break;
        case "2":
            pantalla = pantalla + "2";
            break;
        case "3":
            pantalla = pantalla + "3";
            break;
        case "4":
            pantalla = pantalla + "4";
            break;
        case "5":
            pantalla = pantalla + "5";
            break;
        case "6":
            pantalla = pantalla + "6";
            break;
        case "7":
            pantalla = pantalla + "7";
            break;
        case "8":
            pantalla = pantalla + "8";
            break;
        case "9":
            pantalla = pantalla + "9";
            break;
        case "0":
            pantalla = pantalla + "0";
            break;
        case "+":
            dato = parseFloat(pantalla);
            if (dato1 != 0) {
                dato2 = dato;
            }
            else {
                dato1 = dato;
            }
            calculo = "suma";
            calculadora.limpiar();
            break;
        case "-":
            dato = parseFloat(pantalla);
            if (dato1 != 0) {
                dato2 = dato;
            }
            else {
                dato1 = dato;
            }
            calculadora.limpiar();
            calculo = "resta";
            break;
        case "*":
            dato = parseFloat(pantalla);
            if (dato1 != 0) {
                dato2 = dato;
            }
            else {
                dato1 = dato;
            }
            calculadora.limpiar();
            calculo = "multiplicacion";
            break;
        case "/":
            dato = parseFloat(pantalla);
            if (dato1 != 0) {
                dato2 = dato;
            }
            else {
                dato1 = dato;
            }
            calculadora.limpiar();
            calculo = "division";
            break;
        case "raiz":
            dato = parseFloat(pantalla);
            var a = calculadora.calcularRaiz(dato).toString;
            document.getElementById('visor').innerText = a + "";
            break;
        case "=":
            comprobarOperacion();
            break;
    }
}
function comprobarOperacion() {
    if (dato1 != 0 && dato2 != 0) {
        switch (calculo) {
            case "suma":
                dato = calculadora.sumar(dato1, dato2);
                document.getElementById('visor').innerText = dato + "";
                dato1 = dato;
                dato2 = 0;
                break;
            case "resta":
                dato = calculadora.restar(dato1, dato2);
                document.getElementById('visor').innerText = dato + "";
                dato1 = dato;
                dato2 = 0;
                break;
            case "multiplicar":
                dato = calculadora.multiplicar(dato1, dato2);
                document.getElementById('visor').innerText = dato + "";
                dato1 = dato;
                dato2 = 0;
                break;
            case "dividir":
                dato = calculadora.dividir(dato1, dato2);
                document.getElementById('visor').innerText = dato + "";
                dato1 = dato;
                dato2 = 0;
                break;
        }
    }
}
