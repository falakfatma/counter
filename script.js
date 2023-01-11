let increase_Btn = document.getElementById('increase_btn');
let decrease_btn = document.getElementById('decrease_btn');
let reset = document.getElementById('reset');
let counter_Text = document.getElementById('counter_Text');
let num = 0;

//increase Number
function increaseNumber() {
  num += 1
  counter_Text.innerHTML = num
}

//decrese Number
function decreaseNumber() {
  num -= 1
  counter_Text.innerHTML = num
}

//reset Number
function resetNumber() {
  num = 0;
  counter_Text.innerHTML = num;
}

increase_Btn.addEventListener('click', () => {
  increaseNumber();
})
decrease_btn.addEventListener('click', () => {
  decreaseNumber();
})
reset.addEventListener('click', () => {
  resetNumber();
})