const myProblem = () => {
    var a = document.getElementById("in1").value;
    var answ = Math.cbrt(a);
    var answer = "(x + " + answ + ")" + "(x<sup>2</sup> - " + answ + "x " + "+ " + answ * answ + ")";
        return answer;
};
const myCalc = () => {
    document.getElementById("demo").innerHTML = myProblem();
}

const myProblem2 = () => {
    var a = document.getElementById("in2").value;
    var answ = Math.cbrt(a);
    var b = document.getElementById("in3").value;
    var bansw = Math.cbrt(b);
    var answer = "(" + answ + "x " + "+ " + bansw + ")" + "(" + answ * answ + "x<sup>2</sup> " + "- "+ answ * bansw + "x " + "+ " + bansw * bansw + ")";       
        return answer;
};
const myCalc2 = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
}
