const input = document.getElementById('input');
const result = document.getElementById('result');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');
let inputTypeValue, resultTypeValue; 

// adding listener for power and engine displacement
input.addEventListener("keyup", powerResult);
inputType.addEventListener("change", powerResult);
resultType.addEventListener("change", powerResult);


// initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
inputTypeValue = inputType.value;

function powerResult(){
    //result.value = input.value;
    
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;


    // add formulas

    //Power and Displacement Conversion
    //Horsepower to Kilowatt
    if(inputTypeValue === "horsepower" && resultTypeValue ==="kilowatt"){
        result.value = Number(input.value) / 1.341;
    }else if(inputTypeValue === "kilowatt" && resultTypeValue === "horsepower"){
        //kilowatt to horsepower
        result.value = Number(input.value) * 1.341;
    }else if(inputTypeValue === "cubic inch" && resultTypeValue === "liter"){
        //Cubic Inch to Liter
        result.value = Number(input.value) / 61.024;
    }else if(inputTypeValue === "liter" && resultTypeValue === "cubic inch"){
        //Liter to Cubic Inch 
        result.value = Number(input.value) * 61.024;
    }else if(inputTypeValue === "cubic inch" && resultTypeValue === "cubic centimeter"){
        //Cubic Inch to Cubic Centimeter
        result.value = Number(input.value) * 16.387;
    }else if(inputTypeValue === "cubic centimeter" && resultTypeValue === "cubic inch"){
        //Cubic Centimeter to Cubic Inch
        result.value = Number(input.value) / 16.387;
    }else if(inputTypeValue === "liter" && resultTypeValue === "cubic centimeter"){
        //Liter to Cubic Centimeter
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "cubic centimeter" && resultTypeValue ==="liter"){
        //Cubic Centimeter to Liter
        result.value = Number(input.value) / 1000;
    }
}
