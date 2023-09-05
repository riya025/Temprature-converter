document.addEventListener("DOMContentLoaded", function () 

{
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const toCelsiusBtn = document.getElementById("toCelsiusBtn");
    const toFahrenheitBtn = document.getElementById("toFahrenheitBtn");
    const resultDisplay = document.getElementById("result");

    toCelsiusBtn.addEventListener("click", function ()

     {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * (5 / 9);
            resultDisplay.innerHTML = `${celsius.toFixed(2)} &deg;C`;
        }
    });

    toFahrenheitBtn.addEventListener("click", function ()
    
    {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9 / 5) + 32;
            resultDisplay.innerHTML = `${fahrenheit.toFixed(2)} &deg;F`;
        }
    });
});
