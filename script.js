var one=document.getElementById('one');
var two=document.getElementById('two');
var three=document.getElementById('three');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var seven=document.getElementById('seven');
var eight=document.getElementById('eight');
var nine=document.getElementById('nine');
var zero=document.getElementById('zero');
var plus=document.getElementById('plus');
var minus=document.getElementById('minus');
var multiply=document.getElementById('multiply');
var divide=document.getElementById('divide');
var equal=document.getElementById('equal');
var clearr=document.getElementById('clear');

var display=document.getElementById('out');
var displayMini=document.getElementById('outmini');

document.addEventListener('keydown', function(event){
   var keyval=event.keyCode;
   if(keyval==48||keyval==45){
       display.value=display.value+0;

   }
    if(keyval==49||keyval==35){
        display.value=display.value+1;

    }
    if(keyval==50||keyval==40){
        display.value=display.value+2;

    }
    if(keyval==51||keyval==34){
        display.value=display.value+3;

    }
    if(keyval==52||keyval==37){
        display.value=display.value+4;

    }
    if(keyval==53||keyval==12){
        display.value=display.value+5;
    }
    if(keyval==54||keyval==39){
        display.value=display.value+6;
    }
    if(keyval==55||keyval==103){
        display.value=display.value+7;
    }
    if(keyval==56||keyval==104){
        display.value=display.value+8;
    }

    if(keyval==190||keyval==46){
        display.value=display.value+'.';
    }
    if(keyval==57||keyval==105){
        display.value=display.value+9;
    }


    if(keyval==8){
        display.value='';
        result=0;
        operator='';
        isEqualClicked=0;
        displayMini.value='';
    }
    if(keyval==107){
        if(isEqualClicked==1){
            result=result+0;
        }else{
            result=+result + +display.value;
            // alert(result);
        }

        display.value='';
        operator='+';
        displayMini.value=result+operator;

    }


    if(keyval==189||keyval==109){
        if(result==0){
            result=display.value;
        }
        else if(isEqualClicked==1){
            result=result-0;
        }
        else{
            result=+result - +display.value;
        }

        //alert(result);
        display.value='';
        operator='-';
        displayMini.value=result+operator;

    }

    if(keyval==106){
        if(result==0){
            result=display.value;
        }
        else if(isEqualClicked==1){
            result=result*1;
        }
        else{
            result=+result * +display.value;
        }

        //alert(result);
        display.value='';
        operator='*';
        displayMini.value=result+operator;
    }

    if(keyval==111||keyval==191){
        if(result==0){
            result=display.value;
        }
        else if(isEqualClicked==1){
            result=result/1;
        }

        else{
            result=+result / +display.value;
        }

        //alert(result);
        display.value='';

        operator='/';
        displayMini.value=result+operator;
    }
    if(keyval==13||keyval==187){
        if(operator=='+'){
            result=+result + +display.value;
        }else if(operator=='-'){
            result=+result - +display.value;
        }else if(operator=='*'){
            result=+result * +display.value;
        }else if (operator=='/'){
            result=+result / +display.value;
        }else{
            result='Error';
        }

        // switch(operator) {
        //     case '+':
        //         result=+result + +display.value;
        //     case '-':
        //         result=+result - +display.value;
        //     case '*':
        //         result=+result * +display.value;
        //     case '/':
        //         result=+result / +display.value;
        //     default:
        //         result='Error';
        // }
        //alert(result);

        display.value=result;
        //alert(operator);
        //alert(result);
        isEqualClicked=1;
        displayMini.value='Result'

    }








} );

one.onclick=function () {
    display.value=display.value+1;
}
two.onclick=function () {
    display.value=display.value+2;
}
three.onclick=function () {
    display.value=display.value+3;
}
four.onclick=function () {
    display.value=display.value+4;
}
five.onclick=function () {
    display.value=display.value+5;
}
six.onclick=function () {
    display.value=display.value+6;
}
seven.onclick=function () {
    display.value=display.value+7;
}
eight.onclick=function () {
    display.value=display.value+8;
}
nine.onclick=function () {
    display.value=display.value+9;
}
zero.onclick=function () {
    display.value=display.value+0;
}
clearr.onclick=function () {
    display.value=display.value='';
    result=0;
    operator='';
    isEqualClicked=0;
    displayMini.value='';

}

var result=0;
var operator;
var isEqualClicked=0;

plus.onclick=function () {

     if(isEqualClicked==1){
        result=result+0;
        }else{
         result=+result + +display.value;
         // alert(result);
     }

    display.value='';
    operator='+';
    displayMini.value=result+operator;

}

minus.onclick=function () {
    if(result==0){
        result=display.value;
    }
    else if(isEqualClicked==1){
        result=result-0;
    }
    else{
        result=+result - +display.value;
    }

   //alert(result);
    display.value='';
    operator='-';
    displayMini.value=result+operator;
}
multiply.onclick=function () {
    if(result==0){
        result=display.value;
    }
    else if(isEqualClicked==1){
        result=result*1;
    }
    else{
        result=+result * +display.value;
    }

    //alert(result);
    display.value='';
    operator='*';
    displayMini.value=result+operator;
}

divide.onclick=function () {
    if(result==0){
        result=display.value;
    }
    else if(isEqualClicked==1){
        result=result/1;
    }

    else{
        result=+result / +display.value;
    }

    //alert(result);
    display.value='';

    operator='/';
    displayMini.value=result+operator;
}

equal.onclick=function () {

    if(operator=='+'){
        result=+result + +display.value;
    }else if(operator=='-'){
        result=+result - +display.value;
    }else if(operator=='*'){
        result=+result * +display.value;
    }else if (operator=='/'){
        result=+result / +display.value;
    }else{
        result='Error';
    }

    // switch(operator) {
    //     case '+':
    //         result=+result + +display.value;
    //     case '-':
    //         result=+result - +display.value;
    //     case '*':
    //         result=+result * +display.value;
    //     case '/':
    //         result=+result / +display.value;
    //     default:
    //         result='Error';
    // }
    //alert(result);

    display.value=result;
    //alert(operator);
    //alert(result);
    isEqualClicked=1;
    displayMini.value='Result';
}
