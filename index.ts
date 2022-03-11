interface Operaciones{

     sumar(num1:number,num2:number):number;
     restar(num1:number,num2:number):number;
     multiplicar(num1:number,num2:number):number;
     dividir(num1:number,num2:number):number;
     calcularRaiz(num1:number):number;
     limpiar():void;
       
 }
class Calculadora implements Operaciones{

    constructor(){
   
    }
     sumar(num1: number, num2: number): number {
        document.getElementById('visor').innerText=(num1+num2)+"";
        return dato1+dato2;
     }
     restar(num1: number, num2: number): number {
        document.getElementById('visor').innerText=(num1-num2)+"";
        return dato1-dato2;
     }
     multiplicar(num1: number, num2: number): number {
        document.getElementById('visor').innerText=(num1*num2)+"";
         return num1*num2;
     }
     dividir(num1: number, num2: number): number {
        document.getElementById('visor').innerText=(num1/num2)+"";
         return num1/num2;
     }
     calcularRaiz(num1: number): number {
        document.getElementById('visor').innerText=(Math.sqrt(num1))+"";
         return Math.sqrt(num1);
     }
     limpiar():void  {
        document.getElementById('visor').innerHTML=" ";
       
     }   

 }
let pantalla:string;
let calculo:string="";
let dato:number=0;
let dato1:number=0,dato2:number=0;
let calculadora=new Calculadora();
function operacion(opera:string):void{
    switch(opera){
        case "limpiar":            
            calculadora.limpiar();
            break;
        case "1":
            pantalla=pantalla+"1";
            break;
        case "2":
            pantalla=pantalla+"2";
            break;
        case "3":
            pantalla=pantalla+"3";
            break;
        case "4":
            pantalla=pantalla+"4";
            break;
        case "5":
            pantalla=pantalla+"5";
            break;
        case "6":
            pantalla=pantalla+"6";
            break;
        case "7":   
            pantalla=pantalla+"7";
            break;
        case "8":
            pantalla=pantalla+"8";
            break;
        case "9":
            pantalla=pantalla+"9";
            break;
        case "0":
            pantalla=pantalla+"0";
            break;
        case "+":
            dato=parseFloat(pantalla);
            if (dato1!=0){
                dato2=dato;
            }else{
                dato1=dato;
            }
            calculo="suma";
            calculadora.limpiar();
            break;
        case "-":
            dato=parseFloat(pantalla);
            if (dato1!=0){
                dato2=dato;
            }else{
                dato1=dato;
            }
            calculadora.limpiar();
            calculo="resta";
            break;
        case "*":
            dato=parseFloat(pantalla);
            if (dato1!=0){
                dato2=dato;
            }else{
                dato1=dato;
            }
            calculadora.limpiar();
            calculo="multiplicacion";
            break;
        case "/":
            dato=parseFloat(pantalla);
            if (dato1!=0){
                dato2=dato;
            }else{
                dato1=dato;
            }
            calculadora.limpiar();
            calculo="division";
            break;
        case "raiz":
            dato=parseFloat(pantalla);
            let a=calculadora.calcularRaiz(dato).toString;
            document.getElementById('visor').innerText=a+"";
            break;
        case "=":
            comprobarOperacion();
            break;
    }
    
}
function comprobarOperacion():void{
    if (dato1!=0 && dato2!=0){
        switch(calculo){
            case "suma":
                dato=calculadora.sumar(dato1,dato2);
                document.getElementById('visor').innerText=dato+"";
                dato1=dato;
                dato2=0;
                break;
            case "resta":
                dato=calculadora.restar(dato1,dato2);
                document.getElementById('visor').innerText=dato+"";
                dato1=dato;
                dato2=0;
                break;
             case "multiplicar":
                dato=calculadora.multiplicar(dato1,dato2);
                document.getElementById('visor').innerText=dato+"";
                dato1=dato;
                dato2=0;
                break;
             case "dividir":
                dato=calculadora.dividir(dato1,dato2);
                document.getElementById('visor').innerText=dato+"";
                dato1=dato;
                dato2=0;
                break;
        }
    }
}