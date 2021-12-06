const clickBtn = document.querySelector(".myButton");
const result = document.querySelector(".result");

const vowelsFinder = () => {
  const text = document.querySelector(".input").value;
  const len = text.length;
  let vowelCount = 0;
  for (let i = 0; i < len; i++) {
    if (text[i].match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }
  if (len === 0) {
    result.textContent = "Please enter a word first";
    result.style.color = "red";
  } else {
    result.innerHTML = `${text.toUpperCase()} has ${vowelCount} vowels in it `;
    result.style.color = "#49FF00";
  }
};

clickBtn.addEventListener("click", vowelsFinder);

document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
      vowelsFinder();
    }
  })
  
