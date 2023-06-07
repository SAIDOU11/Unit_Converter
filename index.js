/*

1 meter = 3.281 feet --- 1 feet = 0,0003048
1 liter = 0.264 gallon ---  1 gallon = 3,78541
1 kilogram = 2.204 pound --- 1 pound = 0.454
toFixed(3)

*/

const convertBtn = document.getElementById("convert-btn");
let inputText = document.getElementById("input-text");
let meterFeet = document.getElementById("meter-feet");
let literGallon = document.getElementById("liters-gallons");
let kiloPounds = document.getElementById("kilograms-pounds");

convertBtn.addEventListener("click", () => {
  let enteredValue = parseFloat(inputText.value);
  console.log(inputText.value, enteredValue);
  if (enteredValue === "") {
    return;
  }
  let kilogram = Number(enteredValue) * 2.204;
  let liter = Number(enteredValue) * 0.264;

  console.log(inputText.value * 3.281);
  console.log(inputText.value * 0.264);
  console.log(kilogram.toFixed(3));
  meterFeet.textContent = `REMPLACE ${kilogram.toFixed(3)} `;
  literGallon.textContent = `REMPLACE ${liter.toFixed(3)} `;
  kiloPounds.textContent = ` ${enteredValue} kilos = ${kilogram.toFixed(
    3
  )} pounds | ${enteredValue} pounds = ${kilogram.toFixed(3)} kilos`;
});
