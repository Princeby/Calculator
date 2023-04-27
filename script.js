// let screenArea = document.querySelector("#screen-area")

const output = document.getElementById("output");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const doubleZero = document.getElementById("double-zero");
const AC = document.getElementById("AC");
const DE = document.getElementById("DE");
const DOT = document.getElementById("DOT");
const multiply = document.getElementById("star");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("SLASH");
const result = document.getElementById("result");
const equal = document.getElementById("equal");
const leftBrace = document.getElementById("left-brace");
const rightBrace = document.getElementById("right-brace");
const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const squareRoot = document.getElementById("square-root");
const exponent = document.getElementById("exponent");
const log = document.getElementById("log");
const pi = document.getElementById("pi");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const screenArea = document.getElementById("screen-area");
const calcBody = document.getElementById("calc-body");
const body = document.getElementById("body");
const buttons = document.querySelectorAll(".btn");
const header = document.getElementById('Header');


let arrayOne = [];
let firstnumber = arrayOne.slice();

zero.addEventListener("click", () => {
    arrayOne.push(0);
    firstnumber.push(0);
    output.textContent = firstnumber.join("");
});

one.addEventListener("click", () => {
    arrayOne.push(1);
    firstnumber.push(1);
    output.textContent = firstnumber.join("");
});

two.addEventListener("click", () => {
    arrayOne.push(2);
    firstnumber.push(2);
    output.textContent = firstnumber.join("");
});

three.addEventListener("click", () => {
    arrayOne.push(3);
    firstnumber.push(3);
    output.textContent = firstnumber.join("");
});

four.addEventListener("click", () => {
    arrayOne.push(4);
    firstnumber.push(4);
    output.textContent = firstnumber.join("");
});

five.addEventListener("click", () => {
    arrayOne.push(5);
    firstnumber.push(5);
    output.textContent = firstnumber.join("");
});

six.addEventListener("click", () => {
    arrayOne.push(6);
    firstnumber.push(6);
    output.textContent = firstnumber.join("");
});

seven.addEventListener("click", () => {
    arrayOne.push(7);
    firstnumber.push(7);
    output.textContent = firstnumber.join("");
});

eight.addEventListener("click", () => {
    arrayOne.push(8);
    firstnumber.push(8);
    output.textContent = firstnumber.join("");
});

nine.addEventListener("click", () => {
    arrayOne.push(9);
    firstnumber.push(9);
    output.textContent = firstnumber.join("");
});

doubleZero.addEventListener("click", () => {
    arrayOne.push(0);
    arrayOne.push(0);
    firstnumber.push(0);
    firstnumber.push(0);
    output.textContent = firstnumber.join("");
});

DE.addEventListener("click", () => {
    arrayOne.pop();
    firstnumber.pop();
    output.textContent = firstnumber.join("");
})

AC.addEventListener("click", () => {
    arrayOne = [];
    firstnumber = [];
    let final = arrayOne;
    output.textContent = final;
    result.textContent = final;
})

DOT.addEventListener("click", () => {
    arrayOne.push(".");
    firstnumber.push(".");
    output.textContent = firstnumber.join("");
})

multiply.addEventListener("click", () => {
    arrayOne.push("*");
    firstnumber.push("*");
    output.textContent = firstnumber.join("");
})

plus.addEventListener('click', () => {
    arrayOne.push("+");
    firstnumber.push("+");
    output.textContent = firstnumber.join("");
})

minus.addEventListener("click", () => {
    arrayOne.push("-");
    firstnumber.push("-");
    output.textContent = firstnumber.join("");
})

divide.addEventListener("click", () => {
    arrayOne.push("/");
    firstnumber.push("/");
    output.textContent = firstnumber.join("");
})

equal.addEventListener('click', () => {
    try {
        let expression = arrayOne.join('');
        let results = eval(expression);
        result.textContent = results;
    } catch {
        result.textContent = "Error";
    }
})

leftBrace.addEventListener('click', () => {
    arrayOne.push("(");
    firstnumber.push("(");
    output.textContent = firstnumber.join("");
})

rightBrace.addEventListener('click', () => {
    arrayOne.push(")");
    firstnumber.push(")");
    output.textContent = firstnumber.join("");
})

sin.addEventListener('click', () => {
    arrayOne.push('Math.sin(');
    firstnumber.push("sin(");
    output.textContent = firstnumber.join("");
})

tan.addEventListener('click', () => {
    arrayOne.push('Math.tan(');
    firstnumber.push("tan(");
    output.textContent = firstnumber.join("");
})

cos.addEventListener('click', () => {
    arrayOne.push('Math.cos(');
    firstnumber.push("cos(");
    output.textContent = firstnumber.join("");
})

log.addEventListener('click', () => {
    arrayOne.push('Math.log(');
    firstnumber.push("log(");
    output.textContent = firstnumber.join("");
})

exponent.addEventListener('click', () => {
    arrayOne.push('^');
    firstnumber.push('^');
    output.textContent = firstnumber.join("");
})

squareRoot.addEventListener('click', () => {
    arrayOne.push('Math.sqrt(');
    firstnumber.push('√(');
    output.textContent = firstnumber.join("");
})

pi.addEventListener('click', () => {
    arrayOne.push("Math.PI");
    firstnumber.push("π");
    output.textContent = firstnumber.join("");
})

sun.addEventListener('click', () => {
    screenArea.classList.add('active');
    calcBody.classList.add('active');
    body.classList.add('active');
    sun.classList.add('active');
    moon.classList.add('active');
    header.classList.add('active');
    buttons.forEach(button => {
        button.classList.add('active');
      });
})

moon.addEventListener('click', () => {
    screenArea.classList.remove('active');
    calcBody.classList.remove('active');
    body.classList.remove('active');
    sun.classList.remove('active');
    moon.classList.remove('active');
    header.classList.remove('active');
    buttons.forEach(button => {
        button.classList.remove('active');
      });
})



