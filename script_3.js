const input3 = document.getElementById('input3');
const result3 = document.getElementById('result3');
const inputType3 = document.getElementById('inputType3');
const resultType3 = document.getElementById('resultType3');
let inputType3Value, resultType3Value; 

//adding listener for liquid and fuel consumption
input3.addEventListener("keyup", liquidResult);
inputType3.addEventListener("change", liquidResult);
resultType3.addEventListener("change", liquidResult);

// initial value
inputType3Value = inputType3.value;
resultType3Value = resultType3.value;
inputType3Value = inputType3.value;

//Liquid and Fuel Consumption Conversion
function liquidResult(){
    //result3.value = input3.value

    inputType3Value = inputType3.value;
    resultType3Value = resultType3.value;

    if(inputType3Value === "gallon" && resultType3Value === "liter"){
        //Gallon to Liter 
        result3.value = Number(input3.value) * 3.785;
    }else if(inputType3Value === 'liter' && resultType3Value === 'gallon'){
        //Liter to Gallon
        result3.value = Number(input3.value) / 3.785;
    }else if(inputType3Value === 'mpg' && resultType3Value === 'km/l'){
        //MPG to Kilometer per Liter
        result3.value = Number(input3.value) / 2.352
    }else if(inputType3Value === 'km/l' && resultType3Value === 'mpg'){
        //Kilometer per Liter to Miles per Gallon
        result3.value = Number(input3.value) * 2.352;
    }else if(inputType3Value === 'kWh' && resultType3Value === 'mpgE'){
        //Kilowatt per Hour to Miles Per Gallon equivalent
        result3.value = Number(input3.value) * 33.705;
    }else if(inputType3Value === 'mpgE' && resultType3Value === 'kWh'){
        //Miles Per Gallon to Kilowatt and Hour 
        result3.value = Number(input3.value) / 33.705;
    }else if(inputType3Value === 'kWh' && resultType3Value === 'km/lE'){
        //Kilowatt per Hour to Kilometers per Liter Equivalent
        result3.value = Number(input3.value) / 0.00000111
    }else if(inputType3Value === 'km/lE' && resultType3Value === 'kWh'){
        //Kilometers per Liter Equivalent to Kilowatts an Hour
        result3.value = Number(input3.value) * 0.00000111
    }
}
