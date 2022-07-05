var modal = document.getElementById("mymodal");
var btnFirst = document.getElementById("btn_modal_window-first");
var btnSecond = document.getElementById("btn_modal_window-second");
var btnThird = document.getElementById("btn_modal_window-third");
var close = document.getElementsByClassName("close_modal_window")[0];

btnFirst.onclick = function () {
    modal.style.display = "block";
}

btnSecond.onclick = function () {
    modal.style.display = "block";
}

btnThird.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal){
        modal.style.display = "none";
    }
}

/*Розраховуємо */ 

var invest = document.getElementById("pay_btn");

var investSum = document.getElementById("sum-to-invest");

var totalSum = document.getElementById("total-sum");


invest.onclick = function () {

    if(totalSum.value.length==0 || totalSum.value == 0){
        alert("Total amount available for investment is not possible")
    }else if(totalSum.value<0){
        alert("Total amount available can't be negative")
    }
    if(totalSum.value >= 0){
        totalSum.value = totalSum.value - investSum.value;
    }
}

