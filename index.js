const convertBtn = document.getElementById("convert-btn");
let inputText = document.getElementById("input-text");
let meterFeet = document.getElementById("meter-feet");
let literGallon = document.getElementById("liters-gallons");
let kiloPounds = document.getElementById("kilograms-pounds");

convertBtn.addEventListener("click", () => {
  let enteredValue = parseFloat(inputText.value);
  let kilogram = Number(enteredValue) * 2.204;
  let liter = Number(enteredValue) * 0.264;
  let meter = Number(enteredValue) * 3.281;
  let feet = Number(enteredValue) * 0.0003048;
  let gallon = Number(enteredValue) * 3.78541;
  let pound = Number(enteredValue) * 0.454;

  console.log(inputText.value, enteredValue);
  if (enteredValue === "") {
    return;
  }

  meterFeet.textContent = `${enteredValue} meters = ${meter.toFixed(
    3
  )} feet | ${enteredValue} feet = ${feet.toFixed(3)} meters `;
  literGallon.textContent = `${enteredValue} liters = ${liter.toFixed(
    3
  )} gallons | ${enteredValue} gallons = ${gallon.toFixed(3)} liters`;
  kiloPounds.textContent = ` ${enteredValue} kilos = ${kilogram.toFixed(
    3
  )} pounds | ${enteredValue} pounds = ${pound.toFixed(3)} kilos`;
});
