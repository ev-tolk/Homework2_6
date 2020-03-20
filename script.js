var x = 0;
var btnSum = document.getElementById('sum');
var btnEq = document.getElementById('eq');
var btnSub = document.getElementById('sub');
var btnMult = document.getElementById('mult');
var btnDiv = document.getElementById('div');
var btnClean = document.getElementById('clean');
var btnFact = document.getElementById('fact');
var btnPow = document.getElementById('pow');
var btnMod = document.getElementById('mod');
var btnSin = document.getElementById('sin');
var btnCos = document.getElementById('cos');
var btnTg = document.getElementById('tg');
var btnCtg = document.getElementById('ctg');
var btnDeg = document.getElementById('deg');
var btnDot = document.getElementById('dot');
var z = '';
var y = 0;
var isSecondStarted = false;
var d = false;

function calc() {
    x = Number(document.form.pole.value);
    if (z == '+') {
        document.form.pole.value = +(y + x).toFixed(15);
    }
    if( z == '-') {
        document.form.pole.value = +(y - x).toFixed(15);
    }
    if (z == '*') {
        document.form.pole.value = +(y * x).toFixed(15);
    }
    if (z == '/') {
        if(x == 0) {
            alert('Деление на 0 запрещено!');
        } else document.form.pole.value = +(y / x).toFixed(15);
    }
    if (z == '**'){
        document.form.pole.value = +(y ** x).toFixed(15);
    }
    if (z == '%'){
        document.form.pole.value = +(y % x).toFixed(15);
    }
    z = '';
}

//записываем цифру с кнопочки в поле ввода
for(let i=0; i<10; i++) {
    var num = document.getElementById(i);
    num.addEventListener('click', function() {
        if (isSecondStarted == true){
            document.form.pole.value = '';
            document.form.pole.value = i;
            isSecondStarted = false;
            d = false;
        } else document.form.pole.value += i;
    });
}

function startSecondNumber(){
    y = Number(document.form.pole.value);
    isSecondStarted = true;
}

btnDot.addEventListener('click', () => {
    if (d == false){
        document.form.pole.value += '.';
        d = true;
    }
});

btnClean.addEventListener('click', () => {
    y = 0;
    isSecondStarted = false;
    d = false;
    z = '';
    document.form.pole.value = '';
})

//делаем так, чтобы после нажатия на кнопку '+' запоминалось значение х в переменной у, х обнулялся. А переменная z служит как маркер для проверки при нажатии кнопки "="

btnSum.addEventListener('click', () => {
    calc();
    startSecondNumber();
    z = '+';
});

// вычитание

btnSub.addEventListener('click', () => {
    calc();
    startSecondNumber();
    z = '-';
});

//умножение

btnMult.addEventListener('click', () => {
    calc();
    startSecondNumber();
    z = '*';
});

//деление

btnDiv.addEventListener('click', () => {
    calc();
    startSecondNumber();
    z = '/';
});

//факториал

btnFact.addEventListener('click', () => {
    if(Number(document.form.pole.value) < 0  || !Number.isInteger(Number(document.form.pole.value))){
        alert('Число должно быть целым неотрицательным!');
    }else{
        var result = 1;
        for(let i=1; i<=Number(document.form.pole.value); i++){
            result *= i;
        }
        document.form.pole.value = result;
    }
});

//степень

btnPow.addEventListener('click', () => {
    calc();
    startSecondNumber();
    z = '**';
});

btnMod.addEventListener('click', () => {
    calc();
    startSecondNumber();
    z = '%';
});

var convertDegToRad = deg => {
    return deg * Math.PI/180;
}

btnSin.addEventListener('click', () => {
    x = Number(document.form.pole.value);
    if (btnDeg.value == "DEG"){
        x = convertDegToRad(x);
    }
    x = Math.sin(x);
    document.form.pole.value = +x.toFixed(15);
    d = true;
});

btnCos.addEventListener('click', () => {
    x = Number(document.form.pole.value);
    if (btnDeg.value == "DEG"){
        x = convertDegToRad(x);
    }
    x = Math.cos(x);
    document.form.pole.value = +x.toFixed(15);
    d = true;
});

btnTg.addEventListener('click', () => {
    if (Number(document.form.pole.value) == 90 || Number(document.form.pole.value) == 270){
        alert('Error');
    } else
    x = Number(document.form.pole.value);
    if (btnDeg.value == "DEG"){
        x = convertDegToRad(x);
    }
    x = Math.tan(x);
    document.form.pole.value = +x.toFixed(15);
    d = true;
});

btnCtg.addEventListener('click', () => {
    if (Number(document.form.pole.value) == 0 || Number(document.form.pole.value) == 180 || Number(document.form.pole.value) == 360){
        alert('Error');
    } else
    x = Number(document.form.pole.value);
    if (btnDeg.value == "DEG"){
        x = convertDegToRad(x);
    }
    x = 1 / Math.tan(x);
    document.form.pole.value = +x.toFixed(15);
    d = true;

});

btnDeg.addEventListener('click', () => {
    if (btnDeg.value == "DEG"){
        btnDeg.value = "RAD";
    }else btnDeg.value = "DEG";
});

//кнопка равно выполняет арифметические операции. Какое именно действие нужно сделать определяем через значение переменной z

btnEq.addEventListener('click', calc);
