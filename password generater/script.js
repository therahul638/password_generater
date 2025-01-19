let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});
let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numeric = document.getElementById("numeric");
let symbol = document.getElementById("symbol");
let generateButton = document.getElementById("generateButton");
let copyicon = document.getElementById("copyicon");

generateButton.addEventListener("click", () => {
  passbox.value = generatePassword();
});
let lowerValue = "abcdefghijklmnopqrstuvwxyz";
let upperValue = " ABCDEFGHIJKLMNOPQRSTUVGXYZ";
let numberValue = "0123456789";
let symbolValue = '!`~.,:;"?/||';
function generatePassword() {
  let genPassword = "";
  let allchars = "";
  allchars += uppercase.checked ? upperValue : "";
  allchars += lowercase.checked ? lowerValue : "";
  allchars += numeric.checked ? numberValue : "";
  allchars += symbol.checked ? symbolValue : "";
  if (allchars == 0 || allchars == "") {
    return genPassword;
  }
  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    i++;
  }
  return genPassword;
}
// copyicon.addEventListener("click", () => {
//   navigator.clipboard.writeText(passbox.value);
// });
copyicon.addEventListener("click", () => {
  if (passbox.value != "" || passbox.value.length >= 1) {
    navigator.clipboard.writeText(passbox.value);
    copyicon.title = "password copied";
  }
});
