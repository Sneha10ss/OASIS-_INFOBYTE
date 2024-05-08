const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convertButton');
const resultDisplay = document.getElementById('result');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    alert("Please enter a valid number");
    return;
  }
  const unit = unitSelect.value;
  let convertedTemp;

  if (unit === 'celsius') {
    convertedTemp = convertCelsius(temperature);
  } else if (unit === 'fahrenheit') {
    convertedTemp = convertFahrenheit(temperature);
  } else if (unit === 'kelvin') {
    convertedTemp = convertKelvin(temperature);
  }

  const convertedUnit = unit === 'celsius' ? 'Fahrenheit' : (unit === 'fahrenheit' ? 'Celsius' : 'Celsius');
  resultDisplay.textContent = `${temperature}°${unit} is equal to ${convertedTemp.toFixed(2)}°${convertedUnit}`;
}

function convertCelsius(celsius) {
  return (celsius * 1.8) + 32;
}

function convertFahrenheit(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

function convertKelvin(kelvin) {
  if (kelvin < -273.15) {
    return "Invalid temperature. Kelvin cannot be lower than absolute zero (-273.15°C)";
  }
  const celsius = kelvin - 273.15;
  return convertCelsius(celsius);
}