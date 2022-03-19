const greenBut = document.querySelector("#left");
const blueBut = document.querySelector("#right");
const redBut = document.querySelector("#reset");
const span1 = document.querySelectorAll("span")[0];
const span2 = document.querySelectorAll("span")[1];
const input = document.querySelector("input");

input.addEventListener("input", function (event) {
    event.preventDefault();
})

let flag = false;
greenBut.addEventListener('click', function () {
    if(input.value == (parseInt(span1.innerText) + 1))  {
        span1.innerText = `${parseInt(span1.innerText) + 1}`;
        span1.style.color = 'green';
        span2.style.color = 'red'; 
        flag = true;
    } else if(flag === false) { 
        span1.innerText = `${parseInt(span1.innerText) + 1}`;
    }
});

blueBut.addEventListener('click', function () {
    
    
    if(input.value == (parseInt(span2.innerText) + 1)) {
        span2.innerText = `${parseInt(span2.innerText) + 1}`;
        span2.style.color = 'green';
        span1.style.color = 'red';
        flag = true;
    } else if (!flag) {
        span2.innerText = `${parseInt(span2.innerText) + 1}`;
    }
});

redBut.addEventListener('click', function () {
    span1.innerText = "0";
    span2.innerText = "0";
    span1.style.color = 'black';
    span2.style.color = 'black'; 
    flag = false;
});



