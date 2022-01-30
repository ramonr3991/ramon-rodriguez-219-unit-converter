const input2 = document.getElementById('input2');
const result2 = document.getElementById('result2');
const inputType2 = document.getElementById('inputType2');
const resultType2 = document.getElementById('resultType2');
let inputType2Value, resultType2Value; 

//adding listener for distance and speed
input2.addEventListener("keyup", distanceResult);
inputType2.addEventListener("change", distanceResult);
resultType2.addEventListener("change", distanceResult);

// initial value
inputType2Value = inputType2.value;
resultType2Value = resultType2.value;
inputType2Value = inputType2.value;


//Distance and Speed Conversion
function distanceResult(){
    //result2.value = input2.value;

    inputType2Value = inputType2.value;
    resultType2Value = resultType2.value;

    if(inputType2Value === "mile" && resultType2Value === "kilometer"){
        //Miles to Kilometers
        result2.value = Number(input2.value) * 1.609;
    }else if(inputType2Value === "kilometer" && resultType2Value === "mile"){
        //Kilometers to Miles
        result2.value = Number(input2.value) / 1.609;
    }
    else if(inputType2Value === "mile" && resultType2Value === "knot"){
        //Miles to Knots
        result2.value = Number(input2.value) / 1.151;
    }
    else if(inputType2Value === "knot" && resultType2Value === "mile"){
        //Knots to Miles
        result2.value = Number(input2.value) * 1.151;
    }else if(inputType2Value === "kilometer" && resultType2Value === "knot"){
        //Kilometers to Knots
        result2.value = Number(input2.value) / 1.852;
    }else if(inputType2Value === "knot" && resultType2Value === "kilometer"){
        //Knots to Kilometers
        result2.value = Number(input2.value) * 1.852;
    }
}