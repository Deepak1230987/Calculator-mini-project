function solve(val) {
    var v=document.getElementById("result-show");
    v.value+=val;
}
function result() {
    var num1=document.getElementById("result-show").value;
    var num2=eval(num1);
    document.getElementById("result-show").value=num2;
}

function Clear() {
    var inp = document.getElementById("result-show");
    inp.value = '';
 }

function Back(){
    var x=document.getElementById("result-show");
    x.value=x.value.slice(0,-1);
}